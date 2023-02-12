import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import enviar from '../../../assets/enviar.svg';

import { CommentsForm, CommentsList } from './styles';
import useFetch from '../../../hooks/useFetch';
import { COMMENT_POST } from '../../../api';

const PhotoComments: React.FC<{ id: number, comments: any }> = ({ id, comments }) => {
  // comment inside the textarea
  const [comment, setComment] = useState('');
  // comment list from fetch
  const [commentsList, setCommentsList] = useState(() => comments);
  const commentsSection = useRef<HTMLUListElement>(null);
  const { isUserLoggedIn } = useContext(UserContext);
  const { error, makeRequest } = useFetch();

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [commentsList])



  function handleChange({ target }: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(target.value)
  };

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');

    if (token) {
      const { url, options } = COMMENT_POST(id, { comment }, token);
      const { response, json } = await makeRequest(url, options);

      if (response.ok) {
        setComment('');
        setCommentsList((prevState: any) => [...prevState, json]);
      }
    }
  }

  return (
    <>
      <CommentsList ref={commentsSection}>
        {commentsList.map((item: any) => (
          <li key={item.comment_ID}>
            <b>{item.comment_author}: </b>
            <span>{item.comment_content}</span>
          </li>
        )
        )}
      </CommentsList>
      {isUserLoggedIn && (
        <CommentsForm onSubmit={onSubmit}>
          <textarea
            id='comment'
            name='comment'
            value={comment}
            onChange={handleChange}
            placeholder="Comente aqui..."
          />
          <button>
            <img src={enviar} alt="Enviar" />
          </button>
          {error && <p>{error}</p>}
        </CommentsForm>
      )
      }
    </>
  );
}

export default PhotoComments;

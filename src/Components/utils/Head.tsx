import React, { useEffect } from 'react';

const Head: React.FC<{ title: string | undefined, description?: string }> = ({ title, description }) => {
  useEffect(() => {
    document.title = title + " | Dogs";
    document.querySelector("meta[name='description']")
      ?.setAttribute('content', description || '');
  }, [title, description]);

  return (
    <></>
  );
};

export default Head;

import React from 'react';
import FeedGrid from './FeedGrid';
import FeedModal from './FeedModal';

// import { Container } from './styles';

const Feed: React.FC = () => {
  return (
    <div>
      <FeedModal />
      <FeedGrid />
    </div>
  );
}

export default Feed;

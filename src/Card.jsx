import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { name, url, stargazersCount, watchersCount } = props;
  return (
    <div className="card">
      <div className="card-title">
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </div>
      <p>
        Stargazers: {stargazersCount} Watchers: {watchersCount}
      </p>
    </div>
  );
};

export default Card;

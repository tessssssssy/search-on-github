import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <a href={props.url} target="_blank">{props.name}</a>
            <p>Stargazers: {props.stargazersCount}</p>
            <p>Watchers: {props.watchersCount}</p>
        </div>
    )
}

export default Card;


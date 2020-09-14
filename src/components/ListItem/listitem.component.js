import React from 'react';
import moment from 'moment';
import Loader from '../Loader/Loader';

export const Storylistitem = ({ story }) => {
  const unixTimestamp = (time) => {
    let date = new Date(time * 1000);
    return moment(date).fromNow();
  };

  return (
    <div className="storyList">
      <ul>
        {story && story.length > 0 ? (
          <>
            {story.map((x) => (
              <li className="storyList-items" key={x.id}>
                <div className="storyList-score">{x.score}</div>
                <div className="storyList-details">
                  <div className="storyList-title">
                    {x.title}
                    <span className="storyList-url"> ({x.url})</span>
                  </div>
                  <div className="storyList-info">
                    by<u> {x.by} </u>
                    {unixTimestamp(x.time)} | <u>{x.descendants} comments</u>
                  </div>
                </div>
              </li>
            ))}
          </>
        ) : (
          <Loader />
        )}
      </ul>
    </div>
  );
};

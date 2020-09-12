import React from 'react';
import moment from 'moment'


export const Storylistitem = ({ story }) => {
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
                    {moment.unix(x.time).format("HH/mm/ss")} | <u>{x.descendants} comments</u>
                  </div>
                </div>
              </li>
            ))}
          </>
        ) : (
          <>Loading ...</>
        )}
      </ul>
    </div>
  );
};

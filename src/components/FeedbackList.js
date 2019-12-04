import React from 'react';
import './FeedbackList.css';

export default function FeedbackList({ msg, version = null }) {
    const classes = `Feedback-List Feedback-List-${version}`;
    return (
        <div className={classes}>
            <h1>My first component with {msg}</h1>
            {version && (
                <p>This is v.{version}</p>
            )}
        </div>
    );
}
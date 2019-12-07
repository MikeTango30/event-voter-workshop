import React from 'react';
import FeedbackList from "./components/FeedbackList";
import './App.css';

function App() {
    const feedbackList = [
        {id: '01', name: 'Jonas', datetime: 'YYYY-MM-DD', score: 1, text: 'komentaras kaip vertina Jonas'},
        {id: '02', name: 'Aldona', datetime: 'YYYY-MM-DD', score: -1, text: 'komentaras kaip vertina Aldona'},
    ];
    return (
        <div>
            <FeedbackList feedbackList={feedbackList}/>
        </div>
    );
}

export default App;

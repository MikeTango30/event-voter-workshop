import React, { useState } from 'react';
import FeedbackList from "./components/FeedbackList";
import VideoStream from "./components/VideoStream";
import PageBox from "./layout/PageBox";
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from "./components/Dashboard";
import PageControls from "./components/PageControls";
import AddFeedbackForm from "./components/AddFeedbackForm";


import './App.css';

function App() {
    const initialFeedbackList = [];
    const eventId = 'WUWz6xmSzbk';

    const [feedbackList, setFeedbackList] = useState(initialFeedbackList);
    const [feedbackFormVisible, setFeedbackFormVisible] = useState(false);

    function addFeedback(feedbackInput) {
           const now = new Date();
           const newEntry = {
                 id: Math.random(),
                 name: feedbackInput.name,
                 datetime: now.toUTCString(),
                 score: feedbackInput.score,
                 text: feedbackInput.text
           };
           setFeedbackList(prevFeedbackList => [newEntry, ...prevFeedbackList]);
           hideFeedbackForm();
         }

    function hideFeedbackForm() {
        setFeedbackFormVisible(false);
    }

    function showFeedbackForm(){
        setFeedbackFormVisible(true);
    }
    
    return (
        <>
            <CssBaseline/>
            <div className="main-content">
                <div className="main-content__left">
                    <PageBox>
                        <FeedbackList feedbackList={feedbackList}/>
                    </PageBox>
                </div>
                <div className="main-content__right">
                    <div className="sub-section">
                        <PageBox>
                            <VideoStream
                                videoUrl={`https://www.youtube.com/embed/${eventId}?controls=0`}
                            />
                        </PageBox>
                    </div>
                    <div className="sub-section">
                        <PageBox>
                            <Dashboard feedbackList={feedbackList}/>
                        </PageBox>
                    </div>
                </div>
            </div>
            <PageControls buttonAction={showFeedbackForm}/>
               {feedbackFormVisible && (
                 <AddFeedbackForm onCancel={hideFeedbackForm} onSubmit={addFeedback}/>
               )}
        </>
    );
}

export default App;

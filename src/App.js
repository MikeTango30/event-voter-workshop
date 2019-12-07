import React, { useEffect, useState } from 'react';
import FeedbackList from "./components/FeedbackList";
import VideoStream from "./components/VideoStream";
import PageBox from "./layout/PageBox";
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from "./components/Dashboard";
import PageControls from "./components/PageControls";
import AddFeedbackForm from "./components/AddFeedbackForm";
import * as feedbackStorage from './service/feedbackStorage';


import './App.css';

const DEFAULT_EVENT_ID = 'WUWz6xmSzbk';

function App() {
    const [feedbackList, setFeedbackList] = useState([]);
    const [feedbackFormVisible, setFeedbackFormVisible] = useState(false);
    const [eventId, setEventId] = useState(DEFAULT_EVENT_ID);
    const [score, setScore] = useState({ dislikeCount: 0, likeCount: 0 });


    useEffect(() => {
        feedbackStorage.initialize();
           const pathEventId = window.location.pathname.replace('/', '');
           if (pathEventId) {
                 setEventId(pathEventId);
               }
         }, []);
    
    useEffect(() => {
           feedbackStorage.listenForListChanges(eventId, newList =>
                 setFeedbackList(newList)
               );
        feedbackStorage.listenForScoreChanges(eventId, newScore =>
                 setScore(newScore)
               );
         }, [eventId]);

    function addFeedback(feedbackInput) {
        feedbackStorage.addFeedback(eventId, feedbackInput);
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
                            <Dashboard score={score}/>
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

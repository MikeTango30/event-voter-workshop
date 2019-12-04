import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import './FeedbackList.css';

export default function FeedbackList() {
    const classes = `Feedback-List`;
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ThumbUpIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText className={classes}
                    primary="Vardas"
                    secondary="informacinis tekstas"
                />
            </ListItem>
        </List>
    );
}
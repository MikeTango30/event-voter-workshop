import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddFeedbackForm({ onCancel, onSubmit }) {
    return (
        <Dialog
            open
            onClose={onCancel}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title">Add Feedback</DialogTitle>
            <DialogContent>
                <div>
                    *** Vertinimo forma ***
                </div>
            </DialogContent>
            <DialogActions>
                *** Valdymo mygtukai ***
            </DialogActions>
        </Dialog>
    );
}
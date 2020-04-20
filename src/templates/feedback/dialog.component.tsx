import React, { memo } from 'react';
import {
    Button, Dialog, DialogTitle, DialogActions
} from '../../utilities/material-ui.index';



export const DialogComponent = memo((props: any) => {
    const handleClose = (num: number) => props.onChange(num);

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogActions>
                    <Button onClick={() => handleClose(0)} color="primary">
                        确定
                    </Button>
                    <Button onClick={() => handleClose(1)} color="primary" autoFocus>
                        取消
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});


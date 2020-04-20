import React, { memo, useState } from 'react';
import UseStyles, { clsx } from '../../utilities/use.styles';
import {
    AppBar, Toolbar, IconButton, Typography, AccountCircle
} from '../../utilities/material-ui.index';
import { DialogComponent } from '../index';


export const AppBarComponent = memo((props: any) => {
    const classes = UseStyles();
    const [open, setOpen] = useState(false);

    const logout = (num: number) => {
        setOpen(false);
        num === 0 && props.onChange();
    };

    return (
        <>
            <AppBar position="absolute" className={clsx(classes.appBarShift)}>
                <Toolbar className={classes.appBarToolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.appBarTitle}>
                        {props.title}
                    </Typography>
                    <IconButton color="inherit" onClick={() => setOpen(true)}>
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DialogComponent
                open={open}
                title='确定退出账户吗？'
                onChange={logout}
            />
        </>
    );
});





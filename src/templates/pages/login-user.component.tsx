import React, { Fragment, memo, useState } from 'react';
import UseStyles from '../../utilities/use.styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FooterView } from '../../layouts/Footer';
import { login } from '../../redux/user.redux';
import {
    CssBaseline, Container, Typography, Button, TextField, Avatar, Box, LockOutlinedIcon, Link
} from '../../utilities/material-ui.index';


export const Login = memo(connect((s: any) => s.user, { login })((props: any) => {
    const classes = UseStyles();
    const [value, setValue] = useState({ name: '', password: '' });

    const register = () => {
        props.history.push('/register');
    };

    const handleChange = (event: any) => {
        setValue({ ...value, [event.target.id]: event.target.value });
    };

    const handleSubmit = () => {
        props.login(value);
    }

    return (
        <Fragment>
            {props.redirectTo && props.redirectTo !== '/login' ? <Redirect to={props.redirectTo} /> : null}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.loginPaper}>
                    <Avatar className={classes.loginAvatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        管理系统登录
                    </Typography>
                    <form className={classes.loginForm} noValidate>
                        <TextField
                            label="账号"
                            id='name'
                            variant="outlined"
                            onChange={handleChange}
                            value={value.name}
                            margin="normal"
                            required
                            fullWidth
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            label="密码"
                            id='password'
                            type='password'
                            variant="outlined"
                            onChange={handleChange}
                            value={value.password}
                            margin="normal"
                            required
                            fullWidth
                            autoComplete="current-password"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.loginSubmit}
                            onClick={handleSubmit}
                        >登录</Button>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={register}
                        >没有账号？注册</Link>
                    </form>
                </div>
                <Box mt={8}>
                    <FooterView />
                </Box>
            </Container>
        </Fragment>
    );
}));


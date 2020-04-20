import React, { Fragment, memo, useState } from 'react';
import { Redirect } from 'react-router-dom';
import UseStyles from '../../utilities/use.styles';
import {
    CssBaseline, Container, Typography, Button, Avatar, TextField, Grid, Box, LockOutlinedIcon, Link
} from '../../utilities/material-ui.index';
import { FooterView } from '../../layouts/Footer';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux';


export const Register = memo(connect((s: any) => s.user, { register })((props: any) => {
    const classes = UseStyles();
    const [value, setValue] = useState({ name: '', password: '', repeatpassword: '' });

    const login = () => {
        props.history.push('/login');
    };

    const handleChange = (event: any) => {
        setValue({ ...value, [event.target.id]: event.target.value });
    };

    const handleRegister = () => {
        props.register(value);
    };

    return (
        <Fragment>
            {props.redirectTo && props.redirectTo !== '/register' ? <Redirect to={props.redirectTo} /> : null}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.registerPaper}>
                    <Avatar className={classes.registerAvatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        管理系统注册
                    </Typography>
                    <form className={classes.registerForm} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="账号"
                                    autoComplete="name"
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="password"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="password"
                                    type="password"
                                    label="密码"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="repeatpassword"
                                    label="确认密码"
                                    type="password"
                                    autoComplete="repeatpassword"
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.registerSubmit}
                            onClick={(handleRegister)}
                        >注册</Button>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={login}
                        >已经有帐户了？登录</Link>
                    </form>
                </div>
                <Box mt={5}>
                    <FooterView />
                </Box>
            </Container>
        </Fragment>
    );
}));





import React, { memo, Fragment, useEffect } from 'react';
import {
  Box, Container, Grid, Paper
} from './utilities/material-ui.index';
import {
  AuthRouteComponent, Register, Login, TableComponent, Navigation, AppBarComponent
} from './templates/index';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UseStyles from './utilities/use.styles';
import { FooterView } from './layouts/Footer';
import { logoutSubmit, updatePage } from './redux/user.redux';
import { Exchanges, Products, Customers } from './data-source/index';


const navList = [
  {
    path: '/exchanges',
    component: Exchanges,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/customers',
    component: Customers,
  },
];

export const App = memo(() => (
  <BrowserRouter>
    <AuthRouteComponent />
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <AuthorizedLayout />
    </Switch>
  </BrowserRouter>
));

const AuthorizedLayout = memo(connect((s: any) => s.user, { logoutSubmit, updatePage })((props: any) => {
  const classes = UseStyles();
  const path = props.location.pathname;

  const logout = () => {
    document.cookie = `id=null`;
    props.logoutSubmit();
  };

  useEffect(() => {
    props.updatePage(props.location.pathname);
  }, []);

  return (
    <Fragment>
      <div className={classes.homeRoot}>
        {props.redirectTo && props.redirectTo !== path ? <Redirect to={props.redirectTo} /> : null}
        <AppBarComponent title='管理系统' onChange={logout} />
        <Navigation />
        <main className={classes.homeContent}>
          <div className={classes.homeAppBarSpacer} />
          <Container maxWidth="xl" className={classes.homeContainer}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.homePaper}>
                  {Dashboard()}
                  <TableComponent />
                </Paper>
              </Grid>
            </Grid>
            <Box pt={3}>
              <FooterView />
            </Box>
          </Container>
        </main>
      </div>
    </Fragment>
  );
}));

const Dashboard = () => {
  return (
    <Switch>
      {navList.map((v: any) => (<Route key={v.path} path={v.path} component={v.component} />))}
      <Redirect to={navList[0].path} />
    </Switch>
  );
}
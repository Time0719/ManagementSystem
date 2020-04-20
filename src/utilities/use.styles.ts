import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TableCell, withStyles } from '@material-ui/core';


const drawerWidth = 240;
const UseStyles = makeStyles((theme: Theme) =>
    createStyles(
        {
            registerPaper: {
                marginTop: theme.spacing(8),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            registerAvatar: {
                margin: theme.spacing(1),
                backgroundColor: theme.palette.secondary.main,
            },
            registerForm: {
                width: '100%',
                marginTop: theme.spacing(3),
            },
            registerSubmit: {
                margin: theme.spacing(3, 0, 2),
            },
            loginPaper: {
                marginTop: theme.spacing(8),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            loginAvatar: {
                margin: theme.spacing(1),
                backgroundColor: theme.palette.secondary.main,
            },
            loginForm: {
                width: '100%',
                marginTop: theme.spacing(1),
            },
            loginSubmit: {
                margin: theme.spacing(3, 0, 2),
            },
            homeRoot: {
                display: 'flex',
            },
            homeAppBarSpacer: theme.mixins.toolbar,
            homeContent: {
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            },
            homeContainer: {
                paddingTop: theme.spacing(2),
                paddingBottom: theme.spacing(2),
            },
            homePaper: {
                padding: theme.spacing(2),
                display: 'flex',
                overflow: 'auto',
                flexDirection: 'column',
            },
            navigation: {
                position: 'relative',
                whiteSpace: 'nowrap',
                width: drawerWidth,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                borderRight: '1px solid #ededed'
            },
            navigationNested: {
                paddingLeft: theme.spacing(5),
            },
            tableRoot: {
                flexShrink: 0,
                marginLeft: theme.spacing(2.5),
            },
            tableHead: {
                margin: '1%',
                maxHeight: '86%',
            },
            appBarToolbar: {
                paddingRight: 24,
            },
            appBarShift: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
            appBarTitle: {
                flexGrow: 1,
            },
        }),
);

export const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: '#ededed',
            color: theme.palette.common.black,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

export default UseStyles;

export * from '@material-ui/core/styles';
export { default as clsx } from 'clsx';



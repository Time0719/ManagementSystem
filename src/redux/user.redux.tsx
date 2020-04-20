import Axios from "axios";
import { _server } from '../data-source/fetcher';


type initStateType = {
    redirectTo: string,
    msg: string,
    name: string,
    type: string
};

const initState: initStateType = {
    redirectTo: '',
    msg: '',
    name: '',
    type: ''
}

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOGOUT = 'LOGOUT';
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';
const UPDATA_PAGE = 'UPDATA_PAGE';

export const user = (state = initState, action: any) => {
    console.log(state, action);
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state, msg: '', redirectTo: '/exchanges', ...action.payload };
        case LOAD_DATA:
            return { ...state, ...action.payload };
        case ERROR_MSG:
            return { ...state, isAuth: false, msg: action.msg };
        case LOGOUT:
            return { ...initState, redirectTo: '/login' };
        case UPDATA_PAGE:
            return { ...state, ...action };
        default:
            return state;
    }
};

export const updatePage = (redirectTo: any) => {
    return { type: UPDATA_PAGE, redirectTo: redirectTo };
};

const authSuccess = (obj: any) => {
    const { password, ...data } = obj;
    return { type: AUTH_SUCCESS, payload: data };
};

const errorMsg = (msg: any) => {
    return { msg, type: ERROR_MSG };
};

export const loadData = (userinfo: any) => {
    return { type: LOAD_DATA, payload: userinfo };
};

export const logoutSubmit = () => {
    return { type: LOGOUT };
};

// export const update = (data: any) => {
//     return (dispatch: any) => {
//         Axios.post('/user/update', data)
//             .then(res => {
//                 if (res.status === 200 && res.data.code === 0) {
//                     dispatch(authSuccess(res.data.data));
//                 } else {
//                     dispatch(errorMsg(res.data.msg));
//                 }
//             });
//     };
// };

export const login = (res: any) => {
    const { name, password } = res;
    if (!name || !password) {
        return errorMsg('用户密码必须输入');
    };
    return (dispatch: any) => {  //dispatch 异步
        Axios.post(`${_server}/login`, { name, password })
            .then(res => {
                console.log(res);
                if (res.status === 200 && res.data.code === 0) {
                    document.cookie = `id=${res.data.data[0].id}`;
                    dispatch(authSuccess(res.data.data[0]));
                } else {
                    dispatch(errorMsg(res.data.msg));
                }
            });
    };
};

export const register = (res: any) => {
    const { name, password, repeatpassword } = res;
    if (!name || !password) {
        return errorMsg('用户名密码必须输入');
    }
    if (password !== repeatpassword) {
        return errorMsg('密码和确认密码不同');
    }
    return (dispatch: any) => {  //dispatch 异步
        Axios.post(`${_server}/register`, { name, password })
            .then(res => {
                console.log(res);
                if (res.status === 200 && res.data.code === 0) {
                    document.cookie = `id=${res.data.data[0].id}`;
                    dispatch(authSuccess({ name, password }));
                } else {
                    dispatch(errorMsg(res.data.msg));
                }
            });
    };
};
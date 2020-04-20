import { useEffect } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { loadData } from '../../redux/user.redux';
import { connect } from 'react-redux';
import { _server } from '../../data-source/fetcher';
import { getCookie } from '../../pre-view/controls';


export const AuthRouteComponent = connect(null, {
    loadData
})(withRouter((props: any) => {

    const getUserInfo = () => {
        //获取用户信息，判断是否登录
        Axios.post(`${_server}/info`, { id: getCookie('id') }).then(res => {
            if (res.status === 200) {
                if (res.data.code === 0) {
                    //有登录信息
                    props.loadData(res.data.data);
                } else {
                    props.history.push('/login');
                }
            }
        });
    };

    const isPathName = () => {
        const publicList = ['/login', '/register'];
        const pathname = props.location.pathname;
        if (publicList.indexOf(pathname) > -1) {
            return null;
        };
    };

    useEffect(() => {
        getUserInfo();
        isPathName();
    }, []);


    return null;

}));


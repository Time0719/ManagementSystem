// import { Md5 } from "ts-md5/dist/md5";

/**
 * 写入表单
 */
// export const dataForm = (Comp: any) => {
//     return function WrapperComp(props: any) {
//         const [state, setState] = useState({});

//         const handleChange = (key: string, val: string) => {
//             setState({ ...state, [key]: val });
//             console.log(key, val);
//         };

//         return <Comp handleChange={handleChange} state={state} {...props}></Comp>
//     };
// };

/**
 * 密码加盐
 */
// const md5Pwd = (pwd: string) => {
//     const salt = 'lanyee_is_good_3957x8yza6!@#IUHJh~~';
//     return Md5.hashStr(pwd + salt);
// };

// export const buildLoginParam = (value: any) => ({
//     user: value.user,
//     pwd: md5Pwd(value.pwd)
// });

/**
 * 读取cookie
 */
export const getCookie = (name: string) =>
    document.cookie.split(";").map(v => name === v.split("=")[0] && v.split("=")[1])[0];



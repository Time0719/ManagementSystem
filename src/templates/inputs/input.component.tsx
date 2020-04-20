import React, { useState, memo } from 'react';
import { createStyles, makeStyles, Theme } from '../../utilities/use.styles';
import {
    TextField, InputAdornment
} from '../../utilities/material-ui.index';


// const validators = {
//     basic: {
//         maxLength: 32,
//         // pattern: '^[^\']*$',
//         // help: '禁止输入单引号',
//     },
//     id: {
//         maxLength: 32,
//         pattern: '^[A-Za-z0-9_]+$',
//         help: '只允许输入字母数字下划线',
//     },
//     phone: {
//         maxLength: 11,
//         pattern: '^[1][0-9]{10}$',
//         help: '请输入正确格式的手机号',
//     },
//     email: {
//         minLength: 5,
//         maxLength: 32,
//         pattern: '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$',
//         help: '请输入正确格式的邮箱账号',
//     },
//     SystemCode: {
//         maxLength: 12,
//         pattern: '^[^\']*$',
//         help: '禁止输入单引号',
//     },
//     user: {
//         maxLength: 32,
//     },
// };

// const helps = [
//     { id: 'tooShort', help: '至少输入#个字符' },
//     { id: 'valueMissing', help: '必须输入内容' },
//     { id: 'patternMismatch', help: '输入不符合规则' },
// ];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '2%',
            width: '46%',
        },
    }),
);

type EnumStatus = 'success' | 'warning' | 'error' | '';
type EnumType = 'password' | 'number' | 'text' | '';

export const InputComponent = memo((props: any) => {
    const classes = useStyles();
    const {
        label = 'Number',
        name,
        // defaultValue = `请输入${label}`,
        placeholder = `请输入${label}`,
        helperText,
        required,
        id = `${label}`,
        type = 'text',
        disabled = false,
        error = false,
        endAdornment,
        shrink,
        onChange,
    } = props;

    const handleChange = (event: any) => {
        // if (event.target.validity.valid) {
        //     setValidateStatus('success');
        //     setMsg('验证成功');
        // } else {
        //     setValidateStatus('warning');
        //     const errorNames = getErrorNames(event.target.validity);
        //     setMsg(helps[errorNames[0]]!);
        // }
        // onChange(field, event.target.value, event.target.validity.valid, index);
        onChange(name, event.target.value);
    };

    return (
        <TextField
            className={classes.root}
            error={error}
            size='small'
            variant="outlined"
            name={name}
            id={id}
            label={label}
            // defaultValue={defaultValue}
            helperText={helperText}
            placeholder={placeholder}
            required={required}
            type={type}
            disabled={disabled}
            InputLabelProps={{
                shrink:  shrink 
            }}
            InputProps={{
                endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
            }}
            onChange={handleChange}
        />
    );
});

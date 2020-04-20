import React, { memo } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
    TextField, InputAdornment
} from '../../utilities/material-ui.index';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '2%',
            width: '46%',
        },
    }),
);

export const SelectComponent = memo((props: any) => {
    const classes = useStyles();
    const {
        label = 'Number',
        helperText = 'Please select your currency',
        required = false,
        id = 'outlined-select-currency-native',
        disabled = false,
        error = false,
        SelectData = currencies,
        endAdornment,
        onChange,
    } = props;

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <TextField
            className={classes.root}
            size='small'
            variant="outlined"
            id={id}
            select
            label={label}
            disabled={disabled}
            required={required}
            value={currency}
            error={error}
            onChange={handleChange}
            SelectProps={{
                native: true,
            }}
            helperText={helperText}
            InputProps={{
                endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
            }}
        >
            {SelectData.map((option: any) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </TextField>
    );
});

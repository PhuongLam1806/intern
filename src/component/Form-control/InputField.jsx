import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;

    const {
        formState: { errors },
    } = form;
    const hasError = errors[name];

    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                    variant="standard"
                    style={{ width: 312 }}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    label={label}
                    margin="normal"
                    disabled={disabled}
                    error={!!hasError}
                    helperText={errors[name]?.message}
                />
            )}
        />
    );
}

export default InputField;

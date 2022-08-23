import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import svg from '../../assets/index';
import './PasswordField.scss';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const {
        formState: { errors },
    } = form;
    const hasError = !!errors[name];

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((x) => !x);
    };

    return (
        <div>
            <Controller
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FormControl className="form-control" error={hasError} variant="standard">
                        <img className="form__left--password" src={svg.password} />
                        <img className="form__left--email" src={svg.email} />
                        <InputLabel htmlFor={name}>{label}</InputLabel>

                        <Input
                            style={{ width: 312 }}
                            onChange={onChange}
                            onBlur={onBlur}
                            id={name}
                            type={showPassword ? 'text' : 'password'}
                            label={label}
                            name={name}
                            disabled={disabled}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText>{errors[name]?.message}</FormHelperText>
                    </FormControl>
                )}
            />
        </div>
    );
}

export default PasswordField;

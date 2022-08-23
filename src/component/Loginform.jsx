import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@mui/material';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './LoginForm.scss';
import svg from './assets/index';
import InputField from './Form-control/InputField/InputField';
import PasswordField from './Form-control/PasswordField/PasswordField';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const schema = yup
        .object({
            email: yup.string().required('please enter your email'),
            password: yup.string().required('please enter your password'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        console.log('Todo Form: ', values);
        const { onSubmit } = props;
        if (onSubmit) onSubmit(values);

        form.reset();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="form">
                    <div className="form__left ">
                        <img className="form__left--img" src={svg.logo} />
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                            {/* <img className="form__left--email" src={svg.email} /> */}
                            <InputField name="email" label="Email" form={form} />
                            <PasswordField name="password" label="Password" form={form} />

                            <Button
                                type="submit"
                                variant="contained"
                                className="form__btn"
                                style={{
                                    marginTop: 40,
                                    marginBottom: 48,
                                    width: 312,
                                    backgroundColor: '#041967',
                                    borderRadius: 16,
                                }}
                                size="large"
                            >
                                Login
                            </Button>
                        </form>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <a to="/" className="form__link--register" style={{ marginBottom: 32 }}>
                                Register
                            </a>
                            <a className="form__link--forgotpass">I forgot password</a>
                            <span style={{ marginTop: 134, fontSize: 16 }}>© 2021 RXdeliverdnow.</span>
                        </div>
                    </div>
                    <div className="form__right">
                        <img className="form__right--img" src={svg.slider1} />
                        <h3 className="form__right--desc" textDecoration="none">
                            Schedule & Optimize Delivery
                        </h3>
                        <span>Schedule all your deliveries in one platform</span>
                        <div class="indicator">
                            <span class="btnn btnn__active"></span>
                            <span class="btnn"></span>
                            <span class="btnn"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;

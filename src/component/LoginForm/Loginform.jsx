import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@mui/material';
import './LoginForm.scss';
import svg from '../assets/index';
import InputField from '../Form-control/InputField/InputField';
import PasswordField from '../Form-control/PasswordField/PasswordField';
import Slider from '../Slider/Slider';
import ForgotPass from '../ForgotPassword/ForgotPass';

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
                        {/* <ForgotPass /> */}
                    </div>
                    <div className="form__right">
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;

import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@mui/material';
import svg from '../assets/index';
import InputField from '../Form-control/InputField/InputField';
import styles from './ForgotPassword.module.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
ForgotPass.propTypes = {};
function ForgotPass(props) {
    const schema = yup
        .object({
            email: yup.string().required('please enter your email'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            email: '',
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
                <div className={styles.form}>
                    <div className={styles.form__left}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                marginBottom: 72.5,
                            }}
                        >
                            <img className={styles.form__img} src={svg.logo} />
                            <a className={styles.backBtn}>
                                <img src={svg.back} />
                                BACK
                            </a>
                            <h2 className={styles.formTitle}>FORGOT PASSWORD</h2>
                        </div>
                        <form className={styles.form__forgot} onSubmit={form.handleSubmit(handleSubmit)}>
                            <InputField name="email" label="Email" form={form} />
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
                                RESET PASSWORD
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPass;

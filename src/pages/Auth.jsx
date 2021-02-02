import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Block } from '../components';

import '../assets/scss/auth.scss';

function Auth() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <section className="auth">
      <div className="auth__content">
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              hasFeedback
              validateStatus="success"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                // prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Логин"
                size="large"
                id="success"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                // prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
              >
                Войти в аккаунт
              </Button>
              <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
            </Form.Item>
          </Form>
        </Block>
      </div>
    </section>
  );
}

export default Auth;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  //State para Login
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios

    // Pasarlo al action
  };
  return (
    <div className='form-user'>
      <div className='container-form shadow-dark'>
        <h1>Login</h1>
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3 field-form'>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className='mb-3 field-form'>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </Form.Group>

          <Button className='btn btn-primary btn-block' type='submit'>
            Iniciar Sesión
          </Button>
        </Form>
        <Link to={'/register'} className='link-register'>
          Registrarme
        </Link>
      </div>
    </div>
  );
};

export default Login;

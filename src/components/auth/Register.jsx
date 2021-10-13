import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  //State para Register
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    verify: '',
  });

  const { name, email, password, verify } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios

    // Password min de 6 caracteres

    // Verificar password

    // Pasarlo al action
  };
  return (
    <div className='form-user'>
      <div className='container-form shadow-dark'>
        <h1>Register</h1>
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3 field-form'>
            <Form.Label htmlFor='name'>Nombre</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
            />
          </Form.Group>

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
          <Form.Group className='mb-3 field-form'>
            <Form.Label htmlFor='verify'>Confirmar Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Repite tu Password'
              id='verify'
              name='verify'
              value={verify}
              onChange={onChange}
            />
          </Form.Group>

          <Button className='btn btn-primary btn-block' type='submit'>
            Registrarme
          </Button>
        </Form>
        <Link to={'/'} className='link-register'>
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default Register;

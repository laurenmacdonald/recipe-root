import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Heading, Flex, Card, Button, Callout } from '@radix-ui/themes';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import * as Form from '@radix-ui/react-form';
import pb from '../util/pocketbase';
import '../css/form.scss';

export default function Login() {
  const { isLoggedIn, login, logout } = useAuth();
  const [authError, setAuthError] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login({ email: data.email, password: data.password });
      reset();
      navigate('/recipe-book');
    } catch (error) {
      setAuthError(error.message);
    }
  };

  const logoutclick = () => {
    logout();
    navigate('/');
  };
  if (isLoggedIn) {
    return (
      <>
        <Flex
          className="flexContainer"
          justify="center"
          align="center"
          direction="column"
          m="6"
        >
          <Heading as="h1" size="8" className="formTitle">
            Hello, {pb.authStore.model.name}.
          </Heading>
          <Button variant="solid" size="4" radius="full" onClick={logoutclick}>
            Logout
          </Button>
        </Flex>
      </>
    );
  }

  return (
    <>
      <Flex className="flexContainer" justify="center">
        <Card m="6" p="6">
          <Heading as="h1" size="8" className="formTitle">
            Login
          </Heading>
          {(errors.email || authError !== '') && (
            <div style={{ paddingTop: '1rem' }}>
              <Callout.Root color="red" role="alert" variant="surface" size="1">
                <Callout.Icon>
                  <ExclamationTriangleIcon />
                </Callout.Icon>
                <Callout.Text>
                  {errors.email?.message}
                  {authError && (
                    <span>
                      {errors.email ? <br></br> : ''}
                      {authError}
                    </span>
                  )}
                </Callout.Text>
              </Callout.Root>
            </div>
          )}
          <Form.Root className="FormRoot" onSubmit={handleSubmit(onSubmit)}>
            <Form.Field className="FormField" name="email">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                }}
              >
                <Form.Label className="FormLabel">Email</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter email
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="formInput"
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register('email', {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Must be a valid email address.',
                    },
                  })}
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="password">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                }}
              >
                <Form.Label className="FormLabel">Password</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter password
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="formInput"
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...register('password')}
                />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <button
                className="Button"
                type="submit"
                style={{ marginTop: 10 }}
              >
                Login
              </button>
            </Form.Submit>
          </Form.Root>
        </Card>
      </Flex>
    </>
  );
}

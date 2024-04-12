import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Heading, Flex, Card, Callout } from '@radix-ui/themes';
import * as Form from '@radix-ui/react-form';
import pb from '../util/pocketbase';
import '../css/form.scss';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export default function SignUp() {
  const { isLoggedIn } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = async (data) => {
    try {
      const signUpData = new FormData();
      signUpData.append('email', data.email);
      signUpData.append('password', data.password);
      signUpData.append('passwordConfirm', data.passwordConfirm);
      signUpData.append('name', data.name);

      await pb.collection('users').create(signUpData);
    } catch (error) {
      console.error(error);
    }
    reset();
    navigate('/login');
  };

  // TODO: fix this - it's not working. Will navigate to the login form when you click it twice
  if (isLoggedIn) {
    navigate('/login');
  }
  return (
    <>
      <Flex className="flexContainer" justify="center" gap="3">
        <Card m="6" p="6">
          <Heading as="h1" size="8" className="formTitle">
            Sign Up
          </Heading>
          {(errors.email || errors.passwordConfirm) && (
            <div style={{ paddingTop: '1rem' }}>
              <Callout.Root color="red" role="alert">
                <Callout.Icon>
                  <ExclamationTriangleIcon />
                </Callout.Icon>
                <Callout.Text>
                  {errors.email?.message}
                  {errors.passwordConfirm?.message &&
                    (errors.email ? ' ' : '') + errors.passwordConfirm?.message}
                </Callout.Text>
              </Callout.Root>
            </div>
          )}
          <Form.Root className="FormRoot" onSubmit={handleSubmit(onSubmit)}>
            <Form.Field className="FormField" name="name">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                }}
              >
                <Form.Label className="FormLabel">Name</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter your name
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="formInput"
                  type="text"
                  name="name"
                  placeholder="Name"
                  {...register('name')}
                  required
                />
              </Form.Control>
            </Form.Field>
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
                  required
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
                  {...register('password', {
                    minLength: {
                      value: 8,
                      message: 'Password must have at least 8 characters',
                    },
                  })}
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="passwordConfirm">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                }}
              >
                <Form.Label className="FormLabel">
                  Password Confirmation
                </Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please confirm your password
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="formInput"
                  type="password"
                  name="passwordConfirm"
                  placeholder="Password"
                  {...register('passwordConfirm', {
                    validate: (value) =>
                      value === password.current ||
                      'The passwords do not match.',
                    required: 'The passwords do not match',
                  })}
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <button
                className="Button"
                type="submit"
                style={{ marginTop: 10 }}
              >
                Sign Up
              </button>
            </Form.Submit>
          </Form.Root>
        </Card>
      </Flex>
    </>
  );
}

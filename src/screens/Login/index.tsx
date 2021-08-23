import { useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from 'hooks/auth';

import { Input } from 'components/Input';
import { Button } from 'components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

type LoginFormProps = {
  email: string;
  password: string;
};

export const LoginScreen = () => {
  const { register, handleSubmit } = useForm<LoginFormProps>();

  const { signIn } = useAuth();

  const handleLogin: SubmitHandler<LoginFormProps> = useCallback(
    async ({ email, password }) => {
      await signIn({ email, password });
    },
    [signIn],
  );

  return (
    <>
      <Head>
        <title>Login | Nivela Mente</title>
      </Head>
      <Container>
        <Content>
          <AnimationContainer>
            <img src="/images/logo.svg" alt="Nivela Mente" />
            <form onSubmit={handleSubmit(handleLogin)}>
              <Input
                title="E-mail"
                {...register('email', { required: true })}
              />
              <Input
                title="Senha"
                type="password"
                {...register('password', { required: true })}
              />
              <Button type="submit">Entrar</Button>
              <p>
                usuario novo? <Link href="signup">cadastra-se</Link>
              </p>
            </form>
          </AnimationContainer>
        </Content>
        <Background />
      </Container>
    </>
  );
};

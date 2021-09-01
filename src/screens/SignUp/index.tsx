import { useCallback } from 'react';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from 'components/Input';
import { CheckBox } from 'components/CheckBox';
import { Button } from 'components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';
import { signUp } from 'services/signup';
import { useRouter } from 'next/router';

type SignUpFormProps = {
  name: string;
  email: string;
  password: string;
  teacher: boolean;
};

export const SignUpScreen = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SignUpFormProps>();

  const handleCreateAccount: SubmitHandler<SignUpFormProps> = useCallback(
    async ({ name, email, password, teacher }) => {
      try {
        await signUp({ name, email, password, teacher });
        router.push('/');
      } catch {
        console.log('erro');
      }
    },
    [router],
  );

  return (
    <>
      <Head>
        <title>Criar Conta | Nivela Mente</title>
      </Head>
      <Container>
        <Content>
          <AnimationContainer>
            <img src="/images/logo.svg" alt="Nivela Mente" />
            <form onSubmit={handleSubmit(handleCreateAccount)}>
              <Input
                title="Nome Completo"
                {...register('name', { required: true })}
              />
              <Input
                title="E-mail"
                {...register('email', { required: true })}
              />
              <Input
                title="Senha"
                type="password"
                {...register('password', { required: true })}
              />
              <CheckBox
                title="Professor?"
                type="checkbox"
                {...register('teacher')}
              />
              <Button type="submit">Cadastrar</Button>
            </form>
          </AnimationContainer>
        </Content>
        <Background />
      </Container>
    </>
  );
};

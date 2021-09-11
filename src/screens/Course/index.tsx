import Head from 'next/head';

import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { TextArea } from 'components/TextArea';
import { ImageUpload } from 'components/ImageUpload';
import { Footer } from 'components/Footer';

import { Container, Select } from './styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback } from 'react';

import { createCourse } from 'services/createcourse';
import { useAuth } from 'hooks/auth';

export type FormProps = {
  title: string;
  description: string;
  category: string;
  image: File[];
}

export const CreateCourseScreen = () => {

  const {token} = useAuth();
  const { register, handleSubmit } = useForm<FormProps>();

  const handleCreateCourse: SubmitHandler<FormProps> = useCallback(
    async (data) => {
      createCourse({...data, token});
    },
    [token],
  );

  return (
    <>
      <Head>
        <title>Criar Curso | Nivela Mente</title>
      </Head>
      <Header />
      <Container>
        <form onSubmit={handleSubmit(handleCreateCourse)}>
          <ImageUpload register={register} />
          <Input title="Título" {...register('title', { required: true })}></Input>
          <TextArea title="Descrição" {...register('description', { required: true })}></TextArea>
          <div>
            <Select {...register('category', { required: true })}>
              <option value="portuguese">
                Português
              </option>
              <option value="math">
                Matemática
              </option>
              <option value="english">
                Inglês
              </option>
            </Select>
          </div>
          <Footer>
            <Button type="submit">
              Cadastrar
            </Button>
          </Footer>
        </form>

      </Container>
    </>
  );
};

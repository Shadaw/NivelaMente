import { useEffect, useState } from 'react';
import Head from 'next/head';

import { getCourses } from 'services/courses';

import { Header } from 'components/Header';
import { Card } from 'components/Card';

import { Container } from './styles';

type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

export const CoursesScreen = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetch() {
      const response = await getCourses();

      console.log(response);
      setCourses(response);
    }
    fetch();
  }, []);

  return (
    <>
      <Head>
        <title>Cursos | Nivela Mente</title>
      </Head>
      <Header />
      <Container>
        {courses.map(course => (
          <Card key={course.id} {...course} />
        ))}
      </Container>
    </>
  );
};

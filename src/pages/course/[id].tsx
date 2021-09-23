import { GetStaticPaths, GetStaticProps } from 'next';

import { EnrollmentScreen } from 'screens/Enrollment';
import api from 'services/api';

type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

type CourseProps = {
  course: Course;
};

const Course = ({ course }: CourseProps) => <EnrollmentScreen {...course} />;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id;

  const response = await api.get(`/courses/${id}`);

  return {
    props: {
      course: response.data,
    },
    revalidate: 60,
  };
};

export default Course;

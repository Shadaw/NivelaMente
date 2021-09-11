import { GetServerSideProps } from 'next';
import { CreateCourseScreen } from 'screens/Course';

const CreateCourse = () => <CreateCourseScreen />;

export const getServerSideProps: GetServerSideProps = async ({req}) =>{
    const token = req.cookies['@NivelaMente:token'];

    if(!token){
        return {redirect: {destination: '/login', permanent: false}}
    }

    return {props: {}}
}

export default CreateCourse;

import { useQuery } from '@tanstack/react-query';
import { COURSES_KEY, type Course } from '../constants';
import { getCourses } from '../services/courses';

function useCourses() {
   const {data, isLoading} = useQuery<Course[]>({queryKey: [COURSES_KEY], queryFn: getCourses})  

  return {data, isLoading}
}
export default useCourses
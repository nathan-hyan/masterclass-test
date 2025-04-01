import { useInfiniteQuery
 } from '@tanstack/react-query';
import { COURSES_KEY, PAGE_LIMIT, type Course } from '../constants';
import { getCourses } from '../services/courses';

function useCourses() {
   const query = useInfiniteQuery<Course[]>({
    queryKey: [COURSES_KEY, import.meta.env.VITE_EMAIL], 
    queryFn: ({ pageParam }) => getCourses({ pageParam: pageParam as number }), 
    initialPageParam: 0, 
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < PAGE_LIMIT
        ? null
        : allPages.length * PAGE_LIMIT;
    }
  })  

  return query
}
export default useCourses
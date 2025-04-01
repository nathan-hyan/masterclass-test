import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addCourseToFavorite, removeCourseFromFavorite } from '../services/courses';
import { COURSES_KEY, type Course } from '../constants';

function useFavorite() {
    const queryClient = useQueryClient();

    const {mutate, isPending} = useMutation({
     mutationFn: (course: Course) => course.favorite ? removeCourseFromFavorite(course.id): addCourseToFavorite(course.id),
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: [COURSES_KEY, import.meta.env.VITE_EMAIL] })
     },
     onError: () => {
       queryClient.invalidateQueries({ queryKey: [COURSES_KEY, import.meta.env.VITE_EMAIL] })
     },
   })

   return {mutate, isPending}
}
export default useFavorite
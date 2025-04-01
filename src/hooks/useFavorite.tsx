import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addCourseToFavorite, removeCourseFromFavorite } from '../services/courses';
import { COURSES_KEY, type Course } from '../constants';
import { useSnackbar } from 'notistack';

function useFavorite() {
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();

    const {mutate, isPending} = useMutation({
     mutationFn: (course: Course) => {
        enqueueSnackbar(course?.favorite ? 'Course unfavorited' : 'Course favorited', { variant: 'success' });
        return course.favorite ? removeCourseFromFavorite(course.id): addCourseToFavorite(course.id)},
     
     onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [COURSES_KEY, import.meta.env.VITE_EMAIL] })
     }
   })

   return {mutate, isPending}
}
export default useFavorite
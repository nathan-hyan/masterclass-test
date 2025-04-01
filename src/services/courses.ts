import { HEADERS, PAGE_LIMIT, type Course } from '../constants';

export const getCourses = async ({pageParam}: {pageParam: number}): Promise<Course[]> => {
    return fetch(`${import.meta.env.VITE_API_URL}/courses?email=${import.meta.env.VITE_EMAIL}&page[limit]=${PAGE_LIMIT}&page[offset]=${pageParam}`, {
        headers: HEADERS
    }).then(res => res.json());
  }

  export const addCourseToFavorite = async (classId: number) => {
    return fetch(`${import.meta.env.VITE_API_URL}/favorite`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        email: import.meta.env.VITE_EMAIL,
        course_id: classId
      }),
    }).then(res => res.json());
  }

  export const removeCourseFromFavorite = async (classId: number) => {
    return fetch(`${import.meta.env.VITE_API_URL}/favorite`, {
      method: 'DELETE',
      headers: HEADERS,
      body: JSON.stringify({
        email: import.meta.env.VITE_EMAIL,
        course_id: classId
      }),
    }).then(res => res.json());
  }
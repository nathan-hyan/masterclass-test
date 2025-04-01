import type { Course } from '../constants';

export const getCourses = async (): Promise<Course[]> => {
    return fetch(`${import.meta.env.VITE_API_URL}/courses?email=${import.meta.env.VITE_EMAIL}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "",
      }
    }).then(res => res.json());
  }

  export const addCourseToFavorite = async (classId: number) => {
    return fetch(`${import.meta.env.VITE_API_URL}/favorite`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "",
      },
      body: JSON.stringify({
        email: import.meta.env.VITE_EMAIL,
        course_id: classId
      }),
    }).then(res => res.json());
  }

  export const removeCourseFromFavorite = async (classId: number) => {
    return fetch(`${import.meta.env.VITE_API_URL}/favorite`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "",
      },
      body: JSON.stringify({
        email: import.meta.env.VITE_EMAIL,
        course_id: classId
      }),
    }).then(res => res.json());
  }
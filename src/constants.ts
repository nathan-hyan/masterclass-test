export const COURSES_KEY = 'courses'

export type Course = {
  id: number;
  title: string;
  instructor_name: string;
  instructor_image_url: string;
  favorite: boolean;
}
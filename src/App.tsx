import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { Course } from './constants';
import Card from './components/Card';

const getCourses = async (): Promise<Course[]> => {
  return fetch(`${import.meta.env.VITE_API_URL}/courses?email=${import.meta.env.VITE_EMAIL}`, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "",
    }
  }).then(res => res.json());
}

const favClass = async () => {
  return fetch(import.meta.env.VITE_API_URL + '/classes/favorite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      classId: 1
    }),
  }).then(res => res.json());
}

function App() {
  const queryClient = useQueryClient();

  const query = useQuery<Course[]>({queryKey: ['courses'], queryFn: getCourses})

// Mutations

const mutation = useMutation({
  mutationFn: favClass,
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ['courses'] })
  },
})
  return (
    <div className='min-screen-full bg-slate-800 text-white'>
      <h1 className='py-3 text-2xl font-bold text-center'>Classes</h1>
      <ul className='container mx-auto w-xl flex flex-col gap-3'>
        {query.data?.map((course) => (
          <>
          <Card course={course} />
          </>
        ))}
      </ul>
    </div>
  )
}

export default App

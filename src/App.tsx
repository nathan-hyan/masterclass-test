import Card from './components/Card';
import useCourses from './hooks/useCourses';

import Spinner from './assets/spinner.svg'
import useFavorite from './hooks/useFavorite';


function App() {
 
  const {data, isLoading} = useCourses();
  const {mutate, isPending} = useFavorite();

  return (
    <div className='screen-full min-h-screen bg-slate-800 text-white'>
      <h1 className='py-3 text-2xl font-bold text-center'>Classes</h1>
      {isLoading ? (
        <div className='flex flex-row gap-3 items-center justify-center'>
        <img src={Spinner} alt="Loading"/>
        <div className='text-center text-2xl'>Loading, please wait...</div>
        </div>
      ) : (
        <ul className='container mx-auto w-xl flex flex-col gap-3'>
          {data?.map((course) => (
            <Card course={course} onClick={(course) => mutate(course)} isPending={isPending} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default App

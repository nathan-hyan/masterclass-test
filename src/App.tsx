import Card from './components/Card';
import useCourses from './hooks/useCourses';

import Spinner from './assets/spinner.svg';
import useFavorite from './hooks/useFavorite';
import { useState } from 'react';

function App() {
  const [onlyFavorite, setOnlyFavorite] = useState(true);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useCourses({ onlyFavorite });
  const { mutate, isPending } = useFavorite();

  return (
    <div className='screen-full min-h-screen bg-slate-800 text-white'>
      <h1 className='py-3 text-center text-2xl font-bold'>Classes</h1>

      <div className='mt-12 flex justify-center pb-12'>
        <button
          className='rounded-lg bg-yellow-500 px-6 py-3 text-lg font-semibold text-slate-900 transition-all duration-200 hover:bg-yellow-400 active:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-yellow-500'
          onClick={() => setOnlyFavorite((prev) => !prev)}
        >
          {onlyFavorite ? 'Show All' : 'Show Only Favorite'}
        </button>
      </div>

      {isPending && (
        <div className='flex flex-row items-center justify-center gap-3'>
          <img src={Spinner} alt='Loading' />
          <div className='text-center text-2xl'>Updating list...</div>
        </div>
      )}

      {isLoading ? (
        <div className='flex flex-row items-center justify-center gap-3'>
          <img src={Spinner} alt='Loading' />
          <div className='text-center text-2xl'>Loading, please wait...</div>
        </div>
      ) : (
        <>
          <ul className='container mx-auto flex w-xl flex-col gap-3'>
            {data?.pages.map((group) =>
              group.map((course) => (
                <Card
                  key={course.id}
                  course={course}
                  onClick={(course) => mutate(course)}
                  isPending={isPending}
                />
              ))
            )}
          </ul>
          <div className='mt-12 flex justify-center pb-12'>
            {!onlyFavorite && (
              <button
                className='rounded-lg bg-yellow-500 px-6 py-3 text-lg font-semibold text-slate-900 transition-all duration-200 hover:bg-yellow-400 active:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-yellow-500'
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? 'Loading more...'
                  : hasNextPage
                    ? 'Load More'
                    : 'Nothing more to load'}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

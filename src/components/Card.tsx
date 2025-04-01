import classNames from 'classnames';
import type { Course } from '../constants';

function Card({
  course,
  onClick,
  isPending,
}: {
  course: Course;
  onClick: (course: Course) => void;
  isPending: boolean;
}) {
  const handleClick = () => {
    onClick(course);
  };

  return (
    <li key={course.id} title='Click to favorite'>
      <button
        aria-label='Click to favorite'
        onClick={() => handleClick()}
        className={classNames(
          'flex w-full cursor-pointer flex-row gap-3 rounded-lg border-2 bg-slate-700 p-2 transition-colors',
          {
            'border-slate-600 hover:border-slate-400':
              !course.favorite && !isPending,
            'border-yellow-300 hover:border-yellow-100':
              course.favorite && !isPending,
            'border-gray-400': isPending,
          }
        )}
      >
        <img
          src={course.instructor_image_url}
          alt={course.instructor_name}
          className='size-30 rounded-lg'
        />

        <div className='flex w-full flex-row text-left'>
          <div>
            <h2 className='text-lg font-bold'>{course.instructor_name}</h2>
            <p className='italic'>{course.title}</p>
          </div>
        </div>
      </button>
    </li>
  );
}
export default Card;

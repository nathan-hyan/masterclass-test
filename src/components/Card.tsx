import classNames from 'classnames'
import type { Course } from '../constants'

function Card({course}: {course: Course}) {
  return (
    <li key={course.id} className={classNames('flex flex-row gap-3 rounded-lg bg-slate-700 border-2 p-2 cursor-pointer  transition-colors', {
      'border-slate-600 hover:border-slate-400': !course.favorite,
      'border-yellow-300 hover:border-yellow-100': course.favorite
    })} title='Click to favorite'>
    <img src={course.instructor_image_url} alt={course.instructor_name} className='rounded-lg'/>
    
    <div className='flex flex-row justify-between w-full'>
      <div>
        <h2 className='text-lg font-bold'>{course.instructor_name}</h2>
        <p className='italic'>{course.title}</p>
      </div>
    </div>
  </li>
  )
}
export default Card
import classNames from 'classnames'
import type { Course } from '../constants'

function  Card({course, onClick, isPending}: {course: Course, onClick: (course: Course) => void, isPending: boolean}) {
const handleClick = () => {
  
  onClick(course)

}
  
  return (
    <li key={course.id} title='Click to favorite'>
    
    <button aria-label='Click to favorite' onClick={() => handleClick()} className={classNames('flex flex-row gap-3 rounded-lg bg-slate-700 border-2 p-2 cursor-pointer  transition-colors', {
      'border-slate-600 hover:border-slate-400': !course.favorite && !isPending ,
      'border-yellow-300 hover:border-yellow-100': course.favorite && !isPending,
      'border-gray-400': isPending
    })} >
    <img src={course.instructor_image_url} alt={course.instructor_name} className='rounded-lg'/>
    
    <div className='flex flex-row justify-between w-full'>
      <div>
        <h2 className='text-lg font-bold'>{course.instructor_name}</h2>
        <p className='italic'>{course.title}</p>
      </div>
    </div>
    </button>
  </li>
  )
}
export default Card
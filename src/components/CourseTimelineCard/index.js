// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-container">
      <div className="title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="logo-duration-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-desc">{description}</p>
      <ul className="tags-list">
        {tagsList.map(each => (
          <li key={each.id} className="tag-item">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard

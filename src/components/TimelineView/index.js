// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="time-line-view-container">
      <div className="chrono-container">
        <h1 className="ccbp-journey-title">
          MY JOURNEY OF <br />
          <span className="ccbp-title">CCBP 4.0</span>
        </h1>

        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimelineCard key={each.id} courseDetails={each} />
            }
            return <ProjectTimelineCard key={each.id} projectDetails={each} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView

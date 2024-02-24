// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="time-line-view-container">
      <h1 className="ccbp-journey-title">MY JOURNEY OF</h1>
      <h1 className="ccpb-title">CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono
          classNames={{controls: 'my-controls fix-controls'}}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          scrollable
          theme={{
            primary: 'blue',
            secondary: 'transparent',
            titleColor: 'blue',
            cardForeColor: 'violet',
          }}
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

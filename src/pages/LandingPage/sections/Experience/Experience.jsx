import { Timeline } from 'antd'
import TimelineLabel from './components/TimelineLabel'
import TimelineChild from './components/TimelineChild'
import { createContext } from 'react'
import Separator from '../../components/Separator'
import SectionHeader from '../../components/SectionHeader'

const Experience = () => {
  let Context = createContext()
  let itemStyle = {
    fontSize: 'large'
  }
  const timelineItems = [
    {
      color: 'blue',
      label: (
        <TimelineLabel
          link='https://3pc.com.au/'
          label='3rd Party Containers'
        />
      ),
      style: itemStyle,
      children: (
        <>
          <TimelineChild
            date='October 2017'
            name='Forklift Operator'
            description='Operated forklift truck in fast paced freight forwarding envionment. Daily tasks included completion of daily checklists, safe material handling and loading and unloading of containerised goods.'
          />
          <TimelineChild
            date='January 2020'
            name='Team Leader'
            description='I led a team of 3 ‑ 6 team members at a client’s site. Regular tasks included: invoicing clients for completed daily tasks, allocating tasks to team members in order to complete daily tasks in a timely
and proficient manner, conducting weekly toolbox/safety meetings, enforcing safety directives, liaising with client staff about what needs to get
done and how best it can be done in order to minimise cost to the client while producing high quality results, safe forklift operation and manual
handling.'
          />
        </>
      )
    },
    {
      label: (
        <TimelineLabel link='https://newcold.com/' label='Newcold Advanced' />
      ),
      color: 'blue',
      style: itemStyle,
      children: (
        <>
          <TimelineChild
            date='May 2022'
            name='Industrial Automation Operator'
            description='As a member of a three-person team, I played a critical role in monitoring and maintaining the
smooth operation of automation in Newcold’s state-of-the-art facilities. My responsibilities included
identifying and resolving a wide range of system faults, from minor software glitches to
damaged mechanical components.
In situations where the system was down for an extended period, I worked closely with my team to
modify the operating parameters of the system, optimizing system throughput while the affected
components were undergoing repairs.'
          />
        </>
      )
    },
    {
      label: (
        <TimelineLabel
          link='https://mugonat.com/'
          label='Mugonat Systems Inc'
        />
      ),
      color: 'green',
      style: itemStyle,
      children: (
        <>
          <TimelineChild
            date='October 2022'
            name='Developer Intern'
            description='I undertook a 3 month intership with this software development firm. Having no experience in we development, 
            this beginning of this intership was a challenge. By the end of the intership, I was able to develop comprehensive web applications 
            in C# as well as Php/Laravel. Additionally, I was offered a full-time position as Mugonat Systems as a result of my performance during the intership.'
          />
          <TimelineChild
            date='January 2023'
            name='Fullstack Developer'
            description='In my most recent role, I focused on developing financial systems,
including a microfinance management platform and an ERP, where I often needed to navigate between
the disciplines of software engineering and accounting/bookkeeping. This required me to
collaborate closely with clients to generate workflows that met their unique accounting requirements
and then convert them into effective software solutions.'
          />
        </>
      )
    }
  ]

  return (
    <div className=' h-screen flex place-content-center place-items-center'>
      <div className='card p-10 shadow-md'>
        <SectionHeader Title='Work Experience' />
        <div className=' max-h-fit w-screen md:grid md:grid-flow-col overflow-hidden flex  flex-col  mt-20 mb-20'>
          <div className=' flex flex-col md:flex-row  place-content-center place-items-center w-screen lg:text-7xl text-3xl gap-4  font-extralight'>
            <Timeline
              mode='left'
              items={timelineItems}
              className=' w-auto'
              style={{
                padding: '1rem',
                flexGrow: 1,
                height: 'fit-content'
              }}
            />
            <div
              className='flex place-content-center max-h-fit'
              style={{ width: '50vw' }}
            >
              <i className='timeline-writeup text-lg  md:pr-40 font-light text-center flex place-content-center md:place-items-center place-items-start'>
                Hover On A Timeline Item To Learn More
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

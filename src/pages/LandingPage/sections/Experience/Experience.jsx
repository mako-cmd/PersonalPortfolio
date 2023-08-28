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
      color: 'orange',
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
      color: 'orange',
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
    },
    {
      label: <TimelineLabel link='https://amidata.tech/' label='Amidata' />,
      color: 'green',
      style: itemStyle,
      children: (
        <>
          <TimelineChild
            date='June 2023'
            name='Systems Engineer'
            description='Manage data backup solutions for clients, optimizing processes for efficiency and reliability. Utilize PowerShell and Bash scripting to automate and streamline backup procedures. This results in simpler processes and minimized human
            error. Conduct hardware maintenance tasks and provide field technician support as needed. Participate in the deployment and configuration of backup software and hardware appliances. Appliances include Dell, HPE, Pure Storage and
            Quantum devices. Monitor backup systems, perform routine checks, and proactively address potential issues to maintain data availability. Develop documentation for custom command line tools used in backup processes. Successfully reduced backup processing time through script optimization and automation. Created command line utilities to generate alerts when backups fail, reducing unnecessary backlog.'
          />
        </>
      )
    }
  ]

  return (
    <div className='card-wrapper' id='Experience'>
      <div className='card shadow-md'>
        <SectionHeader Title='Work Experience' />
        <div className='card-inner static lg:text-7xl text-3xl  font-extralight overflow-hidden'>
          <Timeline mode='left' items={timelineItems} />
          <div className='flex place-content-center max-h-fit'>
            <i className='timeline-writeup text-lg  font-light text-center flex place-content-center md:place-items-center place-items-start grow'>
              Hover On A Timeline Item To Learn More
            </i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

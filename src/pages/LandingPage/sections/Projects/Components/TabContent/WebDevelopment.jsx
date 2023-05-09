import PanelItem from '../PanelItem'
import '/src/pages/LandingPage/styles/landing_global.css'
let WebDevelopment = () => {
  return (
    <div className='tab-panel-inner-wrapper w-full flex place-content-center'>
      <PanelItem
        imgUrL='ToDoList.png'
        title='To Do List V1'
        linkToProject='https://makodev-to-do-list-v1.netlify.app/'
        description='This was my first encounter with JS and ReactDOM as well as UI design. It is a simple to do list proof of concept, ready for a backend to plug in.'
      />
      <PanelItem
        color='white'
        imgUrL='panamax.png'
        title='Panamax Loan System'
        linkToProject='https://panamax.mugonat.net'
        description='This was the first major project I was given at Mugonat Systems. The system was bare bones and riddled with bugs. Over the course of two months,
        collaborative efforts beteen the client and myself resulted in a system that is now function and in use today. Unfortunately, due to the nature of this project,
        I am not able to provide direct access to the deployed system.'
      />
      <PanelItem
        color='white'
        imgUrL='natsuite.png'
        title='Natsuite ERP'
        linkToProject='https://natsuite.net/'
        description='This is the flagship project currently at Mugonat Systems. We are developing an ERP system better suited to the African market.
        I have been tasked with delivering the Fixed Assets module of the system. A system of this nature requires strict adherence to 
        business process flows and accounting principles.'
      />
    </div>
  )
}

export default WebDevelopment

import PanelItem from '../PanelItem'
import '/src/pages/LandingPage/styles/landing_global.css'
let WebDevelopment = () => {
  return (
    <div className='tab-panel-inner-wrapper'>
      <PanelItem
        imgUrL='ToDoList.png'
        title='To Do List V1'
        linkToProject='https://makodev-to-do-list-v1.netlify.app/'
        description='This was my first encounter with JS and ReactDOM as well as UI design. It is a simple to do list proof of concept, ready for a backend to plug in.'
      />
    </div>
  )
}

export default WebDevelopment

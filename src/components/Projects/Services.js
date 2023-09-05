import uniqid from 'uniqid'
import { services } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Services.css'

const Services = () => {
  if (!services.length) return null

  return (
    <section id='services' className='section services'>
      <h2 className='section__title'>Services</h2>
      

      <div className='services__grid'>
        {services.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Services

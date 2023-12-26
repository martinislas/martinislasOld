import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import TelegramIcon from '@material-ui/icons/Telegram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      /**<div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}**/

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target='_blank' rel='noreferrer'
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank' rel='noreferrer'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

          {social.twitter && (
              <a
                href={social.twitter}
                target='_blank' rel='noreferrer'
                aria-label='twitter'
                className='link link--icon'
              >
                <TwitterIcon />
              </a>
            )}

          {social.telegram && (
              <a
                href={social.telegram}
                target='_blank' rel='noreferrer'
                aria-label='telegram'
                className='link link--icon'
              >
                <TelegramIcon />  
              </a>
          )}

          {social.whatsapp && (
              <a
                href={social.whatsapp}
                target='_blank' rel='noreferrer'
                aria-label='whatsapp'
                className='link link--icon'
              >
                <WhatsAppIcon />
              </a>
          )}


          </>
        )}
      </div>
    </div>
  )
}

export default About

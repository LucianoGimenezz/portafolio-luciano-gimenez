import { about as data } from '../data'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { ArrowTop } from '@/components/Icons'
import { BiCopyright } from 'react-icons/bi'
import { techIcons } from '../data/techSkills'
import Badge from '@/components/Badge'
import image from '../assets/IMG_20220413_151800490(1)-min.jpg'
import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/projects.json'
import Form from '@/components/Form'

const CURRENT_YEAR = new Date().getFullYear()

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
        <header className="w-full max-w-3xl m-auto p-2 flex flex-row-reverse gap-x-2">
            <a href='https://github.com/LucianoGimenezz' target='_blank' className='text-4xl cursor-pointer' rel="noreferrer">
              <AiFillGithub />
            </a>
            <a href='https://www.linkedin.com/in/luciano-martin-gimenez-52986a1ba/' target='_blank' className='text-4xl cursor-pointer' rel="noreferrer">
              <AiFillLinkedin />
            </a>
        </header>
        <section className='w-screen p-2 max-w-3xl mt-12 flex flex-col sm:flex-row md:p-4'>
          <div className='w-full flex flex-col p-2 gap-y-2 md:p-4 md:w-[60%] '>
              <h2 className='text-7xl  font-semibold md:text-8xl'>
                Hola, soy Luciano <span className='text-brand-secondary'>Gimenez</span>
              </h2>
              <p className='font-semibold ml-2 text-lg'><span className='text-brand-secondary'>Desarrollador</span> Full Stack Web</p>
          </div>
        <div className=' flex justify-center items-center sm:w-[40%]'>
            <a
              download
              target='_blank'
              href='https://luciano-gimenez-bk.s3.sa-east-1.amazonaws.com/CV-fs.pdf'
              className='flex w-[120px] cursor-pointer items-center text-brand gap-x-2 rounded-md mt-4 bg-brand-secondary  py-2 px-4 hover:bg-brand-secondary/80' rel="noreferrer">
              Ver CV <span className='text-xl'><ArrowTop /></span>
            </a>
        </div>
        </section>

        {/* About  */}

        <section className='mt-32 max-w-3xl m-auto flex flex-col items-center'>
          <h2 className='text-4xl font-semibold'>Sobre mí</h2>
          <div className='mt-12 max-w-2xl m-auto w-full gap-x-3 flex flex-col items-center sm:flex-row'>
              <img
                className='rounded-full w-44 h-48 object-cover'
                src={image.src}
                alt='Foto de Luciano Gimenez'/>
                 <p className='mt-4 font-[500]'>{data.es}</p>
          </div>
          <h2 className='text-4xl  font-semibold mt-16'>Skills</h2>
          <div className='grid max-w-3xl m-auto grid-cols-1 w-full mt-4 gap-10 place-content-center sm:grid-cols-2 sm:mt-8'>
            <Badge label='Frontend' techIcons={techIcons.front}/>
            <Badge label='Backend' techIcons={techIcons.back} />
          </div>
        </section>
       {/* Projects */}

        <section className='max-w-3xl mt-40 flex flex-col items-center'>
          <h2 className='text-4xl font-semibold'>Proyectos</h2>
          <div className='grid mt-10 grid-cols-1 gap-4 sm:grid-cols-2'>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.es.image}
                  title={project.es.title}
                  description={project.es.description}
                  stack={project.es.stack}
                  links={ { github: project.github, deploy: project.deploy } }
                />
              ))}
          </div>
        </section>

        {/* Contact */}

        <section className='w-full max-w-3xl mt-40 flex flex-col items-center'>
          <h2 className='text-4xl font-semibold'>Contacto</h2>
          <div className='w-full max-w-xl flex'>
           <Form />
          </div>
        </section>

        {/* footer */}

        <footer className='w-full flex l gap-x-3 items-center justify-center p-2 mt-12'>
           <span className='text-xl'><BiCopyright/></span> <p>Luciano Gimenez <span>{CURRENT_YEAR}</span></p>
        </footer>
     </main>
  )
}

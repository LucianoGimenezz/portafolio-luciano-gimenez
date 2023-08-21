import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { techIcons } from '../data/techSkills'
import { ArrowTop } from '@/components/Icons'
import image from '../assets/IMG_20220413_151800490(1)-min.jpg'
import data from '../data/about.json'

import projects from '@/data/projects.json'
import ProjectCard from '@/components/ProjectCard'
import Badge from '@/components/Badge'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
        <header className="w-full p-2 flex flex-row-reverse gap-x-2">
            <a target='_blank' className='text-4xl cursor-pointer'>
              <AiFillGithub />
            </a>
            <a target='_blank' className='text-4xl cursor-pointer'>
              <AiFillLinkedin />
            </a>
        </header>
        <section className='w-full max-w-3xl m-auto mt-12 flex flex-col sm:flex-row md:p-4'>
          <div className='w-full flex flex-col p-2 gap-y-2 md:p-4 md:w-[60%] '>
              <h2 className='text-7xl  font-semibold md:text-8xl'>
                Hola, soy Luciano <span className='text-brand-secondary'>Gimenez</span>
              </h2>
              <p className='font-semibold ml-2 text-lg'><span className='text-brand-secondary'>Desarrollador</span> Full Stack Web</p>
          </div>
        <div className=' flex justify-center items-center sm:w-[40%]'>
            <a className='flex w-[120px] cursor-pointer items-center text-brand gap-x-2 rounded-md mt-4 bg-brand-secondary  py-2 px-4'>
              Ver CV <span className='text-xl'><ArrowTop /></span>
            </a>
        </div>
        </section>

        <section className='mt-32 max-w-3xl m-auto flex flex-col items-center'>
          <h2 className='text-4xl font-semibold'>Sobre mí</h2>
          <div className='mt-12 max-w-2xl m-auto w-full gap-x-3 flex flex-col items-center sm:flex-row'>
              <img
                className='rounded-full w-44 h-48 object-cover'
                src={image.src}
                alt='Foto de Luciano Gimenez'/>
                 <p className='mt-4 font-[500]'>{data.about.es}</p>
          </div>
          <h2 className='text-4xl mt-12 font-semibold'>Skills</h2>
          <div className='grid max-w-3xl m-auto grid-cols-1 w-full mt-4 gap-10 place-content-center sm:grid-cols-2 sm:mt-8'>
            <Badge label='Frontend' techIcons={techIcons.front}/>
            <Badge label='Backend' techIcons={techIcons.back} />
          </div>
        </section>

        <section className='mt-20 flex flex-col items-center'>
          <h2 className='text-4xl font-semibold'>Proyectos</h2>
          <div className='grid mt-10 grid-cols-1 gap-4'>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.es.image}
                  title={project.es.title}
                  description={project.es.description}
                  stack={project.es.stack}
                />
              ))}
          </div>
        </section>
     </main>
  )
}

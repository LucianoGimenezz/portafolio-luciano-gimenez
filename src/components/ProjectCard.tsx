import { AiFillGithub } from 'react-icons/ai'
import { ArrowTop } from '@/components/Icons'
interface Links {
  github: string
  deploy: string
}

interface ProjectCardProps {
  image: string
  title: string
  description: string
  stack: string[]
  links: Links
}

export default function ProjectCard (
  {
    image,
    title,
    description,
    stack,
    links
  }: ProjectCardProps
) {
  return (
        <div className='bg-brand-secondary w-full p-2 rounded-md flex flex-col relative'>
            <img className='mb-6' src={image} alt={title}/>
            <h3 className='text-brand text-xl'>{title}</h3>
            <p className='text-sm font-semibold'>{description}</p>
            <div className='w-full items-center justify-center mt-3 p-2 flex gap-x-2'>
                {stack.map((tech, index) => (
                <p className='font-semibold text-brand text-lg' key={index}>{ tech }</p>
                ))}
            </div>
            <div className='w-full mt-3 justify-center items-center mb-2 flex gap-x-4'>
                <a target='_blank' href={links.github} className='text-3xl cursor-pointer text-white' rel="noreferrer"><AiFillGithub /></a>
                <a target='_blank' href={links.deploy} className='text-4xl cursor-pointer text-white' rel="noreferrer"><ArrowTop /></a>
            </div>
        </div>
  )
}

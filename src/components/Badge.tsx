import type { IconsTech } from '@/data/techSkills'

export default function Badge ({
  techIcons,
  label
}: {
  techIcons: IconsTech
  label: string
}
) {
  return (
        <div className='flex flex-col gap-y-1 border border-brand-secondary px-3 py-1 rounded-md justify-self-center'>
            <h3 className='text-center text-xl font-semibold text-brand-secondary sm:text-3xl'>{label}</h3>
            <div className='flex gap-x-2 text-3xl sm:text-4xl'>
                {Object.values(techIcons).map((tech, index) => (
                <span key={index}>{tech()}</span>
                ))}
            </div>
        </div>
  )
}

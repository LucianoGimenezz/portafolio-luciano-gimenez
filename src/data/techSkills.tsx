import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoAngular,
  BiLogoTailwindCss,
  BiLogoPython,
  BiLogoPostgresql
} from 'react-icons/bi'
import { SiExpress, SiFastapi } from 'react-icons/si'

export const techIcons = {
  front: {
    TypeScript: () => <BiLogoTypescript/>,
    React: () => <BiLogoReact />,
    Angular: () => <BiLogoAngular />,
    Tailwind: () => <BiLogoTailwindCss />
  },
  back: {
    Python: () => <BiLogoPython />,
    Express: () => <SiExpress />,
    Postgres: () => <BiLogoPostgresql />,
    FastApi: () => <SiFastapi />
  }
}

type FrontIcons = typeof techIcons.front
type BackIcons = typeof techIcons.back

export type IconsTech = FrontIcons | BackIcons

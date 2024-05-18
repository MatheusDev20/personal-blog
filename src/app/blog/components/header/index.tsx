import Image from 'next/image'
import L from '../../../../../assets/icon-medium.png'
import { GithubIcon } from '@/app/icons/github'
import { montserrat } from '@/app/fonts'

export const Header = () => {
  return (
    <header className="sticky top-0 flex h-[64px] items-center justify-between bg-bg-stick-header pl-24 pr-24 shadow-stick-header">
      <div className="flex items-center gap-5">
        <Image className="cursor-pointer" src={L} alt="lambda-icon" />
        <h3
          className={`text-white ${montserrat.className} font-bold tracking-wider`}
        >
          Fun & Functional
        </h3>
      </div>
      <div>
        <a
          href="https://github.com/MatheusDev20"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon classStyles="h-5 w-5 cursor-pointer text-white hover:text-main-blue" />
        </a>
      </div>
    </header>
  )
}

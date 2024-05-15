import Image from "next/image"
import L from '../../../../../assets/icon-medium.png'
import { GithubIcon } from "@/app/icons/github"

export const Header = () => {
  return (
    <header className='bg-bg-stick-header h-[64px] items-center flex shadow-stick-header justify-between sticky top-0 pl-24 pr-24'>
      <div>
        <Image className='cursor-pointer' src={L} alt='lambda-icon'/>
      </div>

      <div>
        <a href='https://github.com/MatheusDev20' target='_blank'>
          <GithubIcon classStyles="h-5 w-5 cursor-pointer text-white hover:text-main-blue"/>
        </a>
      </div>
    </header>
  )
}
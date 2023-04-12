import React from 'react'
import { FiHome } from "@react-icons/all-files/fi/FiHome";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { FiFileText } from "@react-icons/all-files/fi/FiFileText";
import { FiBriefcase } from "@react-icons/all-files/fi/FiBriefcase";
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { FiMail } from "@react-icons/all-files/fi/FiMail";

import ActiveLink from './ActiveLink';
export default function layout({ cointainerClassName = '', setShowNavBar }: { cointainerClassName: string, setShowNavBar: (val: boolean) => void }) {

  const navigation = [{
    name: 'Home',
    Icon: () => <FiHome />,
    href: '/'
  }, {
    name: 'About Me',
    Icon: () => <FiUser />,
    href: '/page/about'
  }, {
    name: 'Resume',
    Icon: () => <FiFileText />,
    href: '/page/resume'
  }, {
    name: 'Portfolio',
    Icon: () => <FiBriefcase />,
    href: '/page/portfolio'
  }, {
    name: 'Blog',
    Icon: () => <FiBook />,
    href: '/page/blog'
  }, {
    name: 'Contact',
    Icon: () => <FiMail />,
    href: '/page/contact'
  }]

  return (
    <header className={cointainerClassName}>
      <div className='flex-1'>
        <div className='min-h-full'>
          <div className='flex pl-10 text-xl text-white py-4 font-bold bg-primary font-jacques'>Francies Fernandes</div>
          <nav className="nav-menu">
            <ul>
              {
                navigation.map(({ name, Icon, href }: { name: string, Icon: () => JSX.Element, href: string }) => <li key={name}>
                  <ActiveLink onClick={() =>setShowNavBar(false)} as={href} href={href} className={`flex uppercase pl-10 items-center py-2 border-y border-[#202226] leading-8 hover:bg-primary/[.5] hover:text-white`} activeClassName={'active'}>
                    <span className="pr-[1em] text-[0.8em]"> <Icon /> </span>
                    <span className='text-[0.8em]'>{name}</span>
                  </ActiveLink> </li>)
              }
            </ul>
          </nav>
        </div>
      </div>
      <footer className='text-xs '>Made with Next.js</footer>
    </header>
  )
}

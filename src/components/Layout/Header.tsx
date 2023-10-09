import Link from 'next/link';

import Navigation from './Navigation'

import { contacts } from "./socials"

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold text-slate-200 sm:text-5xl">Kristina Zhuravleva</h1>
        <h2 className="mt-3 text-lg font-medium tracking-light text-slate-200 sm:text-xl">Frontend React Developer</h2>
        <p className="mt-4 max-w-xs">I create user-friendly, inclusive digital solutions and web experiences.</p>
        <Navigation />
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {contacts.map(contact => <li key={contact.name} className="mr-5 text-xs font-times">
          <Link href={contact.link} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <span className="block hover:text-slate-200 cursor-pointer">
                {contact.icon}
              </span>
            </a>
          </Link>
        </li>)}
      </ul>
    </header>

  )
}

export default Header
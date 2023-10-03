import { useState } from 'react'

import Link from 'next/link';

const menu = [
  {
    id: 'about',
    link: '#about',
    name: 'About'
  },
  {
    id: 'experience',
    link: '#experience',
    name: 'Experience'
  },
  {
    id: 'projects',
    link: '#projects',
    name: 'Projects'
  }
]

const Navigation = () => {
  const [activeLinks, setActiveLinks] = useState({
    about: 'active',
    experience: null,
    projects: null
  });

  const handleClick = (id: any) => {
    setActiveLinks({
      ...activeLinks,
      about: '',
      experience: null,
      projects: null,
      [id]: 'active'
    });
  };

  return <nav className="nav hidden lg:block" aria-label="In-page jump links">
    <ul className="mt-16 w-max">
      {menu.map(item => (
        <li key={item.name} onClick={() => handleClick(item.id)}>
          <Link href={item.link} legacyBehavior>
          <a className={`group flex items-center py-3`}>
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{item.name}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
};

export default Navigation;
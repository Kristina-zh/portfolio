import { useRef } from 'react';
import MenuItem from './MenuItem';

const menu = [
  {
    id: 'about' as 'about' | 'experience' | 'projects',
    link: '#about',
    name: 'About'
  },
  {
    id: 'experience' as 'about' | 'experience' | 'projects',
    link: '#experience',
    name: 'Experience'
  },
  {
    id: 'projects' as 'about' | 'experience' | 'projects',
    link: '#projects',
    name: 'Projects'
  }
]

const Navigation: React.FC = () => {
  const navRef = useRef(null);

  return <nav ref={navRef} className="nav hidden lg:block" aria-label="In-page jump links">
    <ul className="mt-16 w-max">
      {menu.map((item) => <MenuItem item={item} key={item.name} />)}
    </ul>
  </nav>
};

export default Navigation;
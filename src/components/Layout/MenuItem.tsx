import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface MenuItemProps {
  item: {
    id: 'about' | 'experience' | 'projects';
    link: string;
    name: string
  }
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const router = useRouter();
  const { asPath } = router;

  const [activeLinks, setActiveLinks] = useState<{
    about: string | null;
    experience: string | null;
    projects: string | null;
  }>({
    about: null,
    experience: null,
    projects: null,
  });

  const handleClick = (id: string) => {
    const newActiveLinks = { ...activeLinks } as {
      about: string | null;
      experience: string | null;
      projects: string | null;
    };
    newActiveLinks[id as keyof typeof newActiveLinks] = 'active';
    setActiveLinks(newActiveLinks);
  };

  useEffect(() => {
    setActiveLinks({
      about: asPath === '/' || asPath === '/#about' ? 'active' : null,
      experience: asPath === '/#experience' ? 'active' : null,
      projects: asPath === '/#projects' ? 'active' : null,
    });
  }, [asPath]);


  return <li key={item.name}>
    <Link href={item.link} legacyBehavior>
      <a
        className={`group flex items-center py-3 ${activeLinks[item.id] ? 'active' : ''
          }`}
        onClick={() => handleClick(item.link)}
      >
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          {item.name}
        </span>
      </a>
    </Link>
  </li>
}

export default MenuItem;
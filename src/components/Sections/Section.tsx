import CardList from "../Cards/CardList";
import LinkCustom from '@/components/common/LinkCustom';

interface ICard {
  id: string
  title: string
  description: string
  skills: Array<string>
}

interface SectionProps {
  id: string;
  label: string;
  title: string;
  content?: React.ReactNode;
  list?: ICard[];
  linkTitle?: string;
  link?: string
}

const Section: React.FC<SectionProps> = ({ id, label, title, content = null, list = [], linkTitle, link }) => {
  return <section id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24" aria-label={label}>
    <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {title}
      </h2>
    </div>
    {content}
    {list?.length > 0 && <CardList cards={list} />}

    {linkTitle && link && <div className="mt-12">
      <LinkCustom title={linkTitle} link={link} />
    </div>}
  </section>
}

export default Section;
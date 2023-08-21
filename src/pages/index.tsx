import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer'
import Section from '@/components/Sections/Section';
import { aboutContent } from '@/components/Sections/aboutContent';
import { experienceList } from "@/components/Sections/experienceContent";
import { projectsList } from "@/components/Sections/projectsContent";
import Spotlight, {SpotlightCard} from '@/components/common/Spotlight';

export default function Home() {
  return <Spotlight className="relative">
    <SpotlightCard >
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 
    md:px-12 md:py-20 
    lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-4">
      <Header />

      <main id="content" className="pt-24 lg:w-1/2 lg:py-24" >
        <Section id="about" label="About me" title="About" content={aboutContent} />
        <Section id="experience" label="Work experience" title="Experience" list={experienceList} linkTitle="View Full Résumé" />
        <Section id="projects" label="Selected projects" title="Projects" list={projectsList} linkTitle="View Full Project Archive" />
      </main>

      <Footer />
    </div>
    </SpotlightCard>
    </Spotlight>}
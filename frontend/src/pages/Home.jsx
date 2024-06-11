import Hero from '../components/Hero';
import HeroAbout from '../components/HeroAbout';
import SkillsHomePage from '../components/SkillsHomePage';

const Home = () => {
    return (
        <div className='relative bg-comptech-950'>
            <Hero />
            <HeroAbout />
            <SkillsHomePage />
        </div>
    )
}

export default Home
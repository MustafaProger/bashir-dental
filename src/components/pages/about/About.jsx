import Slider from '../../slider/Slider'
import './About.scss'

const About = () => {
    return (
        <section className='about'>
            <div className='container'>
                <div className='about__content'>
                    <h1 className='about__title fz_42'>Обо мне</h1>
                    <Slider/>
                </div>
            </div>
        </section>
    )
}

export default About;
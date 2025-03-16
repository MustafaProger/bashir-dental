import Header from "../../header/Header";
import "./Hero.scss";

const Hero = () => {
	return (
		<div class='hero'>
			<Header />
			<div className='container'>
				<div className='hero__content'>
					<h1 className='hero__title fz_52'>Ваша улыбка — моя забота</h1>
					<p className='hero__subtitle fz_16'>
						Профессиональные стоматологические услуги от врача с опытом, включая
						имплантацию и протезирование на имплантатах.
					</p>
					<button className='hero__btn btn'>Бесплатная консультация</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;

import { useState, useEffect, useRef } from "react";
import "./Slider.scss";

const Slider = () => {
	const trackRef = useRef(null);
	const slidesRef = useRef([]);
	const dotsRef = useRef([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const slidesData = [
		{
			title: "Миссия и цели",
			text: "Сегодня я сосредоточен на том, чтобы каждый мой пациент уходил с уверенной улыбкой. Моё желание — сделать стоматологию доступной, понятной и комфортной. Я верю, что здоровая улыбка — это уверенность в себе и качество жизни.",
		},
		{
			title: "Мой подход к работе",
			text: "За время своей карьеры я понял, что каждый пациент — это индивидуальность. Моя цель — сделать визит к стоматологу комфортным и безболезненным. Я использую современные методы лечения и уделяю особое внимание безопасности и результативности каждого лечения.",
		},
		{
			title: "Квалификация и достижения",
			text: "Получил медицинское образование и прошел стажировку в современных клиниках. Постоянно обучаюсь новым методам лечения, чтобы предлагать пациентам качественные и надежные решения.",
		},
	];

	const totalSlides = slidesData.length;

	useEffect(() => {
		if (slidesRef.current.length === 0) return;
		updateSliderPosition();
		moveActiveDot(currentIndex);
	}, [currentIndex]);

	const updateSliderPosition = () => {
		if (!slidesRef.current[currentIndex]) return;

		slidesRef.current.forEach((slide) => {
			slide?.classList.remove("active", "prev", "next");
		});

		const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
		const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;

		slidesRef.current[currentIndex]?.classList.add("active");
		slidesRef.current[prevIndex]?.classList.add("prev");
		slidesRef.current[nextIndex]?.classList.add("next");
	};

	const moveActiveDot = (index) => {
		if (!dotsRef.current[index]) return;
		const activeDotPosition = dotsRef.current[index].offsetLeft;
		document.getElementById(
			"active-dot"
		).style.transform = `translateX(${activeDotPosition}px)`;

		dotsRef.current.forEach((dot) => dot.classList.remove("active"));
		dotsRef.current[index]?.classList.add("active");
	};

	const gotoNext = () => {
		setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
	};

	const gotoPrev = () => {
		setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
	};

	return (
		<>
			<div
				className='about__slider'
				ref={trackRef}>
				{slidesData.map((slide, index) => (
					<div
						key={index}
						className={`about__item ${index === currentIndex ? "active" : ""}`}
						ref={(el) => (slidesRef.current[index] = el)}>
						<h3 className='about__title'>{slide.title}</h3>
						<hr />
						<p className='about__text fz_16'>{slide.text}</p>
					</div>
				))}
				<div className='button-container'>
					<button
						className='prev'
						onClick={gotoPrev}></button>
					<button
						className='next'
						onClick={gotoNext}></button>
				</div>
			</div>
			<div className='dots-container'>
				{slidesData.map((_, index) => (
					<div
						key={index}
						className='dot'
						ref={(el) => (dotsRef.current[index] = el)}
						onClick={() => setCurrentIndex(index)}>
						<span></span>
					</div>
				))}
				<div id='active-dot'></div>
			</div>
		</>
	);
};

export default Slider;

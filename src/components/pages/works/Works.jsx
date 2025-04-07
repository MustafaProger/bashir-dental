import { useRef, useEffect } from "react";
import "./Works.scss";

// Добавь сюда свои работы
const works = [
	{
		before: require("../../../assets/works/img_1/img_1-before.jpeg"),
		after: require("../../../assets/works/img_1/img_1-after.jpeg"),
	},
	{
		before: require("../../../assets/works/img_1/img_1-before.jpeg"),
		after: require("../../../assets/works/img_1/img_1-after.jpeg"),
	},
	{
		before: require("../../../assets/works/img_1/img_1-before.jpeg"),
		after: require("../../../assets/works/img_1/img_1-after.jpeg"),
	},
	{
		before: require("../../../assets/works/img_1/img_1-before.jpeg"),
		after: require("../../../assets/works/img_1/img_1-after.jpeg"),
	},
	{
		before: require("../../../assets/works/img_1/img_1-before.jpeg"),
		after: require("../../../assets/works/img_1/img_1-after.jpeg"),
	},

];

export default function Works() {
	const sliderRefs = useRef([]);

	useEffect(() => {
		const initSlider = (element) => {
			const sliderRange = element.querySelector(
				"[data-image-comparison-range]"
			);
			const thumb = element.querySelector("[data-image-comparison-thumb]");

			const setSliderState = (e) => {
				sliderRange.classList.toggle(
					"image-comparison__range--active",
					e.type === "input"
				);
			};

			const moveSliderThumb = (e) => {
				const sliderWrapper = sliderRange.parentElement;
				const rect = sliderWrapper.getBoundingClientRect();
				let position = e.clientY - rect.top - 20;
				position = Math.max(
					-20,
					Math.min(position, sliderWrapper.offsetHeight - 20)
				);
				thumb.style.top = `${position}px`;
			};

			const moveSliderRange = (e) => {
				const value = e.target.value;
				const slider = element.querySelector("[data-image-comparison-slider]");
				const overlay = element.querySelector(
					"[data-image-comparison-overlay]"
				);

				slider.style.left = `${value}%`;
				overlay.style.width = `${value}%`;
				setSliderState(e);
			};

			const mouseMoveHandler = (e) => moveSliderThumb(e);
			const mouseUpHandler = () => {
				element.removeEventListener("mousemove", mouseMoveHandler);
			};

			sliderRange.addEventListener("mousedown", (e) => {
				moveSliderThumb(e);
				element.addEventListener("mousemove", mouseMoveHandler);
			});
			sliderRange.addEventListener("mouseup", mouseUpHandler);
			sliderRange.addEventListener("mouseleave", mouseUpHandler);

			sliderRange.addEventListener("input", moveSliderRange);
			sliderRange.addEventListener("change", moveSliderRange);
		};

		sliderRefs.current.forEach((el) => {
			if (el) initSlider(el);
		});
	}, []);

	return (
		<section
			className='works'
			id='works'>
			<div className='container'>
				<h1 className='title fz_42'>Мои работы</h1>
				<div className='works__list'>
					{works.map((work, index) => (
						<div
							className='image-comparison'
							data-component='image-comparison-slider'
							key={index}>
							<div
								className='image-comparison__slider-wrapper'
								ref={(el) => (sliderRefs.current[index] = el)}>
								<input
									type='range'
									min='0'
									max='100'
									defaultValue='50'
									className='image-comparison__range'
									data-image-comparison-range=''
								/>

								<div
									className='image-comparison__image-wrapper image-comparison__image-wrapper--overlay'
									data-image-comparison-overlay=''>
									<figure className='image-comparison__figure image-comparison__figure--overlay'>
										<picture className='image-comparison__picture'>
											<img
												src={work.before}
												alt='Before'
												className='image-comparison__image'
											/>
										</picture>
									</figure>
								</div>

								<div
									className='image-comparison__slider'
									data-image-comparison-slider=''>
									<span
										className='image-comparison__thumb'
										data-image-comparison-thumb=''>
										<svg
											className='image-comparison__thumb-icon'
											xmlns='http://www.w3.org/2000/svg'
											width='18'
											height='10'
											viewBox='0 0 18 10'
											fill='currentColor'>
											<path d='M12.121 4.703V.488c0-.302.384-.454.609-.24l4.42 4.214a.33.33 0 0 1 0 .481l-4.42 4.214c-.225.215-.609.063-.609-.24V4.703z' />
											<path d='M5.879 4.703V.488c0-.302-.384-.454-.609-.24L.85 4.462a.33.33 0 0 0 0 .481l4.42 4.214c.225.215.609.063.609-.24V4.703z' />
										</svg>
									</span>
								</div>

								<div className='image-comparison__image-wrapper'>
									<figure className='image-comparison__figure'>
										<picture className='image-comparison__picture'>
											<img
												src={work.after}
												alt='After'
												className='image-comparison__image'
											/>
										</picture>
									</figure>
								</div>
							</div>
						</div>
					))}
				</div>
				<button className="btn">Загрузить еще работы</button>
			</div>
		</section>
	);
}

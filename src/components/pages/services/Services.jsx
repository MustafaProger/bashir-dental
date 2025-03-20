import { useState } from "react";
import "./Services.scss";

import screw from "../../../assets/services/screw.png";
import royalty from "../../../assets/services/royalty.png";
import tooth from "../../../assets/services/tooth.png";

const servicesData = [
	{
		title: "Имплантация",
		frontText:
			"Современная имплантация зубов для восстановления улыбки и комфорта.",
		backText:
			"Я использую надежные и долговечные зубные импланты, которые выглядят и ощущаются как натуральные. Процедура проходит с минимальным дискомфортом, а результат сохраняется на долгие годы.",
		imgSrc: screw,
		imgAlt: "screw",
	},
	{
		title: "Протезирование",
		frontText:
			"Качественное протезирование для восстановления жевательной функции.",
		backText:
			"Подбираю оптимальный вариант протезирования — от съемных до несъемных конструкций. Использую современные материалы, обеспечивая комфорт и естественный вид.",
		imgSrc: royalty,
		imgAlt: "royalty",
	},
	{
		title: "Чистка зубов",
		frontText: "Профессиональная чистка зубов и уход за полостью рта.",
		backText:
			"Регулярная чистка зубов помогает избежать проблем с зубами и деснами, поддерживая их здоровье. Я провожу глубокую профессиональную чистку, удаляю налет и зубной камень, а также помогаю предотвратить заболевания полости рта.",
		imgSrc: tooth,
		imgAlt: "tooth",
	},
];

const Services = () => {
	const [flipped, setFlipped] = useState(
		Array(servicesData.length).fill(false)
	);

	const handleFlip = (index) => {
		setFlipped((prev) => prev.map((item, i) => (i === index ? !item : item)));
	};

	return (
		<section
			className='services'
			id='services'>
			<div className='container'>
				<h2 className='title fz_42'>Мои услуги</h2>
				<div className='services__content'>
					{servicesData.map((service, index) => (
						<div
							key={index}
							className={`service-card ${flipped[index] ? "flipped" : ""}`}>
							<div className='service-card-inner'>
								<div className='service-card-front'>
									<div className='icon'>
										<img
											src={service.imgSrc}
											alt={service.imgAlt}
										/>
									</div>
									<h3 className="service__title">{service.title}</h3>
									<p className="text fz_16">{service.frontText}</p>
									<button
										className='flip-btn'
										onClick={() => handleFlip(index)}>
										Подробнее
									</button>
								</div>
								<div className='service-card-back'>
									<h3 className="service__title">{service.title}</h3>
									<p className="text fz_16">{service.backText}</p>
									<button
										className='flip-back-btn'
										onClick={() => handleFlip(index)}>
										Назад
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;

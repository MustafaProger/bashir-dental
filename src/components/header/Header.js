/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Header.scss";

import mainIcon from "../../assets/main-icon.svg";
import instagram from "../../assets/media/instagram.svg";
import telegram from "../../assets/media/telegram.svg";
import whatsapp from "../../assets/media/whatsapp.svg";
import email from "../../assets/contacts/email.svg";
import phone from "../../assets/contacts/phone.svg";

const Header = () => {
	return (
		<header className='header'>
			<div className='header__content'>
				<div className='header__content_top'>
					<div className='header__media'>
						<a
							href='https://www.instagram.com/dr_bashirkurban0v?igsh=MTd5Z3B5cDZ3ZzZyMA=='
							target='_blank'
							className='media__link instagram'
							rel='noreferrer'>
							<img
								src={instagram}
								alt='instagram'
							/>
						</a>
						<a
							href='https://t.me/+79880246554'
							target='_blank'
							className='media__link telegram'
							rel='noreferrer'>
							<img
								src={telegram}
								alt='telegram'
							/>
						</a>
						<a
							href='https://wa.me/+79880246554'
							target='_blank'
							className='media__link whatsapp'
							rel='noreferrer'>
							<img
								src={whatsapp}
								alt='whatsapp'
							/>
						</a>
					</div>
					<div className='header__contacts'>
						<div className='email'>
							<img
								src={email}
								alt='email'
								className='email__icon'
							/>
							<a
								href='mailto:kirov.aleks.1998@yandex.ru'
								className='header__contacts_item'>
								kirov.aleks.1998@yandex.ru
							</a>
						</div>
						<div className='phone'>
							<img
								src={phone}
								alt='phone'
								className='phone__icon'
							/>
							<a
								href='tel:79880246554'
								className='header__contacts_item'>
								+7 988 024-65-54
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='header__content'>
				<div className='header__content_bottom'>
					<a
						href='#'
						className='header__icon'>
						<img
							src={mainIcon}
							alt='icon'
						/>
					</a>
					<div className='header__burger'>
						<span></span>
					</div>
					<nav className='nav'>
						<ul className='list'>
							<li className='list__item'>
								<a
									href='#hero'
									className='list__hyperlink'>
									Главная
								</a>
							</li>
							<li className='list__item'>
								<a
									href='#about'
									className='list__hyperlink'>
									Обо мне
								</a>
							</li>
							<li className='list__item'>
								<a
									href='#services'
									className='list__hyperlink'>
									Услуги
								</a>
							</li>
							<li className='list__item'>
								<a
									href='#works'
									className='list__hyperlink'>
									Работы
								</a>
							</li>
							<li className='list__item'>
								<a
									href='#feedback'
									className='list__hyperlink'>
									Отзывы
								</a>
							</li>
							<li className='list__item'>
								<a
									href='#form'
									className='list__hyperlink'>
									Связаться
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;

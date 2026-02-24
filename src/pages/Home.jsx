import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/images/1.jpg';
import Catalog from './Catalog';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <img src={logo} alt="Логотип J&G Tulip Atelier" className="hero-logo" />
                    <h1 className="hero-title">J&G Tulip Atelier</h1>
                    <p className="hero-subtitle">Первое дыхание весны</p>
                    <p className="hero-text">Тюльпаны оптом, в розницу, букетом</p>
                    <p className="hero-text">
                        Мы верим, что тюльпан — это больше, чем цветок. Это первое дыхание весны, улыбка, комплимент и искренняя радость в простой стеклянной вазе.
                    </p>
                    <a href="#catalog" className="cta-button">Смотреть каталог</a>
                    <div className="extra-buttons">
                        <a href="https://t.me/zh1glov" target="_blank" rel="noopener noreferrer" className="cta-button telegram-btn">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.4-1.08.39-.35-.01-1.03-.2-1.53-.37-.62-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.26-.01.07.01.14 0 .2z" fill="white" />
                                </svg>
                                Опт
                            </span>
                            <span className="btn-subtitle">от 500 штук</span>
                        </a>
                        <a href="https://t.me/zh1glov" target="_blank" rel="noopener noreferrer" className="cta-button telegram-btn">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.4-1.08.39-.35-.01-1.03-.2-1.53-.37-.62-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.26-.01.07.01.14 0 .2z" fill="white" />
                                </svg>
                                Розница
                            </span>
                        </a>
                    </div>
                    <div className="promo-code">
                        Промокод на скидку 10%: <strong>FLOW10</strong>
                    </div>
                </div>
            </section>

            <Catalog />

            <section className="about container">
                <div className="about-grid">
                    <div className="about-item">
                        <h3>Тщательно отобранные сорта</h3>
                        <p>Здесь вы не найдете случайных цветов. Только тщательно отобранные сорта из Голландии💕</p>
                    </div>
                    <div className="about-item">
                        <h3>Свежий срез</h3>
                        <p>Ежедневно срезаем свежие тюльпаны, выращенные в собственной теплице🌷</p>
                    </div>
                    <div className="about-item">
                        <h3>Уникальный подход</h3>
                        <p>От классических до эксклюзивных - создадим для вас идеальный букет, который говорит без слов!</p>
                    </div>
                </div>
                <div className="inspiration-text">
                    <p>Приходите за вдохновением. Унесите с собой весну💐</p>
                </div>
            </section>

            <section className="pricing-delivery container">
                <div className="pricing-card">
                    <h3>Варианты заказа</h3>
                    <p className="highlight-text">
                        Мы предлагаем удобные форматы сотрудничества для каждого клиента, гарантируя свежесть и качество.
                    </p>
                    <ul className="pricing-list">
                        <li>
                            <strong>Оптовые поставки</strong>
                            <p>Специальные условия для партнеров и корпоративных клиентов. Тюльпаны экстра-класса для вашего бизнеса.</p>
                        </li>
                        <li>
                            <strong>Розничная продажа</strong>
                            <p>Радуйте любимых свежими цветами. Доступны заказы от одного тюльпана до роскошных охапок.</p>
                        </li>
                        <li>
                            <strong>Авторские букеты</strong>
                            <p>Индивидуальный подход к каждому букету. Создадим композицию, которая идеально выразит ваши чувства.</p>
                        </li>
                    </ul>
                </div>

                <div className="delivery-card">
                    <h3>Наш адрес</h3>
                    <ul className="delivery-list">
                        <li>Улица 2-я Прокопьевская</li>
                    </ul>
                </div>
            </section>

            <section className="contact">
                <div className="container">
                    <h2>Наши контакты</h2>
                    <div className="contact-info">
                        <div className="contact-card">
                            <h3>Глеб</h3>
                            <p>+7 913 743 1849</p>
                            <a href="https://t.me/zh1glov" target="_blank" rel="noopener noreferrer">t.me/zh1glov</a>
                        </div>
                        <div className="contact-card">
                            <h3>Елизавета</h3>
                            <p>+7 913 760 9786</p>
                            <a href="https://t.me/miuraviova" target="_blank" rel="noopener noreferrer">t.me/miuraviova</a>
                        </div>
                    </div>
                    <div className="delivery-info">
                        <p>Доставка по Новосибирску</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

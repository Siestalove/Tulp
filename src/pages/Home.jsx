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
                    <p className="hero-text">
                        Мы верим, что тюльпан — это больше, чем цветок. Это первое дыхание весны, улыбка, комплимент и искренняя радость в простой стеклянной вазе.
                    </p>
                    <a href="#catalog" className="cta-button">Смотреть каталог</a>
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
                    <h3>Доставка и Получение</h3>
                    <ul className="delivery-list">
                        <li>❀ Есть наша платная доставка по городу</li>
                        <li>❀ Можно заказать Яндекс Доставку самостоятельно</li>
                        <li>❀ Самовывоз — ориентир <strong>Белые Росы</strong></li>
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

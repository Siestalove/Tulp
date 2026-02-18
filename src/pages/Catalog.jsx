import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './Catalog.css';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import imgColumbus from '../assets/images/columbus.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpg';
import img12 from '../assets/images/12.jpg';
import img13 from '../assets/images/13.jpg';
import img14 from '../assets/images/14.jpg';
import img15 from '../assets/images/15.jpg';
import img16 from '../assets/images/16.jpg';
import img17 from '../assets/images/17.jpg';
import img18 from '../assets/images/18.jpg';
import img19 from '../assets/images/19.jpg';

const flowers = [
    { id: 1, name: 'Orange Juice', price: '140₽', image: img2, description: 'Оранжевые тюльпаны, символизирующие любовь и страсть.' },
    { id: 2, name: 'Hennie v.d. Most', price: '140₽', image: img3, description: 'Искры пламени.' },
    { id: 3, name: 'Milkshake', price: '140₽', image: img4, description: 'Идеал сдержанной роскоши, чья красота — в тонкости, а не в яркости.' },
    { id: 4, name: 'Columbus', price: '140₽', image: imgColumbus, description: 'Раскрываясь, наполняются теплым, солнечным светом.' },
    { id: 5, name: 'Iceberg', price: '140₽', image: img6, description: 'Чистые белые тюльпаны, олицетворяющие невинность и чистоту. Нежность в каждом лепестке.' },
    { id: 6, name: 'First Price', price: '140₽', image: img7, description: 'Окутанные вихрем сочных оттенков.' },
    { id: 7, name: 'Double Price', price: '140₽', image: img8, description: 'Гармония между спокойствием и страстью.' },
    { id: 8, name: 'Orca', price: '140₽', image: img9, description: 'Прониклись медовым румянцем.' },
    { id: 9, name: 'Pink Stone', price: '140₽', image: img10, description: 'Утонченное кружево розового кварца.' },
    { id: 10, name: 'Red Ranger', price: '140₽', image: img11, description: 'Дерзкая вспышка, подчеркивающая изящную хрупкость.' },
    { id: 11, name: 'Verona', price: '140₽', image: img12, description: 'Фарфоровые лепестки, созданы для тихого признания.' },
    { id: 12, name: 'Flash Point', price: '140₽', image: img13, description: 'Этот тюльпан — про контрасты: страсть и свежесть. Он создаёт атмосферу весеннего обновления без компромиссов.' },
    { id: 13, name: 'Lions Glory', price: '140₽', image: img14, description: 'Солнечное утро, застывшее в золотистых бокалах.' },
    { id: 14, name: 'Avant Garde', price: '140₽', image: img15, description: 'Художественные скульптуры среди зелени.' },
    { id: 15, name: 'Showroom', price: '140₽', image: img16, description: 'Рассветные облака, слегка расшитые первыми алыми прожилками.' },
    { id: 16, name: 'Argos', price: '140₽', image: img17, description: 'Дышат ранней весной — свежей, тихой и наполненной мягким светом.' },
    { id: 17, name: 'Nikon', price: '140₽', image: img18, description: 'Смелый аккорд — жизнерадостный, пропитанный искренней эмоцией.' },
    { id: 18, name: 'Timeless', price: '140₽', image: img19, description: 'Каждый цветок словно хранит секрет магии пробуждения природы.' },
];

const Catalog = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    const handleOrderClick = (e) => {
        e.stopPropagation();
        setIsOrderModalOpen(true);
    };

    return (
        <div className="catalog" id="catalog">
            <div className="container">
                <h2>Наша коллекция</h2>
                <p className="catalog-subtitle">Выберите идеальный букет для любимых</p>

                <div className="catalog-grid">
                    {flowers.map((flower) => (
                        <div key={flower.id} className="flower-card" onClick={() => setSelectedImage(flower)}>
                            <div className="card-image-wrapper">
                                <img src={flower.image} alt={flower.name} loading="lazy" />
                            </div>
                            <div className="card-content">
                                <h3>{flower.name}</h3>
                                <button className="order-btn" onClick={handleOrderClick}>Заказать</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedImage(null)}>&times;</button>
                        <img src={selectedImage.image} alt={selectedImage.name} />
                        <h3>{selectedImage.name}</h3>
                        <p>{selectedImage.description}</p>
                    </div>
                </div>
            )}

            {isOrderModalOpen && (
                <div className="modal-overlay" onClick={() => setIsOrderModalOpen(false)}>
                    <div className="modal-content order-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setIsOrderModalOpen(false)}>&times;</button>
                        <h3>Связаться для заказа</h3>
                        <div className="promo-code-container" style={{ margin: '20px 0', padding: '15px', background: '#fff0f5', borderRadius: '10px', border: '1px dashed var(--color-primary)' }}>
                            <p style={{ margin: '0 0 5px', fontSize: '0.9rem', color: '#666' }}>Ваш промокод на скидку:</p>
                            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)', letterSpacing: '2px' }}>FLOW10</span>
                        </div>
                        <p>Выберите удобный способ связи или сканируйте QR-код:</p>

                        <div className="qr-container">
                            <div className="qr-item">
                                <QRCodeSVG value="https://t.me/zh1glov" size={128} />
                                <p>Глеб</p>
                                <a href="https://t.me/zh1glov" target="_blank" rel="noopener noreferrer">@zh1glov</a>
                                <p className="phone">+7 913 743 1849</p>
                            </div>
                            <div className="qr-item">
                                <QRCodeSVG value="https://t.me/miuraviova" size={128} />
                                <p>Елизавета</p>
                                <a href="https://t.me/miuraviova" target="_blank" rel="noopener noreferrer">@miuraviova</a>
                                <p className="phone">+7 913 760 9786</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Catalog;

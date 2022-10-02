import imgVk from '../../img/social/VK.png'
import imgTelegram from '../../img/social/Telegram.png'
import imgWhatsapp from '../../img/social/Whatsapp.png'
import imgRU from '../../img/RU.png'

import './footer.scss'

const Footer = () => {
    return (
        <div className='container'>
            <footer className='footer'>
                <div className='footer__items'>
                    <div className='title'>QPICK</div>
                    <div className='footer__links'>
                        <a href='#'>Избранное</a>
                        <a href='#'>Корзина</a>
                        <a href='#'>Контакты</a>
                    </div>
                    <div className='footer__langs'>
                        <a href='#'>Условия сервиса</a>
                        <div className='footer__lang'>
                            <img src={imgRU} alt='language' />
                            <div className='footer__ru'>Рус</div>
                            <div className='footer__eng'>Eng</div>
                        </div>
                    </div>
                    <div className='footer__social'>
                        <a href='#'>
                            <img src={imgVk} alt='vk' />
                        </a>
                        <a href='#'>
                            <img src={imgTelegram} alt='telegram' />
                        </a>
                        <a href='#'>
                            <img src={imgWhatsapp} alt='Whatsapp' />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import imgLike from '../../img/like.svg'
import imgBasket from '../../img/basket.svg'

import './header.scss'

const Header = () => {
    const { productsCounter } = useSelector(store => store)

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__items'>
                    <div className='title'>QPICK</div>
                    <div className='header__icons'>
                        <div className='header__icon'>
                            <a href='#'>
                                <img src={imgLike} alt='like' />
                            </a>
                            <div className='header__index'>0</div>
                        </div>
                        <div className='header__icon'>
                            <NavLink end className='basketNext' to='/basket'>
                                <img src={imgBasket} alt='basket' />
                            </NavLink>
                            <div className='header__index header__index__basket'>{productsCounter}</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

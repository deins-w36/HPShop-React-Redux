import { useState } from 'react'
import { productsCounterChanging, productsAddInBasket } from '../../productSlice'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './catalog.scss'

const HeadPhonesItem = ({ id, img, price, rate, title, prevPrive }) => {
    const [activeButon, setActiveButton] = useState(false)
    const dispatch = useDispatch()

    let clazz = 'catalog__buy__in-basket'
    clazz = activeButon ? (clazz += ' active') : clazz
    const styleNone = activeButon ? { display: 'none' } : null

    const onAddBasket = () => {
        setActiveButton(true)
        dispatch(productsCounterChanging(1))
        dispatch(productsAddInBasket({ id, img, price, rate, title }))
    }

    return (
        <div className='catalog__item'>
            <div className='catalog__img'>
                <img src={`${process.env.PUBLIC_URL}/${img}`} className='headphone' alt='headPhone' />
            </div>
            <div className='catalog__attribute'>
                <div className='catalog__name'>{title}</div>
                <div className='catalog__prices'>
                    <div className='catalog__price'>{price} ₽</div>
                    <div className='catalog__prevprice'>{prevPrive}</div>
                </div>
            </div>
            <div className='catalog__buy'>
                <div className='catalog__star'>
                    <img src={`${process.env.PUBLIC_URL}/img/hp/star.png`} alt='star' />
                    <div className='catalog__star__number'>{rate}</div>
                </div>
                <button onClick={() => onAddBasket()} className='catalog__buy__btn' style={styleNone}>
                    Купить
                </button>
                <NavLink end to='/basket' className={clazz}>
                    В корзине
                </NavLink>
            </div>
        </div>
    )
}

export default HeadPhonesItem

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTotalPrice } from '../../productSlice'

import BasketItem from './Basket-item'

import './basket.scss'

const BasketList = () => {
    const dispatch = useDispatch()
    const { productsInBasket, totalPrice } = useSelector(store => store)
    let localPrice = 0

    const elements = productsInBasket.map(item => {
        localPrice += item.price
        return <BasketItem key={item.id} {...item} />
    })

    useEffect(() => {
        dispatch(setTotalPrice(localPrice))
        // eslint-disable-next-line
    }, [])

    return (
        <section className='basket'>
            <div className='container'>
                <div className='subheader'>Корзина</div>
                <div className='basket__items'>
                    <div className='basket__products'>{elements}</div>

                    <div className='basket__cost'>
                        <div className='basket__cont'>
                            <div className='basket__all'>ИТОГО</div>
                            <div className='basket__all-price'>{totalPrice} ₽</div>
                        </div>
                        <div className='basket__offer'>
                            <span>Перейти к оформлению</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BasketList

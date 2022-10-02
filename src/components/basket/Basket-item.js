import { useState, useEffect } from 'react'
import { changeTotalPrice, productsDeleteInBasket, productsCounterChanging } from '../../productSlice'
import { useDispatch } from 'react-redux'

import imgDelete from '../../img/delete_bask.png'

import './basket.scss'

const BasketItem = ({ title, price, img, id }) => {
    const [countProd, setCountProd] = useState(1)
    const [middlePrice, setMiddlePrice] = useState(0)
    const dispatch = useDispatch()
    const counterChange = num => {
        if (num < 0) {
            if (countProd > 1) {
                setCountProd(counter => counter + num)
                dispatch(changeTotalPrice(+`-${price}`))
            }
        } else {
            setCountProd(counter => counter + num)
            dispatch(changeTotalPrice(price))
        }
    }
    const deleteItem = idItem => {
        dispatch(productsDeleteInBasket(idItem))
        dispatch(productsCounterChanging(-1))
        dispatch(changeTotalPrice(+`-${middlePrice}`))
    }

    useEffect(() => {
        setMiddlePrice(price * countProd)
        // eslint-disable-next-line
    }, [countProd])

    return (
        <div className='basket__product'>
            <div className='basket__img'>
                <img src={`${process.env.PUBLIC_URL}/${img}`} alt='product' />
                <div className='basket__control'>
                    <div onClick={() => counterChange(-1)} className='basket__control__minus'>
                        <span></span>
                    </div>
                    <div className='basket__control__qunt'>{countProd}</div>
                    <div onClick={() => counterChange(1)} className='basket__control__plus'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className='basket__info'>
                <div className='basket__name'>{title}</div>
                <div className='basket__price'>{price} ₽</div>
            </div>
            <div className='basket__total'>
                <div onClick={() => deleteItem(id)} className='basket__delete'>
                    <img src={imgDelete} alt='delete' />
                </div>
                <div className='basket__total-price'>{middlePrice} ₽</div>
            </div>
        </div>
    )
}

export default BasketItem

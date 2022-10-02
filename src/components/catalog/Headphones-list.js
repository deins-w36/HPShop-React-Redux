import { useEffect } from 'react'
import {
    productsWiredFetching,
    productsWiredFetched,
    productsWiredFetchedError,
    productsWirelessFetching,
    productsWirelessFetched,
    productsWirelessFetchedError
} from '../../productSlice'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '../spinner/Spinner'
import HeadPhonesItem from './HeadPhones-item'
import request from '../../http'

const HeadphonesList = () => {
    const dispatch = useDispatch()
    const { productsWired, productsWiredLoadingStatus, productsWireless, productsWirelessLoadingStatus } = useSelector(
        store => store
    )

    useEffect(() => {
        dispatch(productsWiredFetching())
        request('http://localhost:3001/products_wired')
            .then(HP => dispatch(productsWiredFetched(HP)))
            .catch(() => dispatch(productsWiredFetchedError()))

        dispatch(productsWirelessFetching())
        request('http://localhost:3001/products_wireless')
            .then(HPW => dispatch(productsWirelessFetched(HPW)))
            .catch(() => dispatch(productsWirelessFetchedError()))
        // eslint-disable-next-line
    }, [])

    if (productsWiredLoadingStatus === 'loading' || productsWirelessLoadingStatus === 'loading') {
        return <Spinner />
    } else if (productsWiredLoadingStatus === 'error' || productsWirelessLoadingStatus === 'error') {
        return <h5 className='text-center mt-5'>Ошибка загрузки</h5>
    }

    const hpElementsWired = productsWired.map(item => {
        return <HeadPhonesItem key={item.id} prevPrive={item.prevPrice} {...item} />
    })
    const hpElementsWireless = productsWireless.map(item => {
        return <HeadPhonesItem key={item.id} {...item} />
    })

    return (
        <section className='catalog'>
            <div className='container'>
                <div className='catalog__title'>Наушники</div>

                <div className='catalog__items'>{hpElementsWired}</div>

                <div className='catalog__title'>Беспроводные наушники</div>

                <div className='catalog__items'>{hpElementsWireless}</div>
            </div>
        </section>
    )
}

export default HeadphonesList

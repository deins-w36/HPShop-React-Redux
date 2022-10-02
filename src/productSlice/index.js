import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productsWired: [],
    productsWiredLoadingStatus: 'idle',
    productsWireless: [],
    productsWirelessLoadingStatus: 'idle',
    productsCounter: 0,
    productsInBasket: [],
    totalPrice: 0
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsWiredFetching: state => {
            state.productsWiredLoadingStatus = 'loading'
        },
        productsWiredFetched: (state, action) => {
            state.productsWiredLoadingStatus = 'fetched'
            state.productsWired = action.payload
        },
        productsWiredFetchedError: state => {
            state.productsWiredLoadingStatus = 'error'
        },
        productsWirelessFetching: state => {
            state.productsWirelessLoadingStatus = 'loading'
        },
        productsWirelessFetched: (state, action) => {
            state.productsWirelessLoadingStatus = 'fetched'
            state.productsWireless = action.payload
        },
        productsWirelessFetchedError: state => {
            state.productsWirelessLoadingStatus = 'error'
        },
        productsCounterChanging: (state, action) => {
            state.productsCounter = state.productsCounter + action.payload
        },
        productsAddInBasket: (state, action) => {
            state.productsInBasket = [...state.productsInBasket, action.payload]
        },
        productsDeleteInBasket: (state, action) => {
            state.productsInBasket = state.productsInBasket.filter(item => item.id !== action.payload)
        },
        changeTotalPrice: (state, action) => {
            state.totalPrice = state.totalPrice + action.payload
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload
        }
    }
})

const { actions, reducer } = productSlice

export default reducer

export const {
    productsWiredFetching,
    productsWiredFetched,
    productsWiredFetchedError,
    productsWirelessFetching,
    productsWirelessFetched,
    productsWirelessFetchedError,
    productsCounterChanging,
    productsAddInBasket,
    productsDeleteInBasket,
    changeTotalPrice,
    setTotalPrice
} = actions

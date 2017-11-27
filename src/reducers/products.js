//@flow
import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

const initialState = Immutable.fromJS({
    message: 'Initial reducer message',
  })

const products = (state: Immut = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return Object.assign({},state,action.payload)
      default:
        return state
    }
  }
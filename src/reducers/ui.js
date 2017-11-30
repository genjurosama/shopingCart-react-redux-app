/**
 *This file will hold the Ui reducer to manage various UI events
 */

import {
    SHOW_MODAL,
    HIDE_MODAL
  } from "../actions/ui";
  
  const initialState = {
    showModal:false
  };
  
  /**
 * Reducer for Ui operations
 * @param {Object} state 
 * @param {Object} action 
 * @returns {Object} as a new immutated state
 */

  export const uiReducer = (state = initialState,action) => {
    switch (action.type) {
      case SHOW_MODAL:
        return {
            ...state,
            showModal:true
        }
      case HIDE_MODAL:
      return {
        ...state,
        showModal:false
      }  
      default:
        return state;
    }
  };
  
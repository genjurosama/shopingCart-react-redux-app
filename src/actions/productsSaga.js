import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import fetchFailed from "actions/fetch-failed";
import setRecords from "actions/set-records";
import {getProducts} from '../api/products'

function* fetchProducts() {
  try {
    const products = yield call(getProducts);
    yield put({ type: "PRODUCTS_FETCH_SUCCEEDED", products: products });
  } catch (e) {
    yield put({ type: "PRODUCTS_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeEvery("PRODUCT_FETCH_REQUESTED", fetchProducts);
}

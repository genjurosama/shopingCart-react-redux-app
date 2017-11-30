import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getProducts } from "../api/products";
import {
  PRODUCT_FETCH_FAILED,
  PRODUCT_FETCH_REQUESTED,
  PRODUCT_FETCH_SUCCEEDED
} from "./products";

function* fetchProducts() {
  try {
    const products = yield call(getProducts);
    yield put({ type: PRODUCT_FETCH_SUCCEEDED, products: products });
  } catch (e) {
    yield put({ type: PRODUCT_FETCH_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(PRODUCT_FETCH_REQUESTED, fetchProducts);
}

export default mySaga;

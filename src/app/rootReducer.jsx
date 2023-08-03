import { combineReducers } from '@reduxjs/toolkit';
import OrderDetailsReducer from '../modules/Order_details/slices/OrderDetailsSlice'; //пример импорта реьюсера.
// Другие редьюсеры можно импортировать и добавлять здесь

const rootReducer = combineReducers({
  OrderDetails: OrderDetailsReducer,
  // Добавьте другие редьюсеры по аналогии
});

export default rootReducer;
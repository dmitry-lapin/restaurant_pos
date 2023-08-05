import { combineReducers } from '@reduxjs/toolkit';
import OrderDetailsReducer from '../modules/Order_details/slices/OrderDetailsSlice'; //пример импорта реьюсера.
import SelectedCategorySliceReducer from '../modules/Main_catalog/components/slices/SelectedCategorySlice';// Другие редьюсеры можно импортировать и добавлять здесь

const rootReducer = combineReducers({
  OrderDetails: OrderDetailsReducer,
  Categories: SelectedCategorySliceReducer
});

export default rootReducer;
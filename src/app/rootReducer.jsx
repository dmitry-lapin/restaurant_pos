import { combineReducers } from '@reduxjs/toolkit';

import OrderDetailsReducer from '../modules/Order_details/slices/OrderDetailsSlice';
import SelectedCategorySliceReducer from '../modules/Main_catalog/components/slices/SelectedCategorySlice';
import OrdersFeedSliceReducer from '../modules/Order_details/slices/OrdersFeedSlice';

import toggleModalSlice from '../modules/Order_details/slices/toggleModalSlice';

import OrderInformation from '../modules/Order_details/slices/OrderInformation';

import toggleTableModalSlice from '../modules/Order_details/slices/toggleTableModalSlice';

import darkModeVisibility from '../modules/Sidebar/components/ThemeToggler/slices/darkModeVisibility';

import UIDSliceReducer from '../modules/Login_page/components/LoginSide/components/slices/AuthReducer';

const rootReducer = combineReducers({
  OrderDetails: OrderDetailsReducer,
  Categories: SelectedCategorySliceReducer,
  OrdersFeed: OrdersFeedSliceReducer,
  ModalSlice: toggleModalSlice,
  OrderTotal: OrderInformation,
  ToggleTableModal: toggleTableModalSlice,
  DarkModeToggler: darkModeVisibility,
  UIDSlice: UIDSliceReducer,
});

export default rootReducer;
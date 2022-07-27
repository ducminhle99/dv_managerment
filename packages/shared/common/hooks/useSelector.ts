import { createSelectorHook } from 'react-redux';
import { RootState } from 'store/index';

export const useSelector = createSelectorHook<RootState>();

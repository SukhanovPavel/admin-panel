import { createSelector } from 'reselect';


const isFiltersOpenSelector = state => state.view.isFiltersOpen;

export const getIsFiltersOpen = createSelector(
    isFiltersOpenSelector,
        isFiltersOpen => isFiltersOpen
);

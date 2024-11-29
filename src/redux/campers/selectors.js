export const selectCampers = (state) => state.campers.items;
export const selectCamperById = (state) => state.campers.selectedCamper;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectTotal = (state) => state.campers.total;
export const selectLimit = (state) => state.campers.limit;
export const selectPage = (state) => state.campers.page;

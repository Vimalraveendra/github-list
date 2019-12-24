import paginateActionTypes from "./pagiante.types";

export const handlePaginate = number => ({
  type: paginateActionTypes.SET_PAGE_PAGIANTE,
  payload: number
});

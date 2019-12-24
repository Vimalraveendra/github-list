import { createSelector } from "reselect";

const selectRepository = state => state.repository;

export const selectRepositoryName = createSelector(
  [selectRepository],
  repository => repository.name
);

export const selectRepositoryItems = createSelector(
  [selectRepository],
  repository => repository.items
);

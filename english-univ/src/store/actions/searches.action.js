import { searchesTypes } from "../types";

const { FILTER_COURSES_SEARCH } = searchesTypes;

export const filterCoursesSearch = (key) => ({
  type: FILTER_COURSES_SEARCH,
  keyWords: key,
});

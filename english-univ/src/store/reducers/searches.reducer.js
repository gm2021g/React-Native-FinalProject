import { COURSES } from "../../constants/data/courses";
import { searchesTypes } from "../types";

const { FILTER_COURSES_SEARCH } = searchesTypes;

const initialState = {
  data: COURSES,
  searchCoursesResult: [],
};

const searchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_COURSES_SEARCH:
      return {
        ...state,
        searchCoursesResult: state.data.filter((course) =>
          course.name.toLowerCase().includes(action.keyWords.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default searchesReducer;

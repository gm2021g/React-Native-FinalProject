import { COURSES } from "../../constants/data/courses";
import { courseTypes } from "../types";

const { FILTER_COURSES, SELECT_COURSE, SELECT_ALL_COURSES } = courseTypes;

const initialState = {
  data: COURSES,
  selected: null,
  filteredCourses: [],
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COURSE:
      return {
        ...state,
        selected: state.data.find((course) => course.id === action.courseId),
      };
    case FILTER_COURSES:
      return {
        ...state,
        filteredCourses: state.data.filter(
          (course) => course.category === action.categoryId
        ),
      };
    case SELECT_ALL_COURSES:
      return {
        ...state,
        courses: state.data
      }
    default:
      return state;
  }
};

export default coursesReducer;

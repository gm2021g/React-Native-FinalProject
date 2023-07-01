import { courseTypes } from "../types";

const { SELECT_COURSE, FILTER_COURSES, SELECT_ALL_COURSES } = courseTypes;

export const selectCourse = (id) => ({
  type: SELECT_COURSE,
  courseId: id,
});

export const filterCourses = (id) => ({
  type: FILTER_COURSES,
  categoryId: id,
});

export const selectAllCourses = () => ({
  type: SELECT_ALL_COURSES,
});

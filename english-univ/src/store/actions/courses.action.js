import { courseTypes } from "../types";

const { SELECT_COURSE, FILTER_COURSES } = courseTypes;

export const selectCourse = (id) => ({
  type: SELECT_COURSE,
  courseId: id,
});

export const filterCourses = (id) => ({
  type: FILTER_COURSES,
  categoryId: id,
});

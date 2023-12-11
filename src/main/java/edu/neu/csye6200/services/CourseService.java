package edu.neu.csye6200.services;

import edu.neu.csye6200.models.Course;

import java.util.List;
import java.util.Optional;

public class CourseService {
    public void addCourse(Course newCourse) {
        List<Course> courseList = CourseDbService.Instance.readFromFile();
        Optional<Course> courseOptional = courseList.stream().filter(v -> v.getCourseId() == newCourse.getCourseId()).findFirst();

        if (courseOptional.isPresent()) { return; }

        courseList.add(newCourse);
        CourseDbService.Instance.writeToFile(courseList);
    }
}

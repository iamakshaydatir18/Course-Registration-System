package edu.neu.csye6200.services;

import edu.neu.csye6200.models.Course;
import edu.neu.csye6200.models.CourseFactory;
import edu.neu.csye6200.models.CourseProfessorDto;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class CourseService {
    public void addCourse(CourseProfessorDto courseDto) {
        Course newCourse = CourseFactory.getInstance().createCourse();
        newCourse.setCourseId(courseDto.getCourseId());
        newCourse.setCourseName(courseDto.getCourseName());
        newCourse.setCourseCredit(courseDto.getCourseCredit());
        newCourse.setCourseDescription(courseDto.getCourseDescription());
        newCourse.setProfessor(courseDto.getProfessorId(), courseDto.getProfessorName());

        System.out.println(newCourse.getProfessor().toString());

        List<Course> courseList = CourseDbService.Instance.readFromFile();
        Optional<Course> courseOptional = courseList.stream().filter(v -> v.getCourseId() == newCourse.getCourseId()).findFirst();

        if (courseOptional.isPresent()) { return; }

        courseList.add(newCourse);
        CourseDbService.Instance.writeToFile(courseList);
    }

    public void removeCourse(String courseIdTextual) {
        int courseId = parseStringToInt(courseIdTextual);
        List<Course> courseList = CourseDbService.Instance.readFromFile();
        Optional<Course> courseOptional = courseList.stream().filter(v -> v.getCourseId() == courseId).findFirst();

        if (courseOptional.isEmpty()) { return; }

        List<Course> newList = courseList.stream().filter(v -> v.getCourseId() != courseId).collect(Collectors.toList());
        CourseDbService.Instance.writeToFile(newList);
    }

    private int parseStringToInt(String s) {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException ex) {
            System.out.println("Error while parsing String to int");
            throw ex;
        }
    }
}

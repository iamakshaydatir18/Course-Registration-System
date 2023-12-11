package edu.neu.csye6200.controllers;

import edu.neu.csye6200.models.Course;
import edu.neu.csye6200.models.StudentServiceFactory;
import edu.neu.csye6200.services.CourseDbService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.Gson;


import edu.neu.csye6200.models.Student;

import java.util.List;
import java.util.stream.Collectors;


@RestController
public class StudentController {
    @GetMapping("/student/{studentId}/courses")
    public String getStudentCourses(@PathVariable int studentId) {
        Student student = StudentServiceFactory.STUDENT_SERVICE.getObject().findById(studentId);
        List<Integer> registeredCourseIds = student.getCourses();
        List<Course> studentCourseList = CourseDbService.Instance.readFromFile().stream()
                .filter(course -> registeredCourseIds.contains(course.getCourseId()))
                .collect(Collectors.toList());

        Gson gson = new Gson();
        return(gson.toJson(studentCourseList));
    }

    @GetMapping("/student/{studentId}")
    public String getStudent(@PathVariable int studentId) {

        Student student = StudentServiceFactory.STUDENT_SERVICE.getObject().findById(studentId);

        if (student != null) {
            Gson gson = new Gson();
            return(gson.toJson(student));
        } else {
            System.out.println("Student not found with ID: " + studentId);
            return null;
        }
    }

    @PostMapping("/student/{studentId}/register/{courseId}")
    public void registerForCourse(@PathVariable int studentId, @PathVariable int courseId) {
        StudentServiceFactory.STUDENT_SERVICE.getObject().registerForCourse(studentId, courseId);
    }

    @PostMapping("/student/{studentId}/drop/{courseId}")
    public String dropCourse(@PathVariable int studentId, @PathVariable int courseId) {
        StudentServiceFactory.STUDENT_SERVICE.getObject().dropCourse(studentId, courseId);

        Student student = StudentServiceFactory.STUDENT_SERVICE.getObject().findById(studentId);
        List<Integer> registeredCourseIds = student.getCourses();
        List<Course> studentCourseList = CourseDbService.Instance.readFromFile().stream()
                .filter(course -> registeredCourseIds.contains(course.getCourseId()))
                .collect(Collectors.toList());

        Gson gson = new Gson();
        return(gson.toJson(studentCourseList));
    }
}

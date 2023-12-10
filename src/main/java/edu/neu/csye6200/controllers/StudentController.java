package edu.neu.csye6200.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


import edu.neu.csye6200.models.Student;
import edu.neu.csye6200.services.StudentService;


@RestController
public class StudentController {
    @GetMapping("/student/{studentId}")
    public void getStudentCourses(@PathVariable int studentId) {
        
        StudentService obj = new StudentService();
        Student student = obj.findById(studentId);
        if (student != null) {
            
            System.out.println("Student ID: " + student.getId());
            System.out.println("Student Name: " + student.getName());
            System.out.println("Courses: " + student.getCourses());
        } else {
           
            System.out.println("Student not found with ID: " + studentId);
        }
    }
    @PostMapping("/student/register")
    public void registerForCourse() {

    }

    @PostMapping("/student/drop")
    public void dropCourse() {

    }
}

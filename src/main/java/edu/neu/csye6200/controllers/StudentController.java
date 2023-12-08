package edu.neu.csye6200.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
    @GetMapping("/student")
    public void getStudentCourses() {

    }

    @PostMapping("/student/register")
    public void registerForCourse() {

    }

    @PostMapping("/student/drop")
    public void dropCourse() {

    }
}

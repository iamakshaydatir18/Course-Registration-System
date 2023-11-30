package controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {
    @GetMapping("/courses")
    public void getCourseList() {

    }

    @PostMapping("/courses/add")
    public void addCourse() {

    }

    @PostMapping("/courses/remove")
    public void removeCourse() {

    }
}

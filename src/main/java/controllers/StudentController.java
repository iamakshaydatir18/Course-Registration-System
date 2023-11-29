package controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
    @GetMapping("/home")
    public void getStudentHome() {

    }

    @PostMapping("/home")
    public void registerForCourse() {

    }
}

package edu.neu.csye6200.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.Gson;


import edu.neu.csye6200.models.Student;
import edu.neu.csye6200.services.StudentService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
    @GetMapping("/student/{studentId}")
    public String getStudentCourses(@PathVariable int studentId) {
        
        StudentService obj = new StudentService();
        Student student = obj.findById(studentId);
        if (student != null) {
            Gson gson = new Gson();
            String json = gson.toJson(student);
            return(json);
        } else {
           
            System.out.println("Student not found with ID: " + studentId);
        }
        return "";
    }
    @PostMapping("/student/register")
    public void registerForCourse() {

    }

    @PostMapping("/student/drop")
    public void dropCourse() {

    }
}

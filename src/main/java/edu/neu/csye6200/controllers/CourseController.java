package edu.neu.csye6200.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import com.google.gson.Gson;

import edu.neu.csye6200.models.Course;
import edu.neu.csye6200.models.CourseFactory;
import edu.neu.csye6200.services.CourseDbService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {
    @GetMapping("/courses")
    public String getCourseList() {

        CourseDbService obj = new CourseDbService();
        Gson gson = new Gson();
        String json = gson.toJson(obj.readFromFile());
        return(json);
    }
    

    @PostMapping("/courses/add")
    public void addCourse() {

    }

    @DeleteMapping("/courses/remove")
    public void removeCourse() {

    }
}

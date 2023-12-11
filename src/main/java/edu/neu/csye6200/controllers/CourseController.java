package edu.neu.csye6200.controllers;

import edu.neu.csye6200.models.Course;
import edu.neu.csye6200.models.CourseServiceFactory;
import edu.neu.csye6200.models.Professor;
import org.springframework.web.bind.annotation.*;
import com.google.gson.Gson;

import edu.neu.csye6200.services.CourseDbService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {
    @GetMapping("/courses")
    public String getCourseList() {

        CourseDbService obj = new CourseDbService();
        Gson gson = new Gson();
        return(gson.toJson(obj.readFromFile()));
    }
    

    @PostMapping("/courses/add")
    public void addCourse(@RequestBody Course newCourse, @RequestBody Professor professor) {
        System.out.println(professor.getName());
        CourseServiceFactory.COURSE_SERVICE.getObject().addCourse(newCourse);
    }

    @DeleteMapping("/courses/remove")
    public void removeCourse() {

    }
}

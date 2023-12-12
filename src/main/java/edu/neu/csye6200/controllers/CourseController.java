package edu.neu.csye6200.controllers;

import edu.neu.csye6200.models.Course;
import edu.neu.csye6200.models.CourseProfessorDto;
import edu.neu.csye6200.models.CourseServiceFactory;
import edu.neu.csye6200.models.Professor;
import org.springframework.web.bind.annotation.*;
import com.google.gson.Gson;

import edu.neu.csye6200.services.CourseDbService;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {
    @GetMapping("/courses")
    public String getCourseList() {

        CourseDbService obj = new CourseDbService();
        Gson gson = new Gson();
        List<Course> courses = obj.readFromFile().stream().sorted(Comparator.comparingInt(Course::getCourseId)).collect(Collectors.toList());
        return(gson.toJson(courses));
    }
    

    @PostMapping("/courses/add")
    public String addCourse(@RequestBody CourseProfessorDto courseDto) {
        CourseServiceFactory.COURSE_SERVICE.getObject().addCourse(courseDto);

        CourseDbService obj = new CourseDbService();
        Gson gson = new Gson();
        return(gson.toJson(obj.readFromFile()));
    }

    @PostMapping("/courses/{courseId}/remove")
    public String removeCourse(@PathVariable String courseId) {
        CourseServiceFactory.COURSE_SERVICE.getObject().removeCourse(courseId);

        CourseDbService obj = new CourseDbService();
        Gson gson = new Gson();
        return(gson.toJson(obj.readFromFile()));
    }
}

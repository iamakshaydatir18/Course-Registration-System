package edu.neu.csye6200.services;

import java.util.List;
import edu.neu.csye6200.models.Course;
import edu.neu.csye6200.models.CourseFactory;
import java.util.Iterator;

public class AdminService {
    public boolean addminLogin(int id,String password){
        if(id == 1001 && password == "pasword")
            return true;
        return false;
    }

    public void deleteCourse(int courseId) {
        CourseDbService courseDbService = new CourseDbService();
        List<Course> coursesList = courseDbService.readFromFile();
        
        for (Iterator<Course> iterator = coursesList.iterator(); iterator.hasNext();) {
            Course course = iterator.next();
            if (course.getCourseId() == courseId) {
                iterator.remove();
            }
        }
        courseDbService.writeToFile(coursesList);
    }

    public void createCourse(int courseId,String courseName, String courseDescription, int courseCredit, String instructorName, int instructorId) {
        CourseDbService courseDbService = new CourseDbService();
        List<Course> coursesList = courseDbService.readFromFile();
        CourseFactory instance = CourseFactory.getInstance();
        Course newCourse = instance.createCourse();

        newCourse.setCourseCredit(courseCredit);
        newCourse.setCourseDescription(courseDescription);
        newCourse.setCourseId(courseId);
        newCourse.setCourseName(courseName);
        newCourse.setProfessor(instructorId, instructorName);

        courseDbService.writeToFile(coursesList);
    }

}

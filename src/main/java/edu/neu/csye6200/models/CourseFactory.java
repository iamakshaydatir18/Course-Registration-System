package edu.neu.csye6200.models;

public class CourseFactory {
    private static final CourseFactory instance = new CourseFactory();

    private CourseFactory() {}

    public static synchronized CourseFactory getInstance() {
        return instance;
    }

    public Course createCourse(){
        return new Course();
    }
}

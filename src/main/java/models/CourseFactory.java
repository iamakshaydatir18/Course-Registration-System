package models;

public class CourseFactory {
    private static final CourseFactory instance = new CourseFactory();

    private CourseFactory() {}

    public static synchronized CourseFactory getInstance() {
        return instance;
    }
}

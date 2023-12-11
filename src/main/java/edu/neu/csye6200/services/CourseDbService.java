package edu.neu.csye6200.services;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import edu.neu.csye6200.models.Course;
import edu.neu.csye6200.models.CourseFactory;

public class CourseDbService implements DbService<Course> {

    public static final DbService<Course> Instance = new CourseDbService();

    public List<Course> readFromFile() {
        String filename = "src/main/java/edu/neu/csye6200/Data/CoursesList.csv";
        ArrayList<Course> coursesRoasterList = new ArrayList<Course>();
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String inputLine = null;
            while ((inputLine = reader.readLine()) != null) {
                String[] fields = inputLine.split(",");
                int courseid = Integer.parseInt(fields[0]);
                String name = fields[1];
                String coursedesc = fields[2];
                int credit = Integer.parseInt(fields[3]);
                int profId = Integer.parseInt(fields[5]);
                String instructor = fields[4];
                // Create Course
                CourseFactory instance = CourseFactory.getInstance();
                Course course = (Course) (instance.createCourse());
                course.setCourseName(name);
                course.setCourseId(courseid);
                course.setCourseCredit(credit);
                course.setProfessor(profId,instructor);
                course.setCourseDescription(coursedesc);
                coursesRoasterList.add(course);
            }
        } catch (IOException e) {
            System.err.println("Error reading from file: " + e.getMessage());
        }
        return coursesRoasterList;
    }

    public void writeToFile(List<Course> coursesRoasterList) {
        String filename = "src/main/java/edu/neu/csye6200/Data/CoursesList.csv";
        try (FileWriter writer = new FileWriter(filename)) {
            for (Course course : coursesRoasterList) {
                writer.write(courseToCsvString(course));
            }
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
    }

    private static String courseToCsvString(Course course) {
        return String.format("%d,%s,%s,%d,%s\n", course.getCourseId(), course.getCourseName(),
                course.getCourseDescription(), course.getCourseCredit(), course.getProfessor());
    }
}

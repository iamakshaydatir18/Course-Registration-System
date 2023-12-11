package edu.neu.csye6200.services;

import java.util.List;
import java.util.ArrayList;


import edu.neu.csye6200.models.Student;

public class CourseService {
    public void registerCourse(int sid, ArrayList<Integer> courses) {
        List<Student> studentRoasterList = StudentDbService.readFromFile();
        for (Student student : studentRoasterList) {
            if (student.getId() == sid) {
                for (int c : courses) {
                    student.addCourse(c);
                }
            } else {
                System.out.println("Student not Found!");
            }
        }

        StudentDbService.writeToFile(studentRoasterList);
        
    }


    public void dropCourse(int sid, int course) {
        List<Student> studentRoasterList = StudentDbService.readFromFile();
        for (Student student : studentRoasterList) {
            if (student.getId() == sid) {
                student.removeCourse(course);
            } else {
                System.out.println("Student not Found!");
            }
        }
        StudentDbService.writeToFile(studentRoasterList);
    }
    

}

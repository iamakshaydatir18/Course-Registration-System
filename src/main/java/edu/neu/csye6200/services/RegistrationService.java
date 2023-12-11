package edu.neu.csye6200.services;

import edu.neu.csye6200.models.Student;

import java.util.ArrayList;
import java.util.List;

public class RegistrationService {
    public void registerStudentForCourse(int studentId, ArrayList<Integer> courseIds) {
        List<Student> studentRoasterList = StudentDbService.Instance.readFromFile();
        for (Student student : studentRoasterList) {
            if (student.getId() == studentId) {
                for (int c : courseIds) {
                    student.addCourse(c);
                }
            } else {
                System.out.println("Student not Found!");
            }
        }
        StudentDbService.Instance.writeToFile(studentRoasterList);
    }

    public void dropCourse(int studentId, int courseId) {
        List<Student> studentRoasterList = StudentDbService.Instance.readFromFile();
        for (Student student : studentRoasterList) {
            if (student.getId() == studentId) {
                student.removeCourse(courseId);
            } else {
                System.out.println("Student not Found!");
            }
        }
        StudentDbService.Instance.writeToFile(studentRoasterList);
    }
}

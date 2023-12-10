package edu.neu.csye6200.services;

import edu.neu.csye6200.models.Student;

import java.util.List;

public class RegistrationService {
    public void registerNewStudent(int studentId, String studentName, String password) {
        List<Student> studentRoasterList = StudentDbService.FileUtility.readFromFile();
        Student newStudent = new Student();
        newStudent.setId(studentId);
        newStudent.setName(studentName);
        newStudent.setPassword(password);

        studentRoasterList.add(newStudent);

        StudentDbService.FileUtility.writeToFile(studentRoasterList);
    }
}

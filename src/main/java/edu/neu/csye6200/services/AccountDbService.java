package edu.neu.csye6200.services;

import edu.neu.csye6200.models.Student;

import java.util.List;

public class AccountDbService implements DbService {
    
    public boolean authenticate(int studentId, String password) {
        List<Student> studentRoasterList = StudentDbService.readFromFile();
        for (Student student : studentRoasterList) {
            if (student.getId() == studentId && student.getPassword().equals(password)) {
                return true;
            }
        }
        return false;
    }
}

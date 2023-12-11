package edu.neu.csye6200.services;
import java.util.ArrayList;
import java.util.List;

import edu.neu.csye6200.models.Student;

public class StudentService {
    public Student findById(int id){
        List<Student> studentRoasterList = StudentDbService.readFromFile();
        for(Student student: studentRoasterList){
            if (student.getId() == id){
                return student;
            }
        }

        return null;
    }
}

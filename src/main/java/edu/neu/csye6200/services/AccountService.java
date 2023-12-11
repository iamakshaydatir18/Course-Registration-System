package edu.neu.csye6200.services;

import edu.neu.csye6200.models.Student;
import edu.neu.csye6200.models.StudentFactory;

import java.util.List;
import java.util.Optional;

public class AccountService {
    public boolean registerNewStudent(String studentId, String studentName, String password) {
        List<Student> studentList = StudentDbService.Instance.readFromFile();

        Optional<Student> studentOptional = studentList.stream().filter(v -> v.getId() == parseStringToInt(studentId)).findFirst();

        if (studentOptional.isPresent()) {
            return false;
        }

        Student newStudent = createStudent(studentId, studentName, password);

        studentList.add(newStudent);
        StudentDbService.Instance.writeToFile(studentList);

        return true;
    }

    public boolean authenticateUser(String studentId, String password) {
        int id = parseStringToInt(studentId);
        List<Student> studentList = StudentDbService.Instance.readFromFile();
        Optional<Student> studentOptional = studentList.stream().filter(v -> v.getId() == id).findFirst();

        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            return checkPassword(student, password);
        } else {
            return false;
        }
    }

    private Student createStudent(String studentId, String studentName, String password) {
        Student newStudent = (Student) StudentFactory.getInstance().createUser();
        newStudent.setId(parseStringToInt(studentId));
        newStudent.setName(studentName);
        newStudent.setPassword(password);

        return newStudent;
    }

    private boolean checkPassword(Student student, String inputPassword) {
        return student.getPassword().equals(inputPassword);
    }

    private int parseStringToInt(String s) {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException ex) {
            System.out.println("Error while parsing String to int");
            throw ex;
        }
    }
}

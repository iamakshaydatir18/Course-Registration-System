package edu.neu.csye6200.services;
import java.util.List;
import java.util.Optional;

import edu.neu.csye6200.models.Student;

public class StudentService {
    public Student findById(int studentId){
        List<Student> studentList = StudentDbService.Instance.readFromFile();

        for(Student student : studentList){
            if (student.getId() == studentId){
                return student;
            }
        }

        return null;
    }

    public void registerForCourse(int studentId, int courseId) {
        List<Student> studentList = StudentDbService.Instance.readFromFile();
        Optional<Student> studentOptional = studentList.stream().filter(v -> v.getId() == studentId).findFirst();

        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            Optional<Integer> courseOptional = student.getCourses().stream().filter(v -> v == courseId).findFirst();

            if (courseOptional.isPresent()) { return; }

            student.addCourse(courseId);
            StudentDbService.Instance.writeToFile(studentList);
        }
    }

    public void dropCourse(int studentId, int courseId) {
        List<Student> studentList = StudentDbService.Instance.readFromFile();
        Optional<Student> studentOptional = studentList.stream().filter(v -> v.getId() == studentId).findFirst();

        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            Optional<Integer> courseOptional = student.getCourses().stream().filter(v -> v == courseId).findFirst();

            if (courseOptional.isEmpty()) { return; }

            student.removeCourse(courseId);
            StudentDbService.Instance.writeToFile(studentList);
        }
    }
}

package edu.neu.csye6200.models;

public class Course {
    int courseId;
    String courseName;
    String courseDescription;
    int courseCredit;
    Professor instructor;

    Course(){}

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }

    public int getCourseCredit() {
        return courseCredit;
    }

    public void setCourseCredit(int courseCredit) {
        this.courseCredit = courseCredit;
    }

    public Professor getProfessor(){
        return instructor;
    }

    public void setProfessor(int profId, String name,int courseId){
        ProfessorFactory instance = ProfessorFactory.getInstance();
        instructor = (Professor)(instance.createUser());
        instructor.setCourseId(courseId);
        instructor.setId(profId);
        instructor.setName(name);
    }
}

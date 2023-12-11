package edu.neu.csye6200.models;

public class CourseProfessorDto {
    int courseId;
    String courseName;
    String courseDescription;
    int courseCredit;
    String professorName;
    int professorId;

    public CourseProfessorDto() {}

    public CourseProfessorDto(Course course) {
        this.courseId = course.courseId;
        this.courseCredit = course.courseCredit;
        this.courseName = course.courseName;
        this.courseDescription = course.courseDescription;
        this.professorId = course.getProfessor().getId();
        this.professorName = course.getProfessor().getName();
    }

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

    public String getProfessorName() {
        return professorName;
    }

    public void setProfessorName(String professorName) {
        this.professorName = professorName;
    }

    public int getProfessorId() {
        return professorId;
    }

    public void setProfessorId(int professorId) {
        this.professorId = professorId;
    }
}

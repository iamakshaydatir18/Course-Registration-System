package edu.neu.csye6200.models;

import java.util.ArrayList;

public class Student extends User {
   
    String password;
    ArrayList<Integer> courseList = new ArrayList<>();

    public Student() {}

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public void addCourse(int x){
        courseList.add(x);
    }

    public ArrayList<Integer> getCourses(){
        return courseList;
    }

    public void removeCourse(int x){
        courseList.remove(Integer.valueOf(x));
    }
}

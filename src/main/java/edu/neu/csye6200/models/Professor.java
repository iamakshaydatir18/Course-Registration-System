package edu.neu.csye6200.models;

public class Professor extends User {
    public Professor() {}
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(this.name).append(",");
        sb.append(this.id);
        return sb.toString();
    }
}

package edu.neu.csye6200.models;

public class Professor extends User {
    private String password;

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
    public String getPassword() { return this.password; }
    public void setPassword(String password) { this.password = password; }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(this.name).append(",");
        sb.append(this.id);
        return sb.toString();
    }
}

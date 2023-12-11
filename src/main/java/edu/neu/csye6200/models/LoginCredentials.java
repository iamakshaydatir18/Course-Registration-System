package edu.neu.csye6200.models;

public class LoginCredentials {
    private String id;
    private String password;

    public LoginCredentials() {
    }

    public LoginCredentials(String id, String password) {
        this.id = id;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

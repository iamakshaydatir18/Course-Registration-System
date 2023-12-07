package models;

public abstract class User {
    String name;
    int id;
    
    public User(){}

    public abstract String getName();
    public abstract void setName(String name);
    public abstract int getId();
    public abstract void setId(int id);
}

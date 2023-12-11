package edu.neu.csye6200.models;

public class StudentFactory extends AbstractUserFactory {
    private static StudentFactory instance;

    private StudentFactory() {}

    public static StudentFactory getInstance() {
        if (instance == null) {
            synchronized (StudentFactory.class){
                instance = new StudentFactory();
            }
        }
        return instance;
    }

    public User createUser() {
        return new Student();
    }
}

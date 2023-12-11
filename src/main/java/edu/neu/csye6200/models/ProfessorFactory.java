package edu.neu.csye6200.models;

public class ProfessorFactory extends AbstractUserFactory{//eager singleton implementation
    private static ProfessorFactory instance = new ProfessorFactory();
    private ProfessorFactory() {}

    public static synchronized ProfessorFactory getInstance() {
        return instance;
    }

    public User createUser() {
        return new Professor();
    }
}

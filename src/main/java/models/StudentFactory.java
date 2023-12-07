package models;

public class StudentFactory extends AbstractUserFactory {//lazy singleton implementation
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

package edu.neu.csye6200.models;

import edu.neu.csye6200.services.StudentService;

public enum StudentServiceFactory {
    STUDENT_SERVICE {
        @Override
        public StudentService getObject() {
            return new StudentService();
        }
    };

    private StudentServiceFactory() {}

    public abstract StudentService getObject();
}

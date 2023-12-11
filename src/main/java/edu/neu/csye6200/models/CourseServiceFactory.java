package edu.neu.csye6200.models;

import edu.neu.csye6200.services.CourseService;

public enum CourseServiceFactory {
    COURSE_SERVICE {
        @Override
        public CourseService getObject() {
            return new CourseService();
        }
    };

    private CourseServiceFactory() {}

    public abstract CourseService getObject();
}

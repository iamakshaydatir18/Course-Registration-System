package edu.neu.csye6200.models;

import edu.neu.csye6200.services.AdminService;

public enum AdminServiceFactory {
    ADMIN_SERVICE {
        @Override
        public AdminService getObject() {
            return new AdminService();
        }
    };

    private AdminServiceFactory() {}

    public abstract AdminService getObject();
}

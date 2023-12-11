package edu.neu.csye6200.models;

import edu.neu.csye6200.services.AccountService;

public enum AccountServiceFactory {
    ACCOUNT_SERVICE {
        @Override
        public AccountService getObject() {
            return new AccountService();
        }
    };

    private AccountServiceFactory() {}

    public abstract AccountService getObject();
}

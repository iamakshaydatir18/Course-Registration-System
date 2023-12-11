package edu.neu.csye6200.controllers;

import edu.neu.csye6200.models.AccountServiceFactory;
import edu.neu.csye6200.models.LoginCredentials;
import edu.neu.csye6200.services.AccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginCredentials loginRequest) {
        String studentId = loginRequest.getId();
        String password = loginRequest.getPassword();

        AccountService accountService = AccountServiceFactory.ACCOUNT_SERVICE.getObject();
        if (accountService.authenticateUser(studentId, password)) {
            return ResponseEntity.ok().body("User authenticated successfully");
        }

        return ResponseEntity.status(401).body("Unauthorized");
    }
}

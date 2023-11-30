package controllers;

import models.LoginCredentials;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginCredentials credentials) {
        return ResponseEntity.ok().body("User authenticated successfully");
    }
}

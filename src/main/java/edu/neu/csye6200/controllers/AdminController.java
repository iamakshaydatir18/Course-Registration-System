package edu.neu.csye6200.controllers;

import edu.neu.csye6200.models.AdminServiceFactory;
import edu.neu.csye6200.models.LoginCredentials;
import edu.neu.csye6200.services.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
    @PostMapping("/admin/login")
    public ResponseEntity<?> login(@RequestBody LoginCredentials loginRequest) {
        String adminId = loginRequest.getId();
        String password = loginRequest.getPassword();

        AdminService adminService = AdminServiceFactory.ADMIN_SERVICE.getObject();
        if (adminService.authenticateAdmin(adminId, password)) {
            return ResponseEntity.ok().body("User authenticated successfully");
        }

        return ResponseEntity.status(401).body("Unauthorized");
    }
}

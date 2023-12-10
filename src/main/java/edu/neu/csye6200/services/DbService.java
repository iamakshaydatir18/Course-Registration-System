package edu.neu.csye6200.services;

public interface DbService {
    boolean authenticate(int studentId, String password);
}

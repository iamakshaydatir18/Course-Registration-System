package edu.neu.csye6200.services;

import java.util.List;
import edu.neu.csye6200.models.Professor;

import java.util.Optional;

public class AdminService {
    public boolean authenticateAdmin(String professorId, String password) {
        int id = parseStringToInt(professorId);
        List<Professor> professorList = AdminDbService.Instance.readFromFile();
        Optional<Professor> professorOptional = professorList.stream().filter(v -> v.getId() == id).findFirst();

        if (professorOptional.isPresent()) {
            Professor professor = professorOptional.get();
            return checkPassword(professor, password);
        } else {
            return false;
        }
    }

    private boolean checkPassword(Professor professor, String inputPassword) {
        return professor.getPassword().equals(inputPassword);
    }

    private int parseStringToInt(String s) {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException ex) {
            System.out.println("Error while parsing String to int");
            throw ex;
        }
    }
}

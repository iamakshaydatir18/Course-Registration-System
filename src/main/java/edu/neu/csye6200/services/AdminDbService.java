package edu.neu.csye6200.services;

import edu.neu.csye6200.models.*;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AdminDbService implements DbService<Professor> {
    public static final DbService<Professor> Instance = new AdminDbService();

    public synchronized List<Professor> readFromFile() {
        String filename = "src/main/java/edu/neu/csye6200/Data/ProfessorList.csv";
        List<Professor> professorList = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String inputLine = null;
            while ((inputLine = reader.readLine()) != null) {
                String[] fields = inputLine.split(",");
                int ID = Integer.parseInt(fields[0]);
                String name = fields[1];
                String password = fields[2];

                ProfessorFactory instance = ProfessorFactory.getInstance();
                Professor professor = (Professor) (instance.createUser());
                professor.setId(ID);
                professor.setName(name);
                professor.setPassword(password);

                professorList.add(professor);
            }
        } catch (IOException e) {
            System.err.println("Error reading from file: " + e.getMessage());
        }
        return professorList;
    }

    public synchronized void writeToFile(List<Professor> professorList) {
        String filename = "src/main/java/edu/neu/csye6200/Data/ProfessorList.csv";
        try (FileWriter writer = new FileWriter(filename)) {
            for (Professor professor : professorList) {
                writer.write(studentToCsvString(professor));
            }
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
    }

    private static String studentToCsvString(Professor professor) {
        return String.format("%d,%s,%s\n", professor.getId(), professor.getName(), professor.getPassword());
    }
}

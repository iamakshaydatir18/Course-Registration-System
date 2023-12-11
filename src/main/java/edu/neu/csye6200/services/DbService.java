package edu.neu.csye6200.services;

import java.util.List;

public interface DbService <T> {
    public List<T> readFromFile();

    public void writeToFile(List<T> list);
}

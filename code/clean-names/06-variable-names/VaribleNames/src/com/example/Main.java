package com.example;

import java.util.Arrays;
import java.util.List;
import java.util.function.BiFunction;

public class Main {
    public static void main(String[] args) {
        // prefer singular nouns for primitive types and object instances
        String name = "Alma";
        Performer performer = new Performer(name);

        // use plural nouns for arrays and other collections
        String names[] = {"Alex", "Ali", "Aesop"};
        List<Integer> years = Arrays.asList(1980, 1999, 2003, 2010);

        // avoid verbs for variables that store primitive types
        int perform = 12;
        boolean create = false;

        // instead make them nouns
        int performanceCode = 12;
        boolean creationEnabled = false;

        // follow rules for method and function names for variables that
        // store lambda functions and closures
        BiFunction<Integer, Integer, Integer> add = (left, right) -> {
            return left + right;
        };

        int result = add(1, 2);

        // this is true even when the closure is just being passed as a
        // parameter to a method or constructor
        BiFunction<Integer, Integer, Integer> adder = (left, right) -> {
            return left + right;
        };
        Performer addedPerformer = new Performer("The Adder", adder);


        // avoid single letter variable names
        int t = 12;
        int i = 8;

        // instead spell them out
        int testCode = 12;
        int index = 8;

        // avoid confusing acronyms and abbreviations
        String dbsqlSelAllNames = "select * from names;";

        // instead separate acronyms and spell out abbreviations
        String dbSqlSelectAllNames = "select * from names;";

        // avoid complicated prefixes
        final String f_strFirstName = "Jefferson";
        String firstName = "Jefferson";

        // avoid using the type name as a suffix
        String lastNameString = "Amaya";
        String lastName = "Amaya";
    }
}

class Performer {
    public Performer(String name) {
    }

    public Performer(
        String name,
        BiFunction<Integer, Integer, Integer> accumulator) {
    }
}

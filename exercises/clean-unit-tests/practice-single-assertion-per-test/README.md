# Predicate Methods Exercise

The goal of this exercise is to practice refactoring a test method that has 
more than one assertion statement into several test methods, each with a 
single assertion statement. The test method that needs refactoring can be 
located in `test/repository.spec.js`.

## Using Docker as a Development Environment

To quickly get a development environment running for working on this exercise,
run the following command from the project directory:

```bash
docker run --rm -it -u node -v $PWD:/code -w /code node:18 bash
```

From there, you can run `npm install` followed by `npm test` to run the tests 
in this project.

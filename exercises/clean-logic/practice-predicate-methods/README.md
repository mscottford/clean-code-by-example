# Predicate Methods Exercise

The goal of this exercise is to practice refactoring complex if statements to 
rely on predicate methods. There are several if statements in `src/index.js` 
that can be refactored to make use of predicate methods.

The tests in `__tests__/index.spec.js` can be used to ensure that your 
refactoring efforts do not introduce any errors. The tests can be run with 
`yarn test`.

## Using Docker as a Development Environment

To quickly get a development environment running for working on this exercise,
run the following command from the project directory:

```bash
docker run --rm -it -u node -v $PWD:/code -w /code node:18 bash
```

From there, you can run `yarn install` followed by `yarn test` to run the 
tests in this project.

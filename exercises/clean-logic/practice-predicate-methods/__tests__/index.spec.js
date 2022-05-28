import Shirt from "../src";

describe("t-shirt class", () => {
  test.each`
    size      | color      | design       | expectedPrice
    ${'XS'}   | ${'white'} | ${'solid'}   | ${24.99}
    ${'S'}    | ${'white'} | ${'solid'}   | ${19.99}
    ${'M'}    | ${'white'} | ${'solid'}   | ${19.99}
    ${'L'}    | ${'white'} | ${'solid'}   | ${19.99}
    ${'XL'}   | ${'white'} | ${'solid'}   | ${24.99}
    ${'XXL'}  | ${'white'} | ${'solid'}   | ${24.99}
    ${'XS'}   | ${'red'}   | ${'solid'}   | ${24.99}
    ${'S'}    | ${'red'}   | ${'solid'}   | ${24.99}
    ${'M'}    | ${'red'}   | ${'solid'}   | ${24.99}
    ${'L'}    | ${'red'}   | ${'solid'}   | ${24.99}
    ${'XL'}   | ${'red'}   | ${'solid'}   | ${24.99}
    ${'XXL'}  | ${'red'}   | ${'solid'}   | ${24.99}
    ${'XS'}   | ${'green'} | ${'solid'}   | ${24.99}
    ${'S'}    | ${'green'} | ${'solid'}   | ${24.99}
    ${'M'}    | ${'green'} | ${'solid'}   | ${24.99}
    ${'L'}    | ${'green'} | ${'solid'}   | ${24.99}
    ${'XL'}   | ${'green'} | ${'solid'}   | ${24.99}
    ${'XXL'}  | ${'green'} | ${'solid'}   | ${24.99}
    ${'XS'}   | ${'grey'}  | ${'solid'}   | ${24.99}
    ${'S'}    | ${'grey'}  | ${'solid'}   | ${19.99}
    ${'M'}    | ${'grey'}  | ${'solid'}   | ${19.99}
    ${'L'}    | ${'grey'}  | ${'solid'}   | ${19.99}
    ${'XL'}   | ${'grey'}  | ${'solid'}   | ${24.99}
    ${'XXL'}  | ${'grey'}  | ${'solid'}   | ${24.99}
    ${'XS'}   | ${'black'} | ${'solid'}   | ${24.99}
    ${'S'}    | ${'black'} | ${'solid'}   | ${19.99}
    ${'M'}    | ${'black'} | ${'solid'}   | ${19.99}
    ${'L'}    | ${'black'} | ${'solid'}   | ${19.99}
    ${'XL'}   | ${'black'} | ${'solid'}   | ${24.99}
    ${'XXL'}  | ${'black'} | ${'solid'}   | ${24.99}
    ${'XS'}   | ${'white'} | ${'stripes'} | ${24.99}
    ${'S'}    | ${'white'} | ${'stripes'} | ${19.99}
    ${'M'}    | ${'white'} | ${'stripes'} | ${19.99}
    ${'L'}    | ${'white'} | ${'stripes'} | ${19.99}
    ${'XL'}   | ${'white'} | ${'stripes'} | ${24.99}
    ${'XXL'}  | ${'white'} | ${'stripes'} | ${24.99}
    ${'XS'}   | ${'red'}   | ${'stripes'} | ${24.99}
    ${'S'}    | ${'red'}   | ${'stripes'} | ${24.99}
    ${'M'}    | ${'red'}   | ${'stripes'} | ${24.99}
    ${'L'}    | ${'red'}   | ${'stripes'} | ${24.99}
    ${'XL'}   | ${'red'}   | ${'stripes'} | ${24.99}
    ${'XXL'}  | ${'red'}   | ${'stripes'} | ${24.99}
    ${'XS'}   | ${'green'} | ${'stripes'} | ${24.99}
    ${'S'}    | ${'green'} | ${'stripes'} | ${24.99}
    ${'M'}    | ${'green'} | ${'stripes'} | ${24.99}
    ${'L'}    | ${'green'} | ${'stripes'} | ${24.99}
    ${'XL'}   | ${'green'} | ${'stripes'} | ${24.99}
    ${'XXL'}  | ${'green'} | ${'stripes'} | ${24.99}
    ${'XS'}   | ${'grey'}  | ${'stripes'} | ${24.99}
    ${'S'}    | ${'grey'}  | ${'stripes'} | ${19.99}
    ${'M'}    | ${'grey'}  | ${'stripes'} | ${19.99}
    ${'L'}    | ${'grey'}  | ${'stripes'} | ${19.99}
    ${'XL'}   | ${'grey'}  | ${'stripes'} | ${24.99}
    ${'XXL'}  | ${'grey'}  | ${'stripes'} | ${24.99}
    ${'XS'}   | ${'black'} | ${'stripes'} | ${24.99}
    ${'S'}    | ${'black'} | ${'stripes'} | ${19.99}
    ${'M'}    | ${'black'} | ${'stripes'} | ${19.99}
    ${'L'}    | ${'black'} | ${'stripes'} | ${19.99}
    ${'XL'}   | ${'black'} | ${'stripes'} | ${24.99}
    ${'XXL'}  | ${'black'} | ${'stripes'} | ${24.99}
    ${'XS'}   | ${'white'} | ${'plaid'}   | ${24.99}
    ${'S'}    | ${'white'} | ${'plaid'}   | ${24.99}
    ${'M'}    | ${'white'} | ${'plaid'}   | ${24.99}
    ${'L'}    | ${'white'} | ${'plaid'}   | ${24.99}
    ${'XL'}   | ${'white'} | ${'plaid'}   | ${24.99}
    ${'XXL'}  | ${'white'} | ${'plaid'}   | ${24.99}
    ${'XS'}   | ${'red'}   | ${'plaid'}   | ${24.99}
    ${'S'}    | ${'red'}   | ${'plaid'}   | ${24.99}
    ${'M'}    | ${'red'}   | ${'plaid'}   | ${24.99}
    ${'L'}    | ${'red'}   | ${'plaid'}   | ${24.99}
    ${'XL'}   | ${'red'}   | ${'plaid'}   | ${24.99}
    ${'XXL'}  | ${'red'}   | ${'plaid'}   | ${24.99}
    ${'XS'}   | ${'green'} | ${'plaid'}   | ${24.99}
    ${'S'}    | ${'green'} | ${'plaid'}   | ${24.99}
    ${'M'}    | ${'green'} | ${'plaid'}   | ${24.99}
    ${'L'}    | ${'green'} | ${'plaid'}   | ${24.99}
    ${'XL'}   | ${'green'} | ${'plaid'}   | ${24.99}
    ${'XXL'}  | ${'green'} | ${'plaid'}   | ${24.99}
    ${'XS'}   | ${'grey'}  | ${'plaid'}   | ${24.99}
    ${'S'}    | ${'grey'}  | ${'plaid'}   | ${24.99}
    ${'M'}    | ${'grey'}  | ${'plaid'}   | ${24.99}
    ${'L'}    | ${'grey'}  | ${'plaid'}   | ${24.99}
    ${'XL'}   | ${'grey'}  | ${'plaid'}   | ${24.99}
    ${'XXL'}  | ${'grey'}  | ${'plaid'}   | ${24.99}
    ${'XS'}   | ${'black'} | ${'plaid'}   | ${24.99}
    ${'S'}    | ${'black'} | ${'plaid'}   | ${24.99}
    ${'M'}    | ${'black'} | ${'plaid'}   | ${24.99}
    ${'L'}    | ${'black'} | ${'plaid'}   | ${24.99}
    ${'XL'}   | ${'black'} | ${'plaid'}   | ${24.99}
    ${'XXL'}  | ${'black'} | ${'plaid'}   | ${24.99}
    ${'XS'}   | ${'white'} | ${'graphic'} | ${24.99}
    ${'S'}    | ${'white'} | ${'graphic'} | ${24.99}
    ${'M'}    | ${'white'} | ${'graphic'} | ${24.99}
    ${'L'}    | ${'white'} | ${'graphic'} | ${24.99}
    ${'XL'}   | ${'white'} | ${'graphic'} | ${24.99}
    ${'XXL'}  | ${'white'} | ${'graphic'} | ${24.99}
    ${'XS'}   | ${'red'}   | ${'graphic'} | ${24.99}
    ${'S'}    | ${'red'}   | ${'graphic'} | ${24.99}
    ${'M'}    | ${'red'}   | ${'graphic'} | ${24.99}
    ${'L'}    | ${'red'}   | ${'graphic'} | ${24.99}
    ${'XL'}   | ${'red'}   | ${'graphic'} | ${24.99}
    ${'XXL'}  | ${'red'}   | ${'graphic'} | ${24.99}
    ${'XS'}   | ${'green'} | ${'graphic'} | ${24.99}
    ${'S'}    | ${'green'} | ${'graphic'} | ${24.99}
    ${'M'}    | ${'green'} | ${'graphic'} | ${24.99}
    ${'L'}    | ${'green'} | ${'graphic'} | ${24.99}
    ${'XL'}   | ${'green'} | ${'graphic'} | ${24.99}
    ${'XXL'}  | ${'green'} | ${'graphic'} | ${24.99}
    ${'XS'}   | ${'grey'}  | ${'graphic'} | ${24.99}
    ${'S'}    | ${'grey'}  | ${'graphic'} | ${24.99}
    ${'M'}    | ${'grey'}  | ${'graphic'} | ${24.99}
    ${'L'}    | ${'grey'}  | ${'graphic'} | ${24.99}
    ${'XL'}   | ${'grey'}  | ${'graphic'} | ${24.99}
    ${'XXL'}  | ${'grey'}  | ${'graphic'} | ${24.99}
    ${'XS'}   | ${'black'} | ${'graphic'} | ${24.99}
    ${'S'}    | ${'black'} | ${'graphic'} | ${24.99}
    ${'M'}    | ${'black'} | ${'graphic'} | ${24.99}
    ${'L'}    | ${'black'} | ${'graphic'} | ${24.99}
    ${'XL'}   | ${'black'} | ${'graphic'} | ${24.99}
    ${'XXL'}  | ${'black'} | ${'graphic'} | ${24.99}
  `('price() returns $expectedPrice for a Shirt constructed with [$size, $color, $design]', ({size, color, design, expectedPrice}) => {
    var shirt = new Shirt(size, color, design);
    
    expect(shirt.price()).toBe(expectedPrice);
  });

  test.each`
    size   | color       | design      | exceptionMessage
    ${'Y'} | ${'white'}  | ${'solid'}  | ${"Invalid size: 'Y'"}
    ${'S'} | ${'purple'} | ${'solid'}  | ${"Invalid color: 'purple'"}
    ${'M'} | ${'white'}  | ${'argyle'} | ${"Invalid design: 'argyle'"}
  `('constructor thows $exceptionMessage when called with [$size, $color, $design]', ({ size, color, design, exceptionMessage }) => {
    expect(() => {
      new Shirt(size, color, design);
    }).toThrowError(exceptionMessage);
  });
});


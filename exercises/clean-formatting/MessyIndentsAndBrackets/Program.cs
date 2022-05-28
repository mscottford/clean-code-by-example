// The tests in this project can be run with `dotnet test`.
// This console application can be run with `dotnet run`.
// You can adjust the number of rows that it outputs with `dotnet run -- 6`,
// where `6` is the number of rows of Pascal's Triangle to output.

using MessyIndentsAndBrackets;

var triangle = new PascalsTriangle();

var rows = 10;
if (args.Length == 1)
{
    rows = int.Parse(args[0]);
}

Console.WriteLine(triangle.Generate(rows));

using NUnit.Framework;

namespace Calculator.Tests;

public class CalculatorTest
{
    private readonly Calculator _calculator = new();

    [Test]
    public void Add()
    {
        _calculator.Add(4);
        
        Assert.That(_calculator.Value, Is.EqualTo(4));
    }

    [Test]
    public void Subtract()
    {
        _calculator.Subtract(2);

        Assert.That(_calculator.Value, Is.EqualTo(2));
    }
}

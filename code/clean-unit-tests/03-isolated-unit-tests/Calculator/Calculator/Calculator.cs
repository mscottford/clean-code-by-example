namespace Calculator;

public class Calculator
{
    public Calculator()
    {
        Value = 0;
    }

    public int Value { get; set; }

    public void Add(int increment)
    {
        Value += increment;
    }

    public void Subtract(int decrement)
    {
        Value -= decrement;
    }
}

using Xunit; 

namespace MessyIndentsAndBrackets;

public class PascalsTriangleTest
{
    [Fact]
    public void OneRow()
    {
        var triangle = new PascalsTriangle();
        Assert.Equal("1", triangle.Generate(1));
    }

    [Fact]
    public void TwoRows()
    {
        var triangle = new PascalsTriangle();
        var expected =
            "  1  " + Environment.NewLine +
            "1   1";

        Assert.Equal(expected, triangle.Generate(2));
    }
    
    [Fact]
    public void ThreeRows()
    {
        var triangle = new PascalsTriangle();
        var expected =
            "    1    " + Environment.NewLine +
            "  1   1  " + Environment.NewLine +
            "1   2   1";

        Assert.Equal(expected, triangle.Generate(3));
    }

    [Fact]
    public void FourRows()
    {
        var triangle = new PascalsTriangle();
        var expected =
            "      1      " + Environment.NewLine +
            "    1   1    " + Environment.NewLine +
            "  1   2   1  " + Environment.NewLine +
            "1   3   3   1";

        Assert.Equal(expected, triangle.Generate(4));
    }
    
    [Fact]
    public void FiveRows()
    {
        var triangle = new PascalsTriangle();
        var expected =
            "        1        " + Environment.NewLine +
            "      1   1      " + Environment.NewLine +
            "    1   2   1    " + Environment.NewLine +
            "  1   3   3   1  " + Environment.NewLine +
            "1   4   6   4   1";

        Assert.Equal(expected, triangle.Generate(5));
    }

    [Fact]
    public void SixRows()
    {
        var triangle = new PascalsTriangle();
        var expected =
            "                     1                    " + Environment.NewLine +
            "                 1       1                " + Environment.NewLine +
            "             1       2       1            " + Environment.NewLine +
            "         1       3       3       1        " + Environment.NewLine +
            "     1       4       6       4       1    " + Environment.NewLine +
            " 1       5      10      10       5       1";
        
        Assert.Equal(expected, triangle.Generate(6));
    }

    [Fact]
    public void TenRows()
    {
        var triangle = new PascalsTriangle();
        var expected = 
            "                                                        1                                                      " + Environment.NewLine +
            "                                                  1           1                                                " + Environment.NewLine +
            "                                            1           2           1                                          " + Environment.NewLine +
            "                                      1           3           3           1                                    " + Environment.NewLine +
            "                                1           4           6           4           1                              " + Environment.NewLine +
            "                          1           5          10          10           5           1                        " + Environment.NewLine +
            "                    1           6          15          20          15           6           1                  " + Environment.NewLine +
            "              1           7          21          35          35          21           7           1            " + Environment.NewLine +
            "        1           8          28          56          70          56          28           8           1      " + Environment.NewLine +
            "  1           9          36          84         126         126          84          36           9           1";        
        
        Assert.Equal(expected, triangle.Generate(10));
    }

    [Fact]
    public void OneDataRow()
    {
        var triangle = new PascalsTriangle();

        var expected = new[] 
        {
            new[] { 1 }
        };
        
        Assert.Equal(expected, triangle.GenerateData(1));
    }
    
    [Fact]
    public void TwoDataRows()
    {
        var triangle = new PascalsTriangle();

        var expected = new[] 
        {
            new[] { 1 },
            new[] { 1, 1 },
        };
        
        Assert.Equal(expected, triangle.GenerateData(2));
    }

    [Fact]
    public void ThreeDataRows()
    {
        var triangle = new PascalsTriangle();

        var expected = new[] 
        {
            new[] { 1 },
            new[] { 1, 1 },
            new[] { 1, 2, 1 },
        };
        
        Assert.Equal(expected, triangle.GenerateData(3));
    }

    
    [Fact]
    public void FiveDataRows()
    {
        var triangle = new PascalsTriangle();

        var expected = new[] 
        {
            new[] { 1 },
            new[] { 1, 1 },
            new[] { 1, 2, 1 },
            new[] { 1, 3, 3, 1 },
            new[] { 1, 4, 6, 4, 1 },
        };
        
        Assert.Equal(expected, triangle.GenerateData(5));
    }

    [Fact]
    public void SixDataRows()
    {
        var triangle = new PascalsTriangle();

        var expected = new[] 
        {
            new[] { 1 },
            new[] { 1, 1 },
            new[] { 1, 2, 1 },
            new[] { 1, 3, 3, 1 },
            new[] { 1, 4, 6, 4, 1 },
            new[] { 1, 5, 10, 10, 5, 1 },
        };
        
        Assert.Equal(expected, triangle.GenerateData(6));
    }

    [Fact]
    public void TenDataRows()
    {
        var triangle = new PascalsTriangle();

        var expected = new[]
        {
            new[] { 1 },
            new[] { 1, 1 },
            new[] { 1, 2, 1 },
            new[] { 1, 3, 3, 1 },
            new[] { 1, 4, 6, 4, 1 },
            new[] { 1, 5, 10, 10, 5, 1 },
            new[] { 1, 6, 15, 20, 15, 6, 1 },
            new[] { 1, 7, 21, 35, 35, 21, 7, 1 },
            new[] { 1, 8, 28, 56, 70, 56, 28, 8, 1 },
            new[] { 1, 9, 36, 84, 126, 126, 84, 36, 9, 1 },
        };
        
        Assert.Equal(expected, triangle.GenerateData(10));
    }

    [Fact]
    public void MaxValue()
    {
        var triangle = new PascalsTriangle();
        
        var source = new[]
        {
            new[] {1},
            new[] {1, 1},
            new[] {1, 2, 1},
            new[] {1, 3, 3, 1},
            new[] {1, 4, 6, 4, 1},
            new[] {1, 5, 10, 10, 5, 1},
            new[] {1, 6, 15, 20, 15, 6, 1},
            new[] {1, 7, 21, 35, 35, 21, 7, 1},
            new[] {1, 8, 28, 56, 70, 56, 28, 8, 1},
            new[] {1, 9, 36, 84, 126, 126, 84, 36, 9, 1},
        };
        
        Assert.Equal(126, triangle.MaxValue(source));
    }

    [Fact]
    public void Digits()
    {
        var triangle = new PascalsTriangle();
        
        Assert.Equal(3, triangle.Digits(126));
    }

}

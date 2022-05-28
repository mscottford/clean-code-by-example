namespace MessyIndentsAndBrackets;

public class PascalsTriangle
{
    public string Generate(int rows) {
    var data = GenerateData(rows);

  var valueWidth = Digits(MaxValue(data));
      var spaceBefore = valueWidth * 2;
          var spaceBetween = valueWidth * 3;

    var outputRows = new List<string>();

        for (int index = 0; index < rows; index++){
	var padding = spaceBefore * (rows - index - 1);
    	var row = string.Join("".PadLeft(spaceBetween), data[index].Select(v => v.ToString().PadLeft(valueWidth)));
	    row = "".PadLeft(padding) + row + "".PadLeft(padding);
            outputRows.Add(row);
    	    }

        return string.Join(Environment.NewLine, outputRows); }

    public int[][] GenerateData(int rows){
        if (rows == 1)
        {
            return new[]
        {
                new[] {1}
        };
    }
        
	var previousRowData = GenerateData(rows - 1);
        	var previousFinalRow = previousRowData[^1];
        		var additionalRow = new int[previousFinalRow.Length + 1];

        for (var index = 0; index < previousFinalRow.Length; index++)
    {
            var leftValue = index == 0 ? 0 : previousFinalRow[index - 1];
        additionalRow[index] = leftValue + previousFinalRow[index];
    }

    additionalRow[^1] = 1;
        
        var result = new int[previousRowData.Length + 1][];
    Array.Copy(previousRowData, result, previousRowData.Length);
         result[^1] = additionalRow;
        
         return result;
     }

    public int MaxValue(int[][] rows)
{
        return rows[^1].Max();
     }

    public int Digits(int value)
{
    var result = 0;
    while (value > 0)
    {
        value /= 10;
            result++;
    }
        
    return result;
}}

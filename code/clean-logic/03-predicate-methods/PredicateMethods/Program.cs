using System;
using System.Globalization;

namespace PredicateMethods
{
    public class Program
    {
        public static void Main()
        {
            var validSentence = "This is a valid sentence.";
            var missingCapitalLetter = "this should start with a capital letter.";
            var missingPeriodAtEnd = "This should end in a period";
            var validShortCommand = "Shout!";
            var validQuestion = "Can I ask you something?";

            PrintValidationStatus(validSentence);
            PrintValidationStatus(missingCapitalLetter);
            PrintValidationStatus(missingPeriodAtEnd);
            PrintValidationStatus(validShortCommand);
            PrintValidationStatus(validQuestion);
        }

        private const string SuccessStatus = "\u2705 valid";
        private const string FailureStatus = "\u274C INVALID";

        private static void PrintValidationStatus(string input)
        {
            var status = FailureStatus;

            if (input[0] == Char.ToUpper(input[0]) && (
                input.EndsWith(".") ||
                input.EndsWith("?") ||
                input.EndsWith("!")
            ))
            {
                status = SuccessStatus;
            }

            var output = $"{status}: {input}";
            System.Console.WriteLine(output);
        }

    }
}

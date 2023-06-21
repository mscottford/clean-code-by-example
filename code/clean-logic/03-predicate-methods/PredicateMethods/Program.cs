using System;
using System.Globalization;

namespace PredicateMethods
{
    public static class Program
    {
        private const string ValidSentence = "This is a valid sentence.";
        private const string MissingCapitalLetter = "this should start with a capital letter.";
        private const string MissingPeriodAtEnd = "This should end in a period";
        private const string ValidShortCommand = "Shout!";
        private const string ValidQuestion = "Can I ask you something?";

        public static void Main()
        {
            PrintValidationStatus(ValidSentence);
            PrintValidationStatus(MissingCapitalLetter);
            PrintValidationStatus(MissingPeriodAtEnd);
            PrintValidationStatus(ValidShortCommand);
            PrintValidationStatus(ValidQuestion);
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
            Console.WriteLine(output);
        }

    }
}

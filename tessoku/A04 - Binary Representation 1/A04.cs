using System;

class Program
{
    static void Main()
    {
        int N = int.Parse(Console.ReadLine().Trim());

        var result = new List<int>();

        for (int i = 9; i >= 0; i--)
        {
            int power = (int)Math.Pow(2, i);
            int remainder = (N / power) % 2;
            result.Add(remainder);
        }

        Console.WriteLine(string.Join("", result));
    }
}
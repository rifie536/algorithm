using System;

class Program
{
    static void Main()
    {
        int N = int.Parse(Console.ReadLine().Trim());

        Console.WriteLine(CalculateAreaOfSquare(N));
    }

    static int CalculateAreaOfSquare(int num)
    {
        return num * num;
    }
}
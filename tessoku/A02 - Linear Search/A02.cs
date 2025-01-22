using System;
using System.Linq;

class Program
{
    static void Main()
    {
        string[] lines = Console.ReadLine().Trim().Split();
        int n = int.Parse(lines[0]);
        int x = int.Parse(lines[1]);

        int[] numsA = Console.ReadLine().Trim().Split().Select(int.Parse).ToArray();

        IncludeNum(numsA, x);
    }

    static void IncludeNum(int[] nums, int num)
    {
        if (nums.Contains(num))
        {
            Console.WriteLine("Yes");
        }
        else
        {
            Console.WriteLine("No");
        }
    }
}
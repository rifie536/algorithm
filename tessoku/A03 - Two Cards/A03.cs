using System;
using System.Linq;

class Program
{
    static void Main()
    {
        string[] lines = Console.ReadLine().Trim().Split();
        int N = int.Parse(lines[0]);
        int K = int.Parse(lines[1]);

        int[] numsP = Console.ReadLine().Trim().Split().Select(int.Parse).ToArray();

        int[] numsQ = Console.ReadLine().Trim().Split().Select(int.Parse).ToArray();

        string result = "No";

        foreach (int numP in numsP)
        {
            foreach (int numQ in numsQ)
            {
                if (numP + numQ == K)
                {
                    result = "Yes";
                    break;
                }
            }

            if (result == "Yes")
            {
                break;
            }
        }

        Console.WriteLine(result);
    }
}
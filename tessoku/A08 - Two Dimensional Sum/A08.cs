using System;
using System.Linq;

class Program
{
    static void Main()
    {
        string[] firstLine = Console.ReadLine().Split(' ');
        int H = int.Parse(firstLine[0]);
        int W = int.Parse(firstLine[1]);

        int[,] grid = new int[H, W];
        for (int i = 0; i < H; i++)
        {
            int[] row = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            for (int j = 0; j < W; j++)
            {
                grid[i, j] = row[j];
            }
        }

        long[,] sum = new long[H + 1, W + 1];
        for (int i = 0; i < H; i++)
        {
            for (int j = 0; j < W; j++)
            {
                sum[i + 1, j + 1] = grid[i, j] + 
                                   sum[i + 1, j] + 
                                   sum[i, j + 1] - 
                                   sum[i, j];
            }
        }

        int Q = int.Parse(Console.ReadLine());
        for (int q = 0; q < Q; q++)
        {
            int[] query = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int A = query[0], B = query[1], C = query[2], D = query[3];

            long answer = sum[C, D] - sum[A - 1, D] - sum[C, B - 1] + sum[A - 1, B - 1];
            Console.WriteLine(answer);
        }
    }
}
using System;
using System.Linq;

class Program
{
   static void Main()
   {
       int[] firstLine = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
       int N = firstLine[0];
       int Q = firstLine[1];

       int[] guests = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

       long[] cumSum = new long[N + 1];
       for (int i = 0; i < N; i++)
       {
           cumSum[i + 1] = cumSum[i] + guests[i];
       }

       for (int i = 0; i < Q; i++)
       {
           int[] range = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
           int left = range[0];
           int right = range[1];

           Console.WriteLine(cumSum[right] - cumSum[left - 1]);
       }
   }
}
using System;
using System.Linq;

class Program
{
   static void Main()
   {
       int D = int.Parse(Console.ReadLine());
       int N = int.Parse(Console.ReadLine());

       int[] imos = new int[D + 1];

       for (int i = 0; i < N; i++)
       {
           int[] input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
           int L = input[0];
           int R = input[1];

           imos[L - 1]++;
           imos[R]--;
       }

       for (int day = 0; day < D; day++)
       {
           if (day > 0)
           {
               imos[day] += imos[day - 1];
           }
           Console.WriteLine(imos[day]);
       }
   }
}
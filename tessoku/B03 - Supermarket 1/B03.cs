using System;
using System.Linq;

class Program
{
   static void Main()
   {
       int N = int.Parse(Console.ReadLine());

       int[] prices = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
       
       string result = "No";

       for (int i = 0; i < N - 2; i++)
       {
           for (int j = i + 1; j < N - 1; j++)
           {
               for (int k = j + 1; k < N; k++)
               {
                   if (prices[i] + prices[j] + prices[k] == 1000)
                   {
                       result = "Yes";
                       goto End;
                   }
               }
           }
       }

       End:
       Console.WriteLine(result);
   }
}
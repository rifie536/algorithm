using System;

class Program
{
   static void Main()
   {
       string[] input = Console.ReadLine().Split(' ');
       int N = int.Parse(input[0]);
       int K = int.Parse(input[1]);

       int count = 0;
       for (int i = 1; i <= N; i++)
       {
           for (int j = 1; j <= N; j++)
           {
               int z = K - i - j;
               if (z >= 1 && z <= N)
               {
                   count++;
               }
           }
       }

       Console.WriteLine(count);
   }
}
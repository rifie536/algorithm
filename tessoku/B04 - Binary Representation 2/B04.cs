using System;
using System.Linq;

class Program
{
   static void Main()
   {
       int[] N = Console.ReadLine().Select(c => c - '0').ToArray();

       long result = 0;
       for (int i = 0; i < N.Length; i++)
       {
           long power = (long)Math.Pow(2, N.Length - (i + 1));
           result += power * N[i];
       }

       Console.WriteLine(result);
   }
}
using System;

class Program
{
   static void Main()
   {
       string[] input = Console.ReadLine().Split(' ');
       int A = int.Parse(input[0]);
       int B = int.Parse(input[1]);

       string result = "No";
       for (int i = A; i <= B; i++)
       {
           if (100 % i == 0)
           {
               result = "Yes";
               break;
           }
       }
       Console.WriteLine(result);
   }
}
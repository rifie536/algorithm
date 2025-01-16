using System;

class Program
{
   static int Add(int num1, int num2)
   {
       return num1 + num2;
   }

   static void Main()
   {
       string[] input = Console.ReadLine().Split(' ');
       int A = int.Parse(input[0]);
       int B = int.Parse(input[1]);

       Console.WriteLine(Add(A, B));
   }
}
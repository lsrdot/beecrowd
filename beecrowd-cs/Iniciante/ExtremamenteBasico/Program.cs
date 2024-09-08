using System;

namespace ExtremamenteBasico
{
    class URI
    {
        public static void Main(string[] args)
        {
            bool sucess;
            int a = 0, b = 0;
            // int? a = int.Parse(Console.ReadLine().Trim());
            // int? b = int.Parse(Console.ReadLine().Trim());

            sucess = (int.TryParse(Console.ReadLine(), out a) && int.TryParse(Console.ReadLine(), out b));
            Console.WriteLine(sucess? $"X = {a + b}" : "error");
        }
            
    }
}
namespace SomaSimples
{
    class URI
    {
        public static void Main()
        {
            int a, b = 0;
            var sucess = int.TryParse(Console.ReadLine(), out a) && int.TryParse(Console.ReadLine(), out b);
            Console.WriteLine(sucess ? $"SOMA = {a + b}" : "Error");
        }
    }
}


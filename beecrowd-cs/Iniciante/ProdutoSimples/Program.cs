namespace ProdutoSimples
{
    class URI
    {
        public static void Main()
        {
            long a, b = 0;
            var success = long.TryParse(Console.ReadLine(), out a) && long.TryParse(Console.ReadLine(), out b);
            Console.WriteLine(success ? $"PROD = {a * b}" : "Error.");
        }
    }
}


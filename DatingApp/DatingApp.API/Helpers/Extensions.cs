using System;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static int CalculateAge(this DateTime dateTime)
        {
            int age = DateTime.Today.Year - dateTime.Year;
            if (dateTime.AddYears(age) > DateTime.Today)
            {
                age--;
            }
            Console.WriteLine(DateTime.Today.Year);
            Console.WriteLine(dateTime.Year);
            Console.WriteLine(dateTime);
            Console.WriteLine("***************************************");
            return age;
        }
    }
}
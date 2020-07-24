using System;

namespace DatingApp.API.Dtos
{
    public class PhotoForDetailledDto
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public string Description { get; set; }

        public bool IsMain { get; set; }
        public DateTime DateAdded { get; set; }

    }
}
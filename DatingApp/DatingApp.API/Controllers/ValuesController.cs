using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace DatingApp.API.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {

     private readonly DataContext _dataContext;
      public ValuesController(DataContext dataContext)
      {
          _dataContext = dataContext;
      }
      //api/values
      [Authorize]
      [HttpGet]
      public async Task<IActionResult> GetValues(){
      var values =await _dataContext.Values.ToListAsync();
      return Ok(values);
      }

      //api/values/:id
      [AllowAnonymous]
      [HttpGet("{id}")]
      public async Task<IActionResult> GetValue(int id){
        var value =await _dataContext.Values.FirstOrDefaultAsync(x => x.Id == id);
        return Ok(value);
      }
    }
}

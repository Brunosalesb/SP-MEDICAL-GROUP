using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpMedicalGroupAPI.Domains;

namespace SpMedicalGroupAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProntuariosController : ControllerBase
    {
        [HttpGet("Listar")]
        public IActionResult ListarProntuario()
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                    return Ok(ctx.Prontuario.ToList());
            }
            catch
            {

                return BadRequest();
            }
        }
    }
}
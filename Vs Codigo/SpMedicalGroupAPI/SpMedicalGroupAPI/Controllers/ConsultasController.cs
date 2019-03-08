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
    public class ConsultasController : ControllerBase
    {
        [HttpGet("Listar")]
        public IActionResult ListarConsulta()
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                    return Ok(ctx.Consulta.ToList());
            }
            catch 
            {
                return BadRequest();
            }
        }

        [HttpPost("Cadastrar")]
        public IActionResult CadastrarConsulta(Consulta consulta)
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                {
                    ctx.Consulta.Add(consulta);
                    ctx.SaveChanges();
                }
                    return Ok();
            }
            catch 
            {
                return BadRequest();
            }
        }

        [HttpDelete("Deletar/{id}")]
        public IActionResult DeletarConsulta(int id)
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                {
                    Consulta consultaProcurada = ctx.Consulta.Find(id);

                    if (consultaProcurada == null)
                    {
                        return NotFound();
                    }

                    ctx.Consulta.Remove(consultaProcurada);
                    ctx.SaveChanges();
                }
                    return Ok();
            }
            catch 
            {

                return BadRequest();
            }
        }

        [HttpPut("Atualizar")]
        public IActionResult AtualizarConsulta(Consulta consulta)
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                {
                    Consulta consultaExiste = ctx.Consulta.Find(consulta.Id);

                    if (consultaExiste == null)
                    {
                        return NotFound();
                    }

                    consultaExiste.IdProntuario = consulta.IdProntuario;
                    consultaExiste.IdMedico = consulta.IdMedico;
                    consultaExiste.DataDaConsulta = consulta.DataDaConsulta;
                    consultaExiste.Descricao = consulta.Descricao;
                    consultaExiste.IdSituacao = consulta.IdSituacao;



                    ctx.Consulta.Update(consultaExiste);
                    ctx.SaveChanges();
                }
                    return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
    }
}
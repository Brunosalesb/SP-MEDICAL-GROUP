    using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpMedicalGroupAPI.Domains;

namespace SpMedicalGroupAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicasController : ControllerBase
    {

        [Authorize(Roles = "Administrador")]
        [HttpGet("Listar")]
        public IActionResult ListarClinica()
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                    return Ok(ctx.Clinica.ToList());
            }
            catch 
            {

                return BadRequest();
            }
        }

        [Authorize(Roles = "Administrador")]
        [HttpPost("Cadastrar")]
        public IActionResult CadastrarClinica(Clinica clinica)
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                {
                    ctx.Clinica.Add(clinica);
                    ctx.SaveChanges();

                }
                    return Ok();
            }
            catch 
            {
                return BadRequest();
            }
        }


        [Authorize(Roles = "Administrador")]
        [HttpPut("Atualizar")]
        public IActionResult AtualizarClinica(Clinica clinica)
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                {
                    Clinica clinicaExiste = ctx.Clinica.Find(clinica.Id);

                    if (clinicaExiste == null)
                    {
                        return NotFound();
                    }

                    clinicaExiste.Nome = clinica.Nome;
                    clinicaExiste.Endereco = clinica.Endereco;
                    clinicaExiste.HorarioDeFuncionamento = clinica.HorarioDeFuncionamento;
                    clinicaExiste.Cnpj = clinica.Cnpj;
                    clinicaExiste.NomeFantasia = clinica.NomeFantasia;
                    clinicaExiste.RazaoSocial = clinica.RazaoSocial;
                    clinicaExiste.Medicos = clinica.Medicos;

                    ctx.Clinica.Update(clinicaExiste);
                    ctx.SaveChanges();
                }
                    return Ok();
            }
            catch 
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "Administrador")]
        [HttpDelete("Deletar/{id}")]
        public IActionResult DeletarClinica(int id)
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                {
                    Clinica clinicaProcurada = ctx.Clinica.Find(id);
                    if (clinicaProcurada == null)
                    {
                        return NotFound();
                    }

                    ctx.Clinica.Remove(clinicaProcurada);
                    ctx.SaveChanges();
                }
                return Ok();
            }
            catch 
            {

                return BadRequest();
            }
        }
    }

}
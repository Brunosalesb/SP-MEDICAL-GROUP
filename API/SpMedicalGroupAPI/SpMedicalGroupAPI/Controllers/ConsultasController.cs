
﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpMedicalGroupAPI.Domains;
using SpMedicalGroupAPI.Interfaces;
using SpMedicalGroupAPI.Repositories;

namespace SpMedicalGroupAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultasController : ControllerBase
    {
        private IConsultaRepository ConsultaRepository { get; set; }

        public ConsultasController()
        {
            ConsultaRepository = new ConsultaRepository();
        }

        [Authorize]
        [HttpGet("Listar")]
        public IActionResult ListarConsulta()
        {
            try
            {
                int id = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                string idTipoUsuario = Convert.ToString(HttpContext.User.Claims.First(c => c.Type == ClaimTypes.Role).Value);
                return Ok(ConsultaRepository.ListarConsulta(id, idTipoUsuario));
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
        [Authorize( Roles ="Administrador")]
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
            catch (Exception ex)
            {
                return BadRequest();
            }
        }


        [Authorize(Roles ="Administrador,Medico")]
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
            catch 
            {
                return BadRequest();
            }
        }

        [Authorize(Roles ="Administrador")]
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
    }
}


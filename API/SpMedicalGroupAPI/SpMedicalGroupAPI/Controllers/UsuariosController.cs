
﻿using System;
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
    public class UsuariosController : ControllerBase
    {

        [Authorize(Roles = "Administrador")]
        [HttpGet("Listar")]
        public IActionResult ListarUsuario()
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                    return Ok(ctx.Usuarios.ToList());
            }
            catch 
            {

                return BadRequest();
            }
        }

        [HttpPost("Cadastrar")]
        public IActionResult CadastrarUsuario(Usuarios usuario)
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                {
                    ctx.Usuarios.Add(usuario);
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
        public IActionResult AtualizarUsuario(Usuarios usuario)
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                {
                    Usuarios usuarioExistente = ctx.Usuarios.Find(usuario.Id);

                    if (usuarioExistente == null)
                    {
                        return NotFound();
                    }

                    usuarioExistente.Email = usuario.Email;
                    usuarioExistente.Senha = usuario.Senha;
                    usuarioExistente.IdTipoUsuario = usuario.IdTipoUsuario;

                    ctx.Usuarios.Update(usuarioExistente);
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
        public IActionResult DeletarUsuario(int id)
        {
            try
            {
                using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
                {
                    Usuarios usuarioBuscado = ctx.Usuarios.Find(id);
                    if (usuarioBuscado == null)
                    {
                        return NotFound();
                    }

                    ctx.Usuarios.Remove(usuarioBuscado);
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
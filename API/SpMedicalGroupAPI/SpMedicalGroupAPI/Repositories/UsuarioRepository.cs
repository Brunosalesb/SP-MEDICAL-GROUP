
﻿using Microsoft.EntityFrameworkCore;
using SpMedicalGroupAPI.Domains;
using SpMedicalGroupAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedicalGroupAPI.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {

        public Usuarios BuscarPorEmailESenha(string email, string senha)
        {
            using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
            {
                Usuarios usuarioBuscado = ctx.Usuarios.Include(x => x.IdTipoUsuarioNavigation).FirstOrDefault(x => x.Email == email && x.Senha == senha);
                if (usuarioBuscado == null)
                {
                    return null;
                }
                return usuarioBuscado;
            }
        }

        public List<Usuarios> ListarUsuario() => throw new NotImplementedException();

        public void CadastrarUsuario(Usuarios usuario) => throw new NotImplementedException();

        public void AtualizarUsuario(Usuarios usuario) => throw new NotImplementedException();

        public void DeletarUsuario(int id) => throw new NotImplementedException();
    }

}

﻿using SpMedicalGroupAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedicalGroupAPI.Interfaces
{
    interface IUsuarioRepository
    {
        void CadastrarUsuario(Usuarios usuario);

        Usuarios BuscarPorEmailESenha(string email, string senha);

        List<Usuarios> ListarUsuario();

        void AtualizarUsuario(Usuarios usuario);

        void DeletarUsuario(int id);
    }
}

<<<<<<< HEAD
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
=======
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
>>>>>>> c8a1a7c2174ec255ce7791e7564ce9e683db7dd1


﻿using SpMedicalGroupAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedicalGroupAPI.Interfaces
{
    interface IConsultaRepository
    {
        List<Consulta> ListarConsulta(int id, string idTipoUsuario);

        void CadastarConsulta(Consulta consulta);

        void DeletarConsulta(int id);

        void AtualizarConsulta(Consulta consulta);

    }
}

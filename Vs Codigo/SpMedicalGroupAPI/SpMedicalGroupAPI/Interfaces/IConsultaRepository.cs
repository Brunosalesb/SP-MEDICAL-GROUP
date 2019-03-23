<<<<<<< HEAD
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
=======
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
>>>>>>> c8a1a7c2174ec255ce7791e7564ce9e683db7dd1

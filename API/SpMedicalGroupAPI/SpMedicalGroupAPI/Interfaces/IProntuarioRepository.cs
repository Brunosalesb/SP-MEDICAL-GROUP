using SpMedicalGroupAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedicalGroupAPI.Interfaces
{
    interface IProntuarioRepository
    {
        List<Prontuario> ListarProntuario();
    }
}

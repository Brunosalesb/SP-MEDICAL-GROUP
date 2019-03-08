using SpMedicalGroupAPI.Domains;
using SpMedicalGroupAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedicalGroupAPI.Repositories
{
    public class ConsultaRepository : IConsultaRepository
    {
        public void AtualizarConsulta(Consulta consulta) => throw new NotImplementedException();

        public void CadastarConsulta(Consulta consulta) => throw new NotImplementedException();

        public void DeletarConsulta(int id) => throw new NotImplementedException();

        public List<Consulta> ListarConsulta() => throw new NotImplementedException();
    }
}
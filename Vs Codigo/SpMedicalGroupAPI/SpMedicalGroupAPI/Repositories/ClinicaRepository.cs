using SpMedicalGroupAPI.Domains;
using SpMedicalGroupAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedicalGroupAPI.Repositories
{
    public class ClinicaRepository : IClinicaRepository
    {
        public void AtualizarClinica(Clinica clinica) => throw new NotImplementedException();

        public void CadastrarClinica(Clinica clinica) => throw new NotImplementedException();

        public void DeletarClinica(int id) => throw new NotImplementedException();

        public List<Clinica> ListarClinica() => throw new NotImplementedException();
    }
}

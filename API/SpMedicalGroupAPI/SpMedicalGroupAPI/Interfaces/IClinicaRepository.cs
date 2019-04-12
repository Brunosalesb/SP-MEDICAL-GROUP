using SpMedicalGroupAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedicalGroupAPI.Interfaces
{
    interface IClinicaRepository
    {
        void CadastrarClinica(Clinica clinica);

        void DeletarClinica(int id);

        void AtualizarClinica(Clinica clinica);

        List<Clinica> ListarClinica();
    }
}

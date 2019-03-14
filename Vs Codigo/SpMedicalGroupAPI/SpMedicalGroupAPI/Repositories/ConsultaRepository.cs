﻿using SpMedicalGroupAPI.Domains;
using SpMedicalGroupAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedicalGroupAPI.Repositories
{
    public class ConsultaRepository : IConsultaRepository
    {
        public void AdicionarDescricao(Consulta consulta) => throw new NotImplementedException();

        public void AtualizarConsulta(Consulta consulta) => throw new NotImplementedException();

        public void CadastarConsulta(Consulta consulta) => throw new NotImplementedException();

        public void DeletarConsulta(int id) => throw new NotImplementedException();

        public List<Consulta> ListarConsulta(int id, string idTipoUsuario)
        {
            using (SpMedicalGroupContext ctx = new SpMedicalGroupContext())
            {
                if (idTipoUsuario == "Administrador")
                {
                    return ctx.Consulta.ToList();
                }

                if (idTipoUsuario == "Medico")
                {
                    Medicos medico;
                    medico = ctx.Medicos.FirstOrDefault(x => x.IdUsuario == id);
                    return ctx.Consulta.Where(x => x.IdMedico == medico.Id).ToList();
                }
                if (idTipoUsuario == "Paciente")
                {
                    Prontuario prontuario;
                    prontuario = ctx.Prontuario.FirstOrDefault(x => x.IdUsuario == id);
                    return ctx.Consulta.Where(x => x.IdProntuario == prontuario.Id).ToList();
                }
                return null;
            }
        }
      
    }
}
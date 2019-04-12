using System;
using System.Collections.Generic;

namespace SpMedicalGroupAPI.Domains
{
    public partial class Consulta
    {
        public int Id { get; set; }
        public int? IdProntuario { get; set; }
        public int? IdMedico { get; set; }
        public DateTime? DataDaConsulta { get; set; }
        public string Descricao { get; set; }
        public int? IdSituacao { get; set; }

        public Medicos IdMedicoNavigation { get; set; }
        public Prontuario IdProntuarioNavigation { get; set; }
        public Situacao IdSituacaoNavigation { get; set; }
    }
}

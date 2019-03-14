﻿using System;
using System.Collections.Generic;

namespace SpMedicalGroupAPI.Domains
{
    public partial class Situacao
    {
        public Situacao()
        {
            Consulta = new HashSet<Consulta>();
        }

        public int Id { get; set; }
        public string Situacao1 { get; set; }

        public ICollection<Consulta> Consulta { get; set; }
    }
}

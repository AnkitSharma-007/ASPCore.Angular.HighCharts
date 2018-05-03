using System;
using System.Collections.Generic;

namespace IPLPollDemo.Models
{
    public partial class IplTeams
    {
        public int TeamId { get; set; }
        public string TeamName { get; set; }
        public int VoteCount { get; set; }
    }
}

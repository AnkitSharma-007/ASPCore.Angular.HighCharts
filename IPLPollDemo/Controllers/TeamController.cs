using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IPLPollDemo.Models;
using Microsoft.AspNetCore.Mvc;

namespace IPLPollDemo.Controllers
{
    [Route("api/Team")]
    public class TeamController : Controller
    {
        TeamDataAccessLayer objTeam = new TeamDataAccessLayer();

        [HttpGet]
        [Route("GetTeamList")]
        public IEnumerable<IplTeams> GetTeamList()
        {
            return objTeam.GetAllTeams();
        }

        [HttpGet]
        [Route("TotalVotes")]
        public int TotalVotes()
        {
            return objTeam.GetTotalVoteCount();
        }

        [HttpPut]
        [Route("UpdateVoteCount")]
        public int UpdateVoteCount([FromBody] IplTeams team)
        {
            return objTeam.RecordVote(team);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IPLPollDemo.Models
{
    public class TeamDataAccessLayer
    {
        myTestDBContext db = new myTestDBContext();

        //To get the list of all teams from database
        public IEnumerable<IplTeams> GetAllTeams()
        {
            try
            {
                return db.IplTeams.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To update the vote count of a team by one
        public int RecordVote(IplTeams iplTeam)
        {
            try
            {

                db.Database.ExecuteSqlCommand("update IplTeams set VoteCount = VoteCount + 1 where TeamID = {0}", parameters: iplTeam.TeamId);

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To get the total votes count 
        public int GetTotalVoteCount()
        {
            try
            {
                return db.IplTeams.Sum(t => t.VoteCount);
            }
            catch
            {
                throw;
            }
        }
    }
}

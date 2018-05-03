import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { PercentPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from '../../services/teamservice.service'

@Component({
    templateUrl: './IPLPoll.component.html',
})

export class IPLPoll {

    public teamList: TeamData[];

    constructor(public http: Http, private _teamService: TeamService, private _router: Router) {
        this.getTeamList();
    }

    getTeamList() {
        this._teamService.getTeams().subscribe(
            data => this.teamList = data
        )
    }

    save(team) {

        this._teamService.saveVotes(team)
            .subscribe((data) => {
                this._router.navigate(['/results']);
            })
    }
}

export class TeamData {
    teamId: number;
    teamName: string;
    voteCount: number;
    voteShare: number;
}

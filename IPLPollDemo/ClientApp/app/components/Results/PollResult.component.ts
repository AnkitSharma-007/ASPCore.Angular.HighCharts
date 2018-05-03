import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { PercentPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamData } from '../poll/IPLPoll.component';
import { TeamService } from '../../services/teamservice.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';

import { Chart } from 'angular-highcharts';

@Component({
    templateUrl: './PollResult.component.html',
})

export class PollResult {

    public chart: any;
    public totalVotes: number;
    public resultList: TeamData[];

    constructor(public http: Http, private _teamService: TeamService) {

        Observable.zip(this._teamService.getTotalVotes(), this._teamService.getTeams())
            .subscribe(([totalVoteCount, teamListData]) => {
                this.totalVotes = totalVoteCount;
                this.resultList = teamListData;

                for (let i = 0; i < teamListData.length; i++) {
                    teamListData[i].voteShare = (((teamListData[i].voteCount) / this.totalVotes) * 100);
                }

                this.createCharts();
            });
    }

    createCharts() {
        this.chart = new Chart({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Vote share for each team'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage of Votes'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Vote: <b>{point.y:.2f} %</b>'
            },

            series: [{
                type: 'column',
                data: [
                    { name: this.resultList[0].teamName, y: this.resultList[0].voteShare, color: 'rgba(253, 185, 19, 0.85)' },
                    { name: this.resultList[1].teamName, y: this.resultList[1].voteShare, color: 'rgba(0, 76, 147, 0.85)' },
                    { name: this.resultList[2].teamName, y: this.resultList[2].voteShare, color: 'rgba(170, 69, 69, 0.85)' },
                    { name: this.resultList[3].teamName, y: this.resultList[3].voteShare, color: 'rgba(112, 69, 143, 0.85)' },
                    { name: this.resultList[4].teamName, y: this.resultList[4].voteShare, color: 'rgba(0, 93, 160, 0.85)' },
                    { name: this.resultList[5].teamName, y: this.resultList[5].voteShare, color: 'rgba(45, 77, 157, 0.85)' },
                    { name: this.resultList[6].teamName, y: this.resultList[6].voteShare, color: 'rgba(0, 0, 0, 0.85)' },
                    { name: this.resultList[7].teamName, y: this.resultList[7].voteShare, color: 'rgba(251, 100, 62, 0.85)' }
                ],
            }]

        });

    }
}

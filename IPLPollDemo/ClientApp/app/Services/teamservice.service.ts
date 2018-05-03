import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class TeamService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getTeams() {
        return this._http.get(this.myAppUrl + 'api/Team/GetTeamList')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getTotalVotes() {
        return this._http.get(this.myAppUrl + 'api/Team/TotalVotes')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    saveVotes(team) {
        return this._http.put(this.myAppUrl + 'api/Team/UpdateVoteCount', team)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Config } from '../app.config';
import { Promise } from 'q';

@Injectable()
export class TestService {
    constructor(
        private http: Http
    ) {
    }

    getHeader() {
        const header = new Headers();
        header.append('Accept', 'application/json');

        const options = new RequestOptions({ headers: header });
        return options;
    }

    getTestData(): Observable<any> {
        const options = this.getHeader();
        console.log(`${Config.ApiUrl}/test`);
        // return this.http.get(`${Config.ApiUrl}/test`, options);
        return this.http.get(`${Config.ApiUrl}/test`, options)
            .map((res: Response) => res.json())
            .catch((err) => {
                return err;
            });
    }

    FindingForX() {
        let x = 3;
        for (let i = 1; i <= 4; i++) {
            x = x + (2 * i);
        }
        return x;
    }

    FindingForY() {
        return 99 - (10 * 2) - 24;
    }

    FindingForAnotherX() {
        let x = "5";
        for (let i = 2; i <= 5; i++) {
            x = `${i}${x}`;
        }
        return x
    }

}


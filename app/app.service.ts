import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import 'rxjs/add/operator/map';

import { Rule }             from './Rule';

@Injectable()

export class AppService {
    constructor(private http: Http) {
        console.log('RuleEngine Service Initialised...');
    }
    addRule(newRule: Rule) {
        console.log('this is the rule being posted');
        console.log(newRule);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/', JSON.stringify(newRule), {headers: headers})
                    .map(res => res.json());
    }
}
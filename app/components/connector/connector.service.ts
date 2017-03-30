import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class ConnectorService {
    constructor(/*private http: Http */) {
        console.log('Connector Service Initialised...');
    }
    sendData() {
        console.log('Connector service called');
        
        return 'message from home service';
    }
}
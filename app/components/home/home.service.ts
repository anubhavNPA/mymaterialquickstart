import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class HomeService {
    constructor(/*private http: Http */) {
        console.log('Some Service Initialised...');
    }
    sendData() {
        console.log('home service called');
        
        return 'message from home service';
    }
}
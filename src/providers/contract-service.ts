import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

@Injectable()
export class ContractService {
    constructor(private http: Http) { }

    getContract(): Observable<any> {
        return this.http.get('https://s3.amazonaws.com/testsymfonybucket/person/contract/00001.json').map(res => res.json());
    }
}


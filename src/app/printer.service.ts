import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PrinterService {

  constructor(private _http : Http) {}

  print(data){
    return this._http.put(' www.solutechnology.com/apis/print_center/print_jobs',data)
            .map((response : Response) => response);
  }

}

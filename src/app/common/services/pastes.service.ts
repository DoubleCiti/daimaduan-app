import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Paste } from '../models';

import { environment } from '../../../environments/environment';

@Injectable()
export class PastesService {
  private url = environment.api_url + '/pastes';

  constructor(private http: Http) { }

  // private headers = new Headers({'Content-Type': 'application/json',
  //                                'Access-Control-Allow-Origin': '*'});

  getAllPastes(): Promise<Paste[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json().pastes as Paste[], reason => [])
               .catch(this.handleError);
  }

  getPasteById(hashId: string): Promise<Paste> {
    return this.http.get(this.url + '/' + hashId)
               .toPromise()
               .then(response => response.json().paste as Paste)
               .catch(this.handleError);
  }

  // createComment(model: Comment): Promise<Comment> {
  //   return this.http.post(this.url, model)
  //              .toPromise()
  //              .then(response => response.json() as Comment)
  //              .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Tag } from '../models';

import { environment } from '../../../environments/environment';

@Injectable()
export class TagsService {
  private url = environment.api_url + '/tags';

  constructor(private http: Http) { }

  getAllTags(): Promise<Tag[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json().tags as Tag[])
               .catch(this.handleError);
  }

  // getPasteById(hashId: string): Promise<Paste> {
  //   return this.http.get(this.url + '/' + hashId)
  //              .toPromise()
  //              .then(response => response.json().paste as Paste)
  //              .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

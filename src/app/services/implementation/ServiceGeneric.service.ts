import {Observable} from 'rxjs/Observable';
import {Pageble} from '../../model/pageble';
import {IServiceGeneric} from '../IService.service';
import {HttpClient} from '@angular/common/http';

export class ServiceGeneric<T> implements IServiceGeneric<T> {
  public api = '';
  public http: HttpClient;

  constructor(http: HttpClient,
              api: string) {
    this.api = api;
    this.http = http;
  }

  public getDependency(pObj: T, dependencyName: string, url?: string) {
    return null;
  }

  public getByUrl(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public getById(id: number): Observable<T> {
    return this.http.get<T>(this.api + id + '/');
  }

  public getList(pageEvent = null): Observable<Pageble<T>> {
    console.log('passou por mim!');
    const url = pageEvent ? this.api + '?page=' + (pageEvent.pageIndex + 1) : this.api;
    return this.http.get<Pageble<T>>(url);
  }
}

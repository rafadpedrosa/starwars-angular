import {Observable} from 'rxjs/Observable';
import {Pageble} from '../model/pageble';

export interface IServiceGeneric<T> {

  getDependency(pCharacter: T, dependencyName: string);

  getByUrl(url: string): Observable<T>;

  getById(id: number): Observable<T>;

  getList(pageEvent): Observable<Pageble<T>>;
}

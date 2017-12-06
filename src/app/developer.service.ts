import { Injectable } from '@angular/core';
import { Developer } from './Developer';
import { DEVELOPERS } from './mock-developers';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class DeveloperService {

  constructor(private messageService: MessageService) { }
  
  getDevelopers(): Observable<Developer[]> {
    // Todo: send the message _after_ fetching the developers
    this.messageService.add('DeveloperService: fetched developers');
    return of(DEVELOPERS);
  }

  getDeveloper(id: number): Observable<Developer> {
    // Todo: send the message _after_ fetching the developer
    this.messageService.add(`DeveloperService: fetched developer id=${id}`);
    return of(DEVELOPERS.find(developer => developer.id === id));
  }
}

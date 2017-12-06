import { Component, OnInit } from '@angular/core';

import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
 selector: 'app-developers',
 templateUrl: './developers.component.html',
 styleUrls: ['./developers.component.css']
})

export class DevelopersComponent implements OnInit {
  developers: Developer[];

  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.getDevelopers();
  }

  getDevelopers(): void {
    this.developerService.getDevelopers()
    .subscribe(developers => this.developers = developers);
  }
}
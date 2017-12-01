import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {Project} from '../projects/project.model';
import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ DataService ],
})
export class HomeComponent implements OnInit {
  projects: Project[];
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {}
  loadProjects() {
    this.projects = this.dataService.projects;
  }
}

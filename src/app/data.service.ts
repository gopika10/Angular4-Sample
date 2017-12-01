import { Injectable } from '@angular/core';
import { Project } from './projects/project.model';

@Injectable()
export class DataService {
  projects: Project[] = [
    new Project(1, 'Sample Project1', '', {'id': 1, 'name': 'Version A', 'links': ['Optimization Bot', 'Manual Simulation']}),
    new Project(2, 'Sample Project2', '', {'id': 1, 'name': 'Version A', 'links': ['Optimization Bot', 'Manual Simulation']})
  ];
  constructor() { }
  getProject(id: number) {

    const projectObj = this.projects.find( function( project ){
      return project.id === 1;
    } );
    return projectObj;
  }

}

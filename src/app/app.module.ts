import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UserDetailTableComponent } from './users/user-detail-table/user-detail-table.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'projects/:id', component: ProjectDetailsComponent },
  {path: 'users', component: UsersComponent },
  {path: 'users/:id', component: UserComponent },
  {path: 'users/:id/edit', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    HomeComponent,
    UserComponent,
    UserDetailTableComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

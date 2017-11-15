import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [
    new User(1, 'Sample User1'),
    new User(2, 'Sample User2')
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }
  onEdit(id: number) {
    this.router.navigate(['/users', id, 'edit']);
  }

}

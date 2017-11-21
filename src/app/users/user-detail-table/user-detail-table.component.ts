import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user.model';

@Component({
  selector: 'app-user-detail-table',
  templateUrl: './user-detail-table.component.html',
  styleUrls: ['./user-detail-table.component.scss']
})
export class UserDetailTableComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}

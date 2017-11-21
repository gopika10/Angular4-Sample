import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number};
  editMode: boolean;
  paramSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id']
    };
    if (this.route.snapshot.url.length > 2 && this.route.snapshot.url[2].path === 'edit') {
      this.editMode = true;
    } else {
      this.editMode = false;
    }
    // following code will observe the route change with id
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
      }
    );
  }
  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}

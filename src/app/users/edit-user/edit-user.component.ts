import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {
  user: {id: number};
  paramSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id']
    };
    // following code will observe the route change with id and name
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

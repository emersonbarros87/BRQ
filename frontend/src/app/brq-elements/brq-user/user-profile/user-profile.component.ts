import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponse } from '../../models/user-model';
import { Service } from '../../service/brq.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfile implements OnInit {

  user: UserResponse;

  constructor(
    private service: Service,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.readById(id).subscribe(user => {
        this.user = user;
      });
    }
  }

  listSensor() {
    this.service.profileList(this.user).subscribe(() => {
      this.router.navigate(['/brq'])
    });
  }

  back() {
    this.router.navigate(['/brq'])
  }

}


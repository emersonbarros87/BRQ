import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service/brq.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private service: Service,
  ) { }

  ngOnInit(): void {
  }

  userRegister() {
    this.router.navigate(['/user/create'])
  }

}

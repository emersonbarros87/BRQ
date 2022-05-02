import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service/brq.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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

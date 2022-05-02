import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from './service/brq.service';

@Component({
  selector: 'app-brq',
  templateUrl: './brq.component.html',
  styleUrls: ['./brq.component.css']
})
export class BrqComponent implements OnInit {

  constructor(
    private router: Router,
    private brqService: Service
  ) { }

  ngOnInit(): void {
  }

}

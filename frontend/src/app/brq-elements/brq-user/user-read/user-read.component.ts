import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserResponse } from '../../models/user-model';
import { Service } from '../../service/brq.service';
import { BrqDataSource } from './user-read-data-source';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<UserResponse>;

  queryField = new FormControl();
  dataSource: BrqDataSource;
  dataUsers: UserResponse[] = [];
  value: any;

  displayedColumns = [
    'name',
    'email',
    'cpf',
    'skills',
    'certification',
    'more',
    'action'
  ];

  constructor(
    private service: Service,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    service.headerData = {
      routeUrl: '/brq'
    }
    this.dataSource = new BrqDataSource();
  }

  ngOnInit(): void {
    this.listFormUser();
  }


  listFormUser() {
    this.service.read().subscribe(users => {
      this.dataUsers = users
    });
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    if (this.value) {
      this.dataUsers = this.dataUsers.filter((userForm) => {
        return userForm['name'].trim().toLowerCase().includes(this.value) ||
          userForm['email'].trim().toLowerCase().includes(this.value) ||
          userForm['cpf'].trim().toLowerCase().includes(this.value) ||
          userForm['skills'].toString().trim().toLowerCase().includes(this.value) ||
          userForm['certification'].trim().toLowerCase().includes(this.value)
      });
    }
    this.dataUsers.sort(function (a, b) {
      return b.skills.length - a.skills.length
    });

    if (!this.value) {
      return this.listFormUser();
    }
  }

  register() {
    this.router.navigate(['/user/create'])
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }
}


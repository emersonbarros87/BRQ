import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponse } from '../../models/user-model';
import { Service } from '../../service/brq.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user: UserResponse;

  constructor(
    private service: Service,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDeleteService()
  }

  getDeleteService() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.readById(id).subscribe(user => {
        this.user = user;
      });
    }
  }

  deleteUser() {
    this.service.delete(this.user).subscribe(() => {
      this.service.showMensage('USUÁRIO EXCLUÍDO COM SUCESSO!')
      this.router.navigate(['/brq'])
    });
  }

  cancel() {
    this.router.navigate(['/brq'])
  }
}

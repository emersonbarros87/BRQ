import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from '../../service/brq.service';
import { UserResponse } from '../../models/user-model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: UserResponse;

  constructor(
    private service: Service,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.service.readById(id).subscribe(user => {
        this.user = user
      });
    }
  }


  updateUser() {
    this.service.update(this.user).subscribe(() => {
      this.service.showMensage('INFORMAÇÕES ATUALIZADAS COM SUCESSO!');
      this.router.navigate(['/brq']);
      return
    });
  }

  cancel() {
    this.router.navigate(['/brq']);
  }

}

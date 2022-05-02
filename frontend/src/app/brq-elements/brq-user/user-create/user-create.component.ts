import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../../service/brq.service';
import { CpfValidator } from '../validators/cpf-validator';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userProfileForm: FormGroup;
  msg = '';
  genderOption: any[];
  skills = [' java', ' angular', ' .net ', ' scrum', ' python', ' php', ' ruby', ' react', ' devops', ' c#', ' javaScript', ' kotlin'];
  regExpMobile = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;
  regExpCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

  constructor(
    private router: Router,
    private service: Service,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.userForm();
    this.genderOption = this.getGender();
  }

  userForm() {
    this.userProfileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', this.regExpMobile],
      cpf: ['', CpfValidator.cpfValid],
      gender: [''],
      birthDate: [''],
      skills: this.buildSkills(),
      certification: [''],
    });
  }

  getFormControl() {
    return this.userProfileForm.controls;
  }

  validForms() {
    if (!this.getFormControl()['name'].value) {
      this.msg = 'Por favor informe seu nome.'
      this.snackBar.open(this.msg, 'X', {
        duration: 3000, horizontalPosition: 'center', verticalPosition: 'top',
        panelClass: ['err']
      })
      return;
    }
    if (!this.getFormControl()['email'].value) {
      this.msg = 'Por favor informe seu e-mail.'
      this.snackBar.open(this.msg, 'X', {
        duration: 3000, horizontalPosition: 'center', verticalPosition: 'top',
        panelClass: ['err']
      })
      return;
    }
    if (this.getFormControl()['email'].status === "INVALID") {
      this.msg = 'Inválido! Informe um e-mail válido.'
      this.snackBar.open(this.msg, 'X', {
        duration: 3000, horizontalPosition: 'center', verticalPosition: 'top',
        panelClass: ['err']
      })
      return;
    }
    if (!this.getFormControl()['mobile'].value) {
      this.msg = 'Por favor informe um número de celular.'
      this.snackBar.open(this.msg, 'X', {
        duration: 3000, horizontalPosition: 'center', verticalPosition: 'top',
        panelClass: ['err']
      })
      return;
    }
    if (this.getFormControl()['mobile'].status === "INVALID") {
      this.msg = 'Inválido! Informe um celular válido.'
      this.snackBar.open(this.msg, 'X', {
        duration: 3000, horizontalPosition: 'center', verticalPosition: 'top',
        panelClass: ['err']
      })
      return;
    }
    if (!this.getFormControl()['cpf'].value) {
      this.msg = 'Por favor informe seu CPF.'
      this.snackBar.open(this.msg, 'X', {
        duration: 3000, horizontalPosition: 'center', verticalPosition: 'top',
        panelClass: ['err']
      })
      return;
    }
    if (this.getFormControl()['cpf'].status === "INVALID") {
      this.msg = 'Inválido! Informe um CPF válido.'
      this.snackBar.open(this.msg, 'X', {
        duration: 3000, horizontalPosition: 'center', verticalPosition: 'top',
        panelClass: ['err']
      })
      return;
    }
    this.onSubmit();
  }

  buildSkills() {
    const valuesSkills = this.skills.map(value => new FormControl(false));
    return this.formBuilder.array(valuesSkills);
  }

  getGender() {
    return [
      { value: 'feminino', desc: 'Feminino' },
      { value: 'masculino', desc: 'Masculino' }
    ]
  }

  onSubmit() {
    let valueSubmit = Object.assign({}, this.userProfileForm.value);
    valueSubmit = Object.assign(valueSubmit, {
      skills: valueSubmit.skills
        .map((v: string, i: number) => v ? this.skills[i] : '')
        .filter((v: string) => v !== '')
    });
    if (this.userProfileForm.valid) {
      this.service.create(valueSubmit).subscribe(() => {
        this.service.showMensage('USUÁRIO CADASTRADO COM SUCESSO!')
      });
      this.userProfileForm.reset();
      this.router.navigate(['/brq']);
    }
  }
  
  onConfirm() {
    this.validForms();
  }

  cancel() {
    this.router.navigate(['']);
  }

}

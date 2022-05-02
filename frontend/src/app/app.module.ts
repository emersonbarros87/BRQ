import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './brq-elements/brq-home/home.component';
import { UserCreateComponent } from './brq-elements/brq-user/user-create/user-create.component';
import { UserDeleteComponent } from './brq-elements/brq-user/user-delete/user-delete.component';
import { UserReadComponent } from './brq-elements/brq-user/user-read/user-read.component';
import { UserUpdateComponent } from './brq-elements/brq-user/user-update/user-update.component';
import { BrqComponent } from './brq-elements/brq.component';
import { Service } from './brq-elements/service/brq.service';
import { FooterComponent } from './brq-elements/views/footer/footer.component';
import { NavComponent } from './brq-elements/views/nav/nav.component';
import { AboutComponent } from './brq-elements/brq-about/about.component';
import { UserProfile } from './brq-elements/brq-user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BrqComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    UserCreateComponent,
    UserReadComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    AboutComponent,
    UserProfile
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
    MatNativeDateModule,
    MatSelectModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    
    A11yModule,
    CdkTableModule,
    MatDividerModule,
    MatRippleModule,
    MatTooltipModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material-ui.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbar } from '@angular/material/toolbar';
import { SackiteyHomeComponent } from './sackitey-home/sackitey-home.component';
import { SackiteyFormComponent } from './sackitey-form/sackitey-form.component';
import { SackiteyAboutComponent } from './sackitey-about/sackitey-about.component';
import { SackiteyNotfoundComponent } from './sackitey-notfound/sackitey-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SackiteyHomeComponent,
    SackiteyFormComponent,
    SackiteyAboutComponent,
    SackiteyNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormField,
    MatInputModule,
    MatSelectModule,
    MatToolbar


    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

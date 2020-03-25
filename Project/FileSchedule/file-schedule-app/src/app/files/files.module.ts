import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilelistComponent } from './filelist/filelist.component';
import { FormsModule } from '@angular/forms';
// import {MatFormField} from '@angular/material/form-field';



@NgModule({
  declarations: [FilelistComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
    FormsModule
  ]
})
export class FilesModule { }

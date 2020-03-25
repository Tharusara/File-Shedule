import { Component, OnInit } from '@angular/core';
import { files } from 'src/app/Models/file.model';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {
files: files[] = [];
Name: string;
dataSource: File;
  constructor() { }

  ngOnInit(): void {
    this.files = [{
      fileID: 1,
      fileName: 'FileONe',
      filePath: 'c:/files',
      catagory: 'Financial',
  },
  {
    fileID: 2,
    fileName: 'TwoFile',
    filePath: 'c:/files/filelist',
    catagory: 'Accounts',
}];
  }
  Search() {
    this.files = this.files.filter(res => {
      return res.fileName.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
    });
  }

  OpenFolder() {

  }
  onEdit() {

  }
  onDelete() {

  }
}

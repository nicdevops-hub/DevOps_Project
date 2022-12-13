import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { MatTableDataSource, MatNoDataRow } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent implements OnInit {
  studentForm !:  FormGroup;

  constructor(private formBuilder: FormBuilder, private api : ServiceService, private dialog : MatDialog) { }

  ngOnInit(): void {
    
  }
  
}

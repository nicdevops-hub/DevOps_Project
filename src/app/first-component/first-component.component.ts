import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { MatTableDataSource, MatNoDataRow } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { FormGroup, FormBuilder, UntypedFormGroup,Validators} from '@angular/forms';
import { MustMatch } from 'src/app/must-match.validator';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  token: string|undefined;
  registerForm!: UntypedFormGroup;
  submitted = false;
  studentForm !:  FormGroup;

  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = [ 'id', 'name', 'age' , 'address', 'action'];

  addedEmpListTableData: any[] = [];


  fullName: string = "Hello Samit";
  numbers = 0
  counter(i: number) {
    return new Array(i);
  }
 
  constructor(private srv: ServiceService, private dialog : MatDialog , private formBuilder: FormBuilder) {
    this.token = undefined;
  }


  ngOnInit(): void {
    this.empDel()
    this.registerForm = this.formBuilder.group({
      //title: ['', Validators.required],
     // firstName: ['', Validators.required],
      //lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  add() {
    this.numbers = this.numbers + 1;
  }

  minus() {
    if (this.numbers > 0)
      this.numbers = this.numbers - 1;
  }

  empDel(){
    this.srv.getStuDetails().subscribe(
      (destails) => {
        console.log(destails);
        this.addedEmpListTableData = destails.data.stuDetails
        this.dataSource = new MatTableDataSource(this.addedEmpListTableData);
      }
    )

  }
  openDialog() {
    this.dialog.open(DialogComponent, {
       width: '45%'
       
    });
  }
  openEditDialog(element:any) {
    this.dialog.open(EditdialogComponent, {
       width: '50%',
    });
    this.studentForm.controls['Id'].setValue(element.id)
  }


  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

  // openEditDialog() {
  //   this.dialog.open(DialogComponent, {
  //      width: '45%'
       
  //   });
  // }


  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }
}














export class TabGroupBasicExample { }

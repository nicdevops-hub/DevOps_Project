import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { MatTableDataSource, MatNoDataRow } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
    studentForm !:  FormGroup;

  constructor(private formBuilder: FormBuilder, private api : ServiceService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      Id : ['',Validators.required],
      Name : ['',Validators.required],
      Age : ['',Validators.required],
      Address : ['',Validators.required]
    })
  }
  addStudent(){
    if(this.studentForm.controls['Id'].value == null || this.studentForm.controls['Id'].value == ""){

    }
    else if(this.studentForm.controls['Name'].value == null || this.studentForm.controls['Name'].value == ""){

    }
    else if(this.studentForm.controls['Age'].value == null || this.studentForm.controls['Age'].value == ""){

    }
    else if(this.studentForm.controls['Address'].value == null || this.studentForm.controls['Address'].value == ""){

    }
    else{
      var postedData:any = {
        data:{
          id:this.studentForm.controls['Id'].value,
          name:this.studentForm.controls['Name'].value,
          age:this.studentForm.controls['Age'].value,
          address:this.studentForm.controls['Address'].value
        }            
      }
      console.log(postedData);
      
      
      this.api.saveStuDetails(postedData).subscribe(
        (data) => data.message
      );
      console.log(postedData);
      //this.dialog.closeAll()
      this.dialog.closeAll();
      window.location.reload();

    }


    

    // console.log(this.studentForm.value)
    // if(this.studentForm.valid){

    //   this.api.saveStuDetails(this.studentForm.value).subscribe(
    //     {
    //       next:(res) =>{
    //            alert("Student Save Successfully")
    //       },
    //       error:()=>{
    //         alert("Error While adding the student")
    //       }
    //     }
    //   )
    // }
  }


  // var postedData:any = {
  //   data:{
  //     cci_unit_cd:this.cci_unit_cd,
  //   }      
  // }
  // console.log(postedData);
  // this.dealerMasterEntryServiceFormService.destinationDetails(postedData).subscribe(
  //   (data) => {
  //     console.log(data);
  //     this.destination_name = data.data.destination_list;     
  //   }
  // )

}

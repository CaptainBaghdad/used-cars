import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
 
@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.sass']
})
export class CarEditComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      editprice: [''],
      editmileage: [''],
      editdescription: ['']
    })
   }


   handleEdit = (event) => {
     /*console.log(`EDIT FIRED`)
     
     console.log(`EDIT PRICE ${editprice.value}`)
     
     this.form.get('editprice').setValue(editprice.value);
     this.form.get('editmileage').setValue(editmileage.value);
     this.form.get('editdescription').setValue(editdescription.value);*/



   }

   editSubmit  = (event) =>{
    let ed = this.router.url.replace(/\/edit\//g, '');
    let editprice = <HTMLInputElement>document.getElementById('editprice');
    let editmileage = <HTMLInputElement>document.getElementById('editmileage');
     let editdescription  = <HTMLInputElement>document.getElementById('editdescription');
     console.log(`EDIT SUBMIT FIRED ${ed}`) 
     let formData = new FormData();
     
     
     formData.append('editprice', editprice.value)
     
     
     formData.append('editmileage', editmileage.value)
     
     formData.append('editdescription',editdescription.value)
     console.log(`FORM DATA ${Object.values(formData)}`)
     return this.http.patch(`http://localhost:3005/edit/${ed}`,{editprice: editprice.value, editmilage:editmileage.value, editdescription: editdescription.value})
  .subscribe(data =>{
    
    console.log(`updated success !${Object.values(data)}`)
  })
   }

  ngOnInit() {
  }

}

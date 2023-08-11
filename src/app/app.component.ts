import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CrudApp';

  resigerForm: FormGroup = new FormGroup({});

  constructor(private _toastr: ToastrService, private _fb : FormBuilder) { }

  ngOnInit(): void {
    // this._toastr.success('Hello World!');
    // this._toastr.error('Hello World!');
    // this._toastr.warning('Hello World!');
    // this._toastr.info('Hello World!');

    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     )
    //   }
    // })
  }

  setFormState(){
    this.resigerForm = this._fb.group({
      
    })
  }

}

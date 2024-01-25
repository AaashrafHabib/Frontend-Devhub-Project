import { Component,ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  constructor(private fb: FormBuilder) { }

  addprojectform = this.fb.group({
    Title: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    Client: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    Description: ['', [Validators.required, Validators.minLength(20)]],
    file: ['', Validators.required],  // Add the 'file' form control
    startdate: ['', Validators.required],  // Add the 'startdate' form control
    enddate: ['', Validators.required]  // Add the 'enddate' form control
  });

  get Title() {
    return this.addprojectform.get('Title');
  }

  get Client() {
    return this.addprojectform.get('Client');
  }

  get description() {
    return this.addprojectform.get('Description');
  }

  // Add getters for the new form controls (file, startdate, enddate)
  get file() {
    return this.addprojectform.get('file');
  }

  get startdate() {
    return this.addprojectform.get('startdate');
  }

  get enddate() {
    return this.addprojectform.get('enddate');
  }

  submit() {
    console.log('Form submitted');
  }
}

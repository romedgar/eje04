import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Estudiante } from '../../models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  public myForm : FormGroup;
  public student : Estudiante;
  constructor(private studentService : EstudianteService, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: new FormControl([""], Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
        Validators.pattern('[a-zA-Z]')
      ])),
      controlnumber: new FormControl([""], Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern('[1-9]')
      ])),
      curp: new FormControl([""], Validators.required),
      age:new FormControl([0], Validators.required),
      active:new FormControl([false], Validators.required),
    });
  }

  create(){
    this.student = {
      name: this.myForm.controls.name.value,
      controlnumber: this.myForm.controls.controlnumber.value,
      age: this.myForm.controls.age.value,
      curp: this.myForm.controls.curp.value,
      active: this.myForm.controls.active.value,
    }
    this.studentService.createStudent(this.student)
  }

}

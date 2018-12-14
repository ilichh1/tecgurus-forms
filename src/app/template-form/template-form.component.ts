import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  public colonias = [
    'El Rosario',
    'El Fresno',
    'La Jalisco',
    'Atlas'
  ];

  public isTheFormSubmitted = false;

  public name = '';
  public email = '';
  public colonia = 'null';

  @ViewChild('formulario') formulario: NgForm;

  constructor() { }

  ngOnInit() {
  }

  public onFormSubmit(formulario): void {
    this.isTheFormSubmitted = true;
    console.log(formulario);
  }

  onResetForm() {
    this.isTheFormSubmitted = false;
    this.formulario.reset();
  }

}
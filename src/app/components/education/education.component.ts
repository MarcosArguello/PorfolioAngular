import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/service/porfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  educacionList:any;

  constructor(private datosPorfolio:PorfolioService){

  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.educacionList=data.education;
    })
  }

}

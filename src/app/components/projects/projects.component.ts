import { Component, OnInit, Input } from '@angular/core';
import { PorfolioService } from 'src/app/service/porfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  projectsList: any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.projectsList=data.projects;
    })
  }

}


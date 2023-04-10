import { Component, OnInit, Input } from '@angular/core';
import { PorfolioService } from 'src/app/service/porfolio.service';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit{

  @Input() skillAreaList: any;
  @Input() skillArea: any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.skillAreaList=data.skills;
    })
  }

}

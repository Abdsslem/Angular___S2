import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prof } from '../model/prof.model';

import { ProfService } from '../services/prof.service';
@Component({
  selector: 'app-add-prof',
  templateUrl: './add-prof.component.html',
  
})
export class AddProfComponent implements OnInit {
  newProf = new Prof();
  
  constructor(private profService: ProfService,private router :Router) {   }

  ngOnInit(): void {
  }
 addProf(){
    this.profService.ajouterProf(this.newProf).subscribe(prof => {
    console.log(prof);
    this.router.navigate(['profs']);
    });
   
      }
   
}

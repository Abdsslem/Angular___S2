import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Prof } from 'src/app/model/prof.model';
import { ProfService } from '../prof.service';
@Component({
selector: 'app-update-prof',
templateUrl: './update-prof.component.html',
styles: []
})
export class UpdateProfComponent implements OnInit {
currentProf = new Prof();
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private profService: ProfService) { }
  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.profService.consulterProf(this.activatedRoute.snapshot.params.id).
  subscribe( prof =>{ this.currentProf = prof; } ) ;
  } 
  updateProf() {
    this.profService.updateProf(this.currentProf).subscribe(prof => {
    this.router.navigate(['profs']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
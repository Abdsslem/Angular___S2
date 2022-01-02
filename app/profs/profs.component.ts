import { Component, OnInit } from '@angular/core';
import { Prof } from '../model/prof.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfService } from '../services/prof.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profs',
  templateUrl: './profs.component.html',

})
export class ProfsComponent implements OnInit {
  profs: Prof[]; //un tableau de Prof
  constructor(private profService: ProfService, private router: Router,public authService: AuthService) {


  }

  ngOnInit(): void {
    this.profService.listeProfs().subscribe(profs => {
      console.log(profs);
      this.profs = profs;
    });
  }

  supprimerProf(p: Prof) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.profService.supprimerProf(p.idProf).subscribe(() => {
        console.log("prof supprimé");
        this.SuprimerProfDuTableau(p);
      });
  }
  SuprimerProfDuTableau(prof: Prof) {
    this.profs.forEach((cur, index) => {
      if (prof.idProf === cur.idProf) {
        this.profs.splice(index, 1);
      }
    });
  }
}


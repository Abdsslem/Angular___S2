import { Injectable } from '@angular/core';
import { Prof } from '../model/prof.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

const httpOptions =
 {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
    providedIn: 'root'
})

export class ProfService {
  apiURL: string = 'http://localhost:8080/prof/api';
  //profs:Prof[]; 
  //profs : Prof[]; //un tableau de Profuit

constructor(private http : HttpClient, private authService: AuthService) {
/*this.profs = [
{ idProf : 1, nomProf : "Ismaili", prenomProf : "Abdesslem", telProf:"54775883"},
{idProf : 2, nomProf : "Selmene", prenomProf : "Koussay", telProf:"96861760"},
      {idProf : 3, nomProf : "Makram", prenomProf : "Amine", telProf:"99377586"}
];*/
}

listeProfs(): Observable<Prof[]> {
  let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Prof[]>(this.apiURL+"/all",{headers:httpHeaders}
);

  
}
ajouterProf( prod: Prof):Observable<Prof>{
  let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.post<Prof>(this.apiURL, prod, {headers:httpHeaders});

  }
  supprimerProf(id : number) {
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});

    }

    consulterProf(id: number): Observable<Prof> {
      const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Prof>(url,{headers:httpHeaders});

    }
    updateProf(prof :Prof) : Observable<Prof>
    {
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<Prof>(this.apiURL, prof, {headers:httpHeaders});
    }    
     
   /* trierProfs(){
      this.profs = this.profs.sort((n1,n2) => {
      if (n1.idProf > n2.idProf) {
      return 1;
      }
      if (n1.idProf < n2.idProf) {
      return -1;
      }
      return 0;
      });
    }*/

 

}

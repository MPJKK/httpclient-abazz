import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  tulos = 'Moro';
  apitulos = 'apitulos';
  apiosoite = 'http://media.mw.metropolia.fi/wbma';
  kuvaosoite = 'http://media.mw.metropolia.fi/wbma/uploads/';
  autoosote = 'https://api.openchargemap.io/v2/poi/';
  tulokset = 'ag';
  autotulokset = '';

  constructor(private http: HttpClient) { }

    getJson() {
        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('assets/package.json').subscribe(data => {
            console.log(data);
            this.tulos = data.license;
        });
    }

    getFromApi() {
        this.http.get(this.apiosoite + '/media').subscribe(data => {
            console.log(data[0].filename);
            this.tulokset = data;
        });
    }


  getCarStations () {
        this.http.get(this.autoosote).subscribe(data => {
            console.log(data.ID);
            this.autotulokset = this.autoosote + data[0];
        });

    }



  ngOnInit() {
    this.getJson();
    this.getFromApi();
    this.getCarStations();
  }

}

import { Component, OnInit } from '@angular/core';

import { DataService, Sing } from '../../services/data.service';
import { singObj } from '../song/song.page';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.page.html',
  styleUrls: ['./singer.page.scss'],
})
export class SingerPage implements OnInit {

  singTemplate: Sing[];
  singCustom: Sing[];
  singObj: singObj [] = [];
  sings: singObj [];
  indSingObj = -1;

  constructor(private _services: DataService) { 
    this.singTemplate = this._services.sings;
    this.craete();
  }

  ngOnInit() {}
  craete(){
    this.indSingObj = -1;
    this.singCustom = this.singTemplate;
    this.singCustom = this.singCustom.sort( (a: Sing, b: Sing) =>{
      const aSinger = a.Singer.trim().toUpperCase().replace(/\s+/g, '');
      const bSinger = b.Singer.trim().toUpperCase().replace(/\s+/g, '');
      return aSinger.localeCompare(bSinger);
    });
    this.singCustom.forEach( sing =>{
      const list: Sing[] = [sing];
      const header = sing.Singer.split(" ")[0][0].toUpperCase();
      const obj: singObj = { header: header, listSing: list};

      if(this.singObj.length !=0){
        const length = this.singObj.length;
        for(let i= 0; i< length; i++){
          this.indSingObj++;
          if(this.singObj[this.indSingObj].header.toUpperCase() == header) { 
            this.singObj[this.indSingObj].listSing.push(sing);
            this.indSingObj--; 
            return; // thay cho else o duoi   
          }
          this.singObj.push(obj); // day la else
          return; // cho mang sau khi them k chay lai
        }
        return
      }
      this.singObj.push(obj)
    })
    this.sings = this.singObj;
  }

  onSearch(ev) {
    console.log(' vao ham tim kiem');
    this.sings=[];
    this.craete();
      console.log('arr custom', this.sings)
      const val= ev.target.value;
     if (val && val.trim() != '') {
        const length = this.sings.length;
        for(let i= 0; i<length; i++){
          const lee = this.sings[i].listSing.length;
          let list: Sing[]=[];
          for(let j =0; j<lee; j++){
            if(this.sings[i].listSing[j].Singer.trim().toLowerCase().replace(/\s+/g, '').includes(val.trim().toLowerCase()) ){
              list.push(this.sings[i].listSing[j]);
              
            }
            return
          }
          if(list.length != 0){
            this.sings[i].listSing = []
            this.sings[i].listSing = list;
          }else{
            this.sings =this.sings.splice(i, 1);
          }
          return
        }
       
     }
     console.log('met ghe', this.sings)
    }


}

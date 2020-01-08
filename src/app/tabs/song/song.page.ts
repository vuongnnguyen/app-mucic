import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService, Sing } from '../../services/data.service';
import {Howl } from 'howler';
import { IonRange, IonSlides } from '@ionic/angular';



export interface singObj{
  header: string;
  listSing: Sing[];
}

@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})
export class SongPage implements OnInit {

  @ViewChild('range', { static: false}) range: IonRange;
  @ViewChild('mySlider', { static: false}) slides: IonSlides;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  
  singsCustom: Sing [];
  singTemplate: Sing [];
  singObj: singObj[] = [];
  sings : singObj []=[];
  indSingObj = -1;

  firstI = -1;
  firstJ = -1;

  check=false;
  countHande = 0;
  lit: Sing[]=[];

  play= false;

  player: Howl = null;
  isPlaying = false;
  // activeAudio :singObj = null;
  activeAudio : Sing = null;
  progress;
  constructor(private _services: DataService) { this.singTemplate = this._services.sings; }

  ngOnInit() {
    // console.log('vuong', " ".localeCompare('a')) x=> -1;
    // console.log('vuong', 'm'.localeCompare('M')); => -1
    this.singsCustom = this.singTemplate;
    this.singsCustom = this.singsCustom.sort( (a: Sing, b: Sing) => {
      // a.Name = a.Name.replace(/\s+/g, '');]
      // loai bo cac ki tu o giua chuoi
      const aName = a.Name.trim().toUpperCase().replace(/\s+/g, '');
      const bName = b.Name.trim().toUpperCase().replace(/\s+/g, '');
      // khong can preplace cung dc 
      // replace no dung de tranh khi so sanh " " vs so thi khoang trong nho hon
      return  aName.localeCompare(bName);
    })
    this.singsCustom.forEach(sing =>{
    const list: Sing[]= [sing];
    const header = sing.Name.split(" ")[0][0].toUpperCase(); 
    const obj: singObj = { header: header, listSing: list};
      
      if(this.singObj.length != 0) {
      const length = this.singObj.length;// luon thay doi khi thuc hien push vao mang
      for(let i = 0; i< length; i++){
        this.indSingObj++;
        if(this.singObj[this.indSingObj].header.toUpperCase() == header) { 
          this.singObj[this.indSingObj].listSing.push(sing);
          this.indSingObj--; 
          return; // thay cho else o duoi   
        }
        this.singObj.push(obj); // day la else
        return; // cho mang sau khi them k chay lai
      }
      return;
    }
     this.singObj.push(obj); 
    })
     this.sings = this.singObj;
  }


  onSearchTerm(ev: CustomEvent) {
    console.log(' vao ham tim kiem');
    this.sings = this.singObj;
      console.log('arr custom', this.singObj)
      const val= ev.detail.value;
 
     if (val && val.trim() != '') {

     }
    }

  onHidden(i: number, j: number){
    if( (this.firstI != -1 || this.firstJ != -1) && (this.firstI != i || this.firstJ != j) ){
      this.sings[this.firstI].listSing[this.firstJ].isSelected = false;
    }
    this.sings[i].listSing[j].isSelected = !this.sings[i].listSing[j].isSelected;
    if(this.sings[i].listSing[j].isSelected){
      if(this.firstI ==i && this.firstJ ==j){
        this.isPlaying = true;
        this.player.play();
      }else{
        this.start(i, j);
        // this.slides.slideNext();
      }
    }else{
      if(this.firstI ==i && this.firstJ ==j){
        this.isPlaying = false;
        this.player.pause();
      }
    }
    this.firstI = i;
    this.firstJ = j;
    this.slides.slideTo(1);
    // this.check=false;
    // if(this.check==false){
    //   setTimeout(() => {
    //     this.slides.slideTo(1);
    //     this.check = true;
    //     if(this.check){
    //       clearTimeout()
    //     }
    //   }, 500);
    // }
    
  }

  start(i:number, j:number){
    // this.play = true;
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: [this.sings[i].listSing[j].audio],
      onplay: ()=>{
        this.isPlaying = true;
        this.activeAudio = this.sings[i].listSing[j];
        this.updateProgress();
      },
      onend: ()=>{
        console.log('end');
        this.next();
      }
    });
    this.player.play();
  }

  togglePlayer(pause){
    this.isPlaying = !pause;
    this.sings[this.firstI].listSing[this.firstJ].isSelected = !this.sings[this.firstI].listSing[this.firstJ].isSelected;
    // lam cho silde 1 hien thi dang phat
    if(pause){
      this.player.pause();
    }else{
      this.player.play();  
    }
  }

  next(){
    if(this.firstI == this.sings.length -1 && this.sings[this.firstI].listSing.length -1 == this.firstJ){
      this.onHidden(0,0);
    }else{
      if(this.firstJ !=  this.sings[this.firstI].listSing.length-1 ){
        const j = this.firstJ +1;
        this.onHidden(this.firstI, j)
      }else{
        const i = this.firstI +1;
        this.onHidden(i, 0)
      }
    }
    this.start(this.firstI, this.firstJ);
  }

  prev(){
      if(this.firstI ==0 && this.firstJ == 0){
        //day la tao vong lap ne
        this.onHidden(this.sings.length -1, this.sings[this.sings.length-1].listSing.length-1)
      }else{
        if(this.firstJ == 0){
          const i = this.firstI -1;
          this.onHidden(i, this.sings[i].listSing.length-1);
        }else{
          const j = this.firstJ -1;
          this.onHidden(this.firstI, j);
        }
      }
  }

  seek(){
      let newValue = +this.range.value; // lay gia tri thanh progress
      let duration = this.player.duration(); // lay tgian tong 
      this.player.seek( duration * (newValue / 100)); //co the hieu 100 la duratin  ==> newValue  => tgian hien tai
      // lay xem thu tgian cua progress la bao nhieu
      // nghia la khi tua thi se tua den thoi gian do
// => tom lai la tua nhac

// sai khi click thi thay doi tgian dang phat 
// vi ham update luon lay tgian dang chay nen muc dich la update tgian dang chay 
// bang ham this.player.seek();
  }

    updateProgress(){
        let seek = this.player.seek();//lay tgian dang chay, ham nay luon chay san trong chuong trinh
        // ham tren chi update no thoi, neu ham tren co goi thi no update 
        // con khong goi thi no chay binh thuong theo gian hien hanh
// vi ha, settimeout sau tgian la 1s no moi goi nen tgian cua seek truocc va sau chnh nhau 1s
// co the hieu seek(sau) - seek(truoc) = tigiansettimeout
        this.progress = (seek / this.player.duration()) * 100  ||0;//  cai nay la cap nhat thoi k lien quan toi ham seek o tren        
        // k can cai  nay ham o tren van update tgian nhac dang phat duoc
        // cai nay la duration(tgian tong) la 100 => seek(tgian dang phat) la bao nhieu
        // cai nay xem thu process la bao nhieu neu no undefine(seek =0)  thi cho bang 0
//=> tom lai la tua thanh tgian


        // let newValue = +this.progress;  
        // let duration = this.player.duration();
        // this.player.seek( duration * (newValue / 100)); // vap nhat list nhac theo thanh progress
        // neu ma viet code nhu vay thi sau tgian settimeout
        // thi thanh progress se cap nhat
        setTimeout( ()=>{
          this.updateProgress();
        }, 1000)

 /// **** chung ta chi update duoc tgian dang phat bang chuot va keo thoi
 // nen khong update duoc     this.progress = (seek / this.player.duration()) * 100 +20
 // vi du la chay hon 20 phan tram so voi doan nhac dang tua
 // vi vay nen ham duoi chi update progeress chu k thay doi duoc tgian dang phat duoc
    }


  

  // onHidden(sing: Sing){
  //   if(this.firstIndex != -1 ) this.sings[this.firstIndex].isSelected = false;
  //   const index = this.sings.findIndex(item =>{
  //    return item.Id == sing.Id;
  //   });
  //   if(index !== this.firstIndex){
  //     this.sings[index].isSelected = !this.sings[index].isSelected;
  //   }
  //   this.firstIndex = index;
  // }

}
    
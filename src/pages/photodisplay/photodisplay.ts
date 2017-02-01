import { Component } from '@angular/core';
import { Photo} from '../photo/photo';
import { Camera} from 'ionic-native';
@Component({
  selector: 'page-photodisplay',
  templateUrl: 'photodisplay.html',
})
export class PhotodisplayPage {

  constructor() {

  }
  photos:Photo[]=[new Photo('http://blog.ionic.io/wp-content/uploads/2016/04/ionic-view.png',0),new Photo('http://placehold.it/350/151',0),new Photo('http://placehold.it/350/150',0),new Photo('http://placehold.it/350/151',0)];
  takePhoto(){
    Camera.getPicture({
     destinationType:Camera.DestinationType.DATA_URL,
     targetHeight:300,
     targetWidth:300,
     correctOrientation:true,
    }).then((ImageData)=>{
    this.photos.push(new Photo('data:image/jpeg;base64'+ImageData,0));
    },(err)=>{

    console.log(err);
  });
  }
  deletePhoto(photo){
  this.photos.splice(this.photos.indexOf(photo),1);
  }
  likePhoto(photo){
  photo.likes++;
  }
}


import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import {AddingnewionicPage} from '../pages/Adding-new-ionic/Adding-new-ionic';
import { NavgridPage} from '../pages/navgrid/navgrid';
import {QuizPage} from '../pages/quiz/quiz';
import {MappagePage} from '../pages/mappage/mappage';
import { ConnectivityService } from '../providers/connectivity-service';
import {GalleryPage} from '../pages/gallery/gallery';
import { LocationTracker } from '../providers/location-tracker';
import {glocationPage} from '../pages/glocation/glocation';
import {MapPage} from '../pages/map/map';
import {PhotodisplayPage} from '../pages/photodisplay/photodisplay';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ItemDetailsPage,
    ListPage,
    AddingnewionicPage,
    NavgridPage,
    QuizPage,
    MappagePage,
    GalleryPage,
    glocationPage,
    MapPage,
    PhotodisplayPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ItemDetailsPage,
    ListPage,
    AddingnewionicPage,
    NavgridPage,
    QuizPage,
    MappagePage,
    GalleryPage,
    glocationPage,
    MapPage,
    PhotodisplayPage,
  ],
  providers: [ConnectivityService,LocationTracker]
})
export class AppModule {}

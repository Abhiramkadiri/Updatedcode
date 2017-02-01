import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { AboutPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import {AddingnewionicPage} from '../pages/Adding-new-ionic/Adding-new-ionic';
import {QuizPage} from '../pages/quiz/quiz';
import {MappagePage} from '../pages/mappage/mappage';
import {GalleryPage} from '../pages/gallery/gallery';
import {glocationPage} from '../pages/glocation/glocation';
import {MapPage} from '../pages/map/map';
import {PhotodisplayPage} from '../pages/photodisplay/photodisplay';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = AboutPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'About', component: AboutPage },
      /*{ title: 'My First List', component: ListPage },*/
      { title: 'TimeTable',component:AddingnewionicPage},
      { title: 'Quiz',component:QuizPage},
      {title : ' School Gallery',component:GalleryPage},
      /*{title:'Map',component:MapPage},*/
      {title: 'Locate Us',component:MappagePage},
      {title:'Track',component:glocationPage},
      {title:'Upload',component:PhotodisplayPage},
      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { title: string; subtitle: string;}

@Component({
  selector: 'app-root',
  templateUrl: '../Views/app.component.html',
  styleUrls: ['../Styles/app.component.css']
})
export class AppComponent {
  public item1: any;
  items: Observable<any[]>;
  constructor(private afs: AngularFirestore){
    //this.itemDoc = this.afs.collection("/main-site").doc("header");
    //this.item1 = this.itemDoc.get().then(function(doc) {console.log(doc.data())});
    //this.itemsCollection = afs.collection<Item>('main-site/header');
    //this.items = afs.collection("/main-site").valueChanges();
    let self = this;
    this.afs.collection("/main-site").doc("header").ref.get().then(doc => {
      self.item1 = doc.data();
    });
  }

}

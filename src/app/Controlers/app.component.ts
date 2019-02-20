import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

export interface Item { title: string; subtitle: string; creationDate: Date;}

@Component({
  selector: 'app-root',
  templateUrl: '../Views/app.component.html',
  styleUrls: ['../Styles/app.component.css']
})
export class AppComponent {
  public itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;
  public title: string;
  constructor(private afs: AngularFirestore){
    this.itemDoc = afs.doc<Item>("main-header/1");
    this.item = this.itemDoc.valueChanges();
    this.item.subscribe(v => this.title = v.title);
  }
  update(item: Item) {
    this.itemDoc.update(item);
  }
}

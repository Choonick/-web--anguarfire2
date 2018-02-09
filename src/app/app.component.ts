import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public af: AngularFireDatabase) {

    this.itemsRef = af.list('/');
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, val: c.payload.val()}));
    });

    this.items.subscribe(o => console.log(o));
  }

  ngOnInit() {
  }


  addItem(newName: string) {
    this.itemsRef.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }



}

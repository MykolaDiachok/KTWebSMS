import { Component } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase]
})
export class AppComponent {
  title = 'app';
  itemValue = '';
  items: AngularFireList<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }
  // onSubmit() {
  //   this.items.push({content: this.itemValue});
  //   this.itemValue = '';
  // }
}

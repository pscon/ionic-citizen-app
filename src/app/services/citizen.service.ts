import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



export interface citizen{
  task:string;
  priority: number;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  removecitizen: any;
  getCitizen() {
    throw new Error('Method not implemented.');
  }


   private citizensCollection: AngularFirestoreCollection<citizen> ;

private citizens: Observable<citizen[]>;

   constructor(db: AngularFirestore) {
    this.citizensCollection = db.collection<citizen>('citizens');


    this.citizens = this.citizensCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc;
          return { id, ...data };
        });
      })
    );


   }

   getCitizens() {
    return this.citizens;
  }
 
  getcitizen(id) {
    return this.citizensCollection.doc<citizen>(id).valueChanges();
  }
 
  updateCitizen(citizen: citizen, id: string) {
    return this.citizensCollection.doc(id).update(citizen);
  }
 
  addCitizen(citizen:  citizen) {
    return this. citizensCollection.add(citizen);
  }
 
  removeCitizen(id) {
    return this. citizensCollection.doc(id).delete();
  }







}


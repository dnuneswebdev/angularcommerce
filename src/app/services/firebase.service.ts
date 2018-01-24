import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



@Injectable()
export class FirebaseService {

  listings: AngularFireList<any[]>

  constructor(private db: AngularFireDatabase) { 

  }

  getListings() { 
    this.listings = this.db.list('/listings') as AngularFireList<Listing[]>
    return this.listings
  }

}

interface Listing {
  $key?: string
  title?: string
  type?: string
  image?: string
  city?: string
  owner?: string
  bedrooms?: string
}

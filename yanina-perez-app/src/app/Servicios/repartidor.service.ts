import { Injectable } from '@angular/core';
import RepartidorInterface from '../Entities/repartidor-interface';
import { addDoc, collection, collectionData, updateDoc, doc } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { Observable } from '@firebase/util';
import PizzaI from '../Entities/pizza-interface';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  constructor() { }

  addUser(user: RepartidorInterface){
    const userRef = collection(getFirestore(), 'repartidores');
    return addDoc(userRef, user);
  }

  updateUser(user: RepartidorInterface, date: string){
    const userDocRef = doc(getFirestore(), `repartidores/${user.id}`);
    return updateDoc(userDocRef, { loginDate: date });
  }


  getUsers(){
    const userRef = collection(getFirestore(), 'repartidores');
    return collectionData(userRef, { idField: 'uid' }) as unknown as Observable<RepartidorInterface[]>;
  }



}

import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, updateDoc, doc } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { Observable } from 'rxjs';
import PizzaI from '../Entities/pizza-interface';
import UserI from '../Entities/users-interface';

@Injectable({
  providedIn: 'root'
})
export class UserFirestoreService {

  constructor() {

  }

  addUser(user: UserI){
    const userRef = collection(getFirestore(), 'usuarios');
    return addDoc(userRef, user);
  }

  updateUser(user: UserI, date: string){
    const userDocRef = doc(getFirestore(), `usuarios/${user.id}`);
    return updateDoc(userDocRef, { loginDate: date });
  }


  getUsers(){
    const userRef = collection(getFirestore(), 'usuarios');
    return collectionData(userRef, { idField : 'id' }) as Observable<UserI[]>;
  }


  getCurrentUser(){
    return localStorage.getItem('profile')
  }


}

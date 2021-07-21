import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Vehiculo } from '../model/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(public afs: AngularFirestore) { }

  save(vehiculo:  Vehiculo){
    const refVehiculo= this.afs.collection("vehiculos"); 
   if(vehiculo.id = null){
      vehiculo.id = this.afs.createId();
      vehiculo.activo = true; 
    }    
    refVehiculo.doc(vehiculo.id).set(Object.assign({}, vehiculo)); 
  }
 
}

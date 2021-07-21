import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from 'src/app/model/vehiculo';
import {VehiculoService} from 'src/app/service/vehiculo.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  vehiculo: Vehiculo=new Vehiculo();

  constructor(private route: ActivatedRoute,
    private VehiculoService: VehiculoService) {

    route.queryParams.subscribe(params => {
      console.log(params) 
    })

  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.vehiculo);
    this.VehiculoService.save(this.vehiculo);
    
  }


  

}

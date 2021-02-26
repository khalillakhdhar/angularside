import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../classes/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  costumers = new Array<Customer>();

  constructor(private customerService: CustomerService) { }

  ngOnInit() {

    this.getusers();
   // console.log(this.customers);
  }

  getusers(): void {
    this.customerService.getUsers().subscribe(res => {
      this.costumers = res;
    });
   }
   
  connect()
  {
// connexion via username et lastname
  }
}




  

import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  costumers = new Array<Customer>();
costumer:Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.costumer=new Customer();
  }

    save(): void {
    this.customerService.create(this.costumer as Customer).subscribe(costumer => {this.costumers.push(this.costumer); });
  //  window.location.reload();
  this.costumer=new Customer();
    }

}

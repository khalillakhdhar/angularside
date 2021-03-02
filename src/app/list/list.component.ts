import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  costumers = new Array<Customer>();
costumer:Customer;


  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.costumer=new Customer();
    this.getusers();
  }

  getusers(): void {
    this.customerService.getUsers().subscribe(res => {
      this.costumers = res;
      console.log(this.costumers);

    });
   }
   
}

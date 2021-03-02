import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  costumers = new Array<Customer>();
costumer:Customer;
existe:boolean;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
this.costumer=new Customer();
    this.getusers();
    console.log(this.costumers);
  }

  getusers(): void {
    this.customerService.getUsers().subscribe(res => {
      this.costumers = res;
      console.log(this.costumers);

    });
   }
   
  connect()
  {
  
    this.customerService.getUsers().subscribe(res => {
      this.costumers = res;
      for(let cs of this.costumers)
      {
        if((cs.firstname===this.costumer.firstname)&&(cs.lastname===this.costumer.lastname))
        {
          this.existe=true;
          window.location.replace("gestion");
          
        }

      }
      if(!this.existe){
        this.existe=false;
        //alert("compte non reconnu");
      }
     

      console.log(this.costumers);

    });


// connexion via username et lastname

  }
}




  

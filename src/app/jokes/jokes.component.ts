import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  constructor(private testService: TestService) { }

  joke = 'I do not have a joke yet';

  ngOnInit() {

    this.getAJoke();
  }


  getAJoke() {
    this.testService.getAJoke()
    .subscribe(data => this.joke = data.value);
  }

  

}

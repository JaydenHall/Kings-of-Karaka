import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div>
    <div class="container">
      <img class="pic" src="assets/images/hhh.png">
      <div class="bio">
        <div class="name">Name: Jayden</div>
        <div class="results">
          <div class="wins">Winners: 0</div>
          <div class="loses">Losers: 0</div>
        </div>
      </div>
    </div>
    <div class="container">
      <img class="pic" src="assets/images/john.png">
      <div class="bio">
        <div class="name">Name: Tom</div>
        <div class="results">
          <div class="wins">Winners: 0</div>
          <div class="loses">Losers: 0</div>
        </div>
      </div>
    </div>
    <div class="container">
      <img class="pic" src="assets/images/james.png">
      <div class="bio">
        <div class="name">Name: Jono</div>
        <div class="results">
          <div class="wins">Winners: 0</div>
          <div class="loses">Losers: 0</div>
        </div>
      </div>
    </div>
    <div class="container">
      <img class="pic" src="assets/images/scottie.png">
      <div class="bio">
        <div class="name">Name: Lee</div>
        <div class="results">
          <div class="wins">Winners: 0</div>
          <div class="loses">Losers: 0</div>
        </div>
      </div>
    </div>
    <div class="container">
      <img class="pic" src="assets/images/ray.png">
      <div class="bio">
        <div class="name">Name: Ryan</div>
        <div class="results">
          <div class="wins">Winners: 0</div>
          <div class="loses">Losers: 0</div>
        </div>
      </div>
    </div>    
    <div class="container">
      <img class="pic" src="assets/images/tomas.png">
      <div class="bio">
        <div class="name">Name: Sam</div>
        <div class="results">
          <div class="wins">Winners: 0</div>
          <div class="loses">Losers: 0</div>
        </div>
      </div>
    </div>
    <div class="container">
      <img class="pic" src="assets/images/david.png">
      <div class="bio">
        <div class="name">Name: Rob</div>
        <div class="results">
          <div class="wins">Winners: 0</div>
          <div class="loses">Losers: 0</div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class AppComponent {
  title = 'kings-of-karaka';
}

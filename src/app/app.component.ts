import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  finalFeature = 'recipe';
  onNavigate(feature: string){
      this.finalFeature = feature;
  }
}

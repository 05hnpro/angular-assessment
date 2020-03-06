import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assessment';
  public data = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getData();
  }
  
  getData() {
    this.appService.getJsonData().subscribe((response: any) => {
      this.data = response;
    });
  }

}

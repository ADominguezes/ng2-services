import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  private name: string;
  private lastName : string
  private serviceChange : boolean = true;
    constructor (private user: UserService) {
      this.name = user.getUserName();
      this.lastName = user.getUserLastName();
    }
    updateService() {
      this.user.setUserName(this.textName);
      this.user.setUserLastName(this.textLastName);
      this.name = this.user.getUserName();
      this.lastName = this.user.getUserLastName();
      this.serviceChange = !this.serviceChange
      setTimeout(() => {
        this.serviceChange = !this.serviceChange
      }, 3000);
    }
}
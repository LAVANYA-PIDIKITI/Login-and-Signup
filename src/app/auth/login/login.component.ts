import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../service/user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData: { email: string; password: string; } | any;
  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event: { target: { value: any; }; }) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  login(data: { email: string; password: string; }) {
    this.user.changeData(data);
  }
}

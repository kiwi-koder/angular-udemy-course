import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "recipe";
  selectedTab: string = "recipe";
  onTabSelected(tabData: { tab: string }) {
    this.selectedTab = tabData.tab;
  }
}

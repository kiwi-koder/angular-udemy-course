import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output()
  tabSelected = new EventEmitter<{
    tab: string;
  }>();

  constructor() {}

  ngOnInit() {}

  handleTabSelect(tabName: string) {
    console.log(tabName);
    this.tabSelected.emit({ tab: tabName });
  }
}

import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit, OnChanges {
  @Output()
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output()
  blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerContent = "";

  @ViewChild("serverContentInput")
  serverContentInput: ElementRef;

  constructor() {
    console.log("Constructor Called");
  }

  ngOnInit() {
    console.log("OnInit Called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Changes Called");
    console.log(changes);
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}

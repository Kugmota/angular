import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css']
})
export class CliComponent implements OnInit {
  title: string = "Angular Learning 2020";
  isSendData = false;
  isActive = false;
  isActives = false;
  imageUrl = "https://c4.wallpaperflare.com/wallpaper/317/730/359/mirai-nikki-amano-yukiteru-wallpaper-thumb.jpg"

  SendData(name: string): void {
    alert(name);

  }

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert(name)

  }
}

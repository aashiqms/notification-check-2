import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { SwPush } from "@angular/service-worker";

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { DashboardComponent } from "./components/dashboard/dashboard.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, CommonModule, HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'notify-pwa';
  constructor(
    private swPush: SwPush
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.subscribeToPush();

  }

  subscribeToPush(): void {
    this.swPush.messages.subscribe(
      (res: any) => {
        console.log(res, " Message to show in the notificaiton ");
      }
    );
  }

  
}

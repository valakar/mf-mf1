import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as uselessLib from 'useless-lib';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  libVer = uselessLib.version;
  constructor() { }

  ngOnInit(): void {
  }

}

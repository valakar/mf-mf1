import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as uselessLib from 'useless-lib';
import { environment } from '../../../../../environments/environment';
import { FakeApiService } from '../../fake-api.service';
// @ts-ignore
let pack = require('../../../../../../package.json')

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  libVer = uselessLib.version;
  materialVer = pack.dependencies['@angular/material'];
  title = environment.title;
  apiUrl = environment.apiUrl;

  constructor(private readonly fakeApi: FakeApiService) {

  }

  onApiCall() {
    this.fakeApi.getSomething().subscribe()
  }
}

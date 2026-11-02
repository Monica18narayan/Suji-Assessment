// D1.
// Build a standalone, OnPush LiveSearchComponent (Angular v20+). It must:
// • Bind a text input to a query signal.
// • Debounce the query by 300 ms, then call an injected SearchService.search(term):
// Observable&lt;Result[]&gt;.
// • Expose results, loading and error as signals, and cancel stale in-flight requests so the latest query always
// wins.
// • Render with @if / @for, including a loading indicator, an error state, and a &quot;No results&quot; state. Use
// inject() (no constructor injection), no NgModule.
// Marks are awarded for correct request cancellation and for justifying where you use RxJS vs where you use
// signals
// 

import { Injectable } from '@angular/core';
import { Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {
  term = Signal('Angular');
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: `
	<p>{{SearchService.term()}}</p>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  SearchService = inject(Service);
}


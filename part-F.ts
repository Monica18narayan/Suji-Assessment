//A parent mutates the todos array (e.g. this.todos.push(newTodo)) and the child below never updates. Explain
//exactly why, and give TWO different idiomatic fixes.
@Component({
selector: 'app-list', standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
template: `@for (t of todos; track t.id) { <li>{{ t.title }}</li> }`,
})
export class ListComponent {
@Input() todos: Todo[] = [];
}

//changeDetectorRef.markForCheck() tells that component needs to checked for changes, and it will be checked in the next change detection cycle.
//changeDetectorRef.detectChanges() tells the component needs to checked for changes,it will be checked immediately


// F2. [4 marks]
// Explain the difference between switchMap, mergeMap, concatMap and exhaustMap, and give ONE concrete real-
// world scenario where each is the correct choice.

//Observale is nothing but it is a stream of data, that can arrive over a time,and it is used to handle the asynchronous data.

//SwitchMap->in Observable , if we use 2 http calls, it will process the response of first http call,
// by that first http call the second http is processed, 
//Ex:first observable is search box, we use get request to get the data, and second observable is put request
//  to update  the date based on first observable response, we can use switchMap to process second response.

//MergeMap->in Observable, it is used to multiple http calls, it will process the http calls in parallel,
//  and it will return the response of multiple http calls.
//Ex: if we have 3 diff http calls, we want to process on same time, we can use mergemap to return the 
// response of http calls

//ConcatMap->in Observable, if we have a multiple http calls,it will process the response in order,
//  it will wait for the first http response to complete, and then move into next http call , and 
// then return the response of http calls.


//ExhaustMap->in Observable,if we have multiple http calls, it will process the first http call, and 
// it will ignore the next http calls and it will return the response of fisrt http call, and remove the second http call.

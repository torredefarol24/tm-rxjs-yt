import {Observable} from 'rxjs';


let source = new Observable( (observer: any) => {
  // console.log("Fresh observables ", observer);
  observer.next("Soemthing weird"),
  observer.next("Another thing, I kind of get it now");
  observer.complete();
});

let freshObservableExports = {
  dummySource : source
}

export default freshObservableExports

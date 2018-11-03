import {Observable} from 'rxjs';


let source = new Observable( (observer: any) => {
  // console.log("Fresh observables ", observer);
  observer.next("Soemthing weird")
});

source.subscribe(
  (val : any) => {
    console.log("Fresh New OBS ", val)
  },
  (err) => {
    console.error(err)
  },
  () => {
    console.log("Fresh Observable Completed")
  }
)

export default source;

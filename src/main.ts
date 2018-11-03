import { fromEvent } from 'rxjs';
import {Observable} from 'rxjs';
import { from } from 'rxjs';
import fetchCalls from "./ajax";
import FreshObservables from './freshObservables';
import PromiseObservables from './promiseObservables';


var message = document.getElementById("message");
var numbersOutput = document.getElementById("outputNumbers");
var todosOutput = document.getElementById("outputTodos");
var promiseOutput = document.getElementById("promiseOutput");
var freshObsOutput = document.getElementById("freshObsOutput");


var theBtn = document.getElementById("theBtn");
var btnStream = fromEvent(theBtn, "click");

btnStream.subscribe( 
  (e) => {
    message.innerHTML = "Clicked";
    // console.log("Clicked") ;
  },
  (err) => {
    message.innerHTML = err ;
    console.log("Error") ;
  } ,
  () => {
    message.innerHTML = "Completed" ;
    console.log("Completed");
  }
)




var theInput = document.getElementById("theInput");
var inputStream = fromEvent(theInput, "keyup");

inputStream.subscribe( 
  (e : any) => {
    message.innerHTML = e.target.value;
    // console.log("Input stream ", e.target.value) ;
  },
  (err) => {
    message.innerHTML = err ;
    console.log("Error") ;
  } ,
  () => {
    message.innerHTML = "Completed" ;
    console.log("Completed");
  }
)




var numbers = [35,24,36,47,15,75,63,52,84]
var numberStream = from(numbers);

numberStream.subscribe(
  (v : any) => {
    // console.log("Number Stream ", v)
    var liElem = document.createElement("li");
    var textNode = document.createTextNode(v);
    liElem.appendChild(textNode)
    numbersOutput.appendChild(liElem)
  },
  (err) => {
    console.log(err);
    message.innerHTML = err;
  },
  () => {
    console.log("number stream completed");
    message.innerHTML = "Number Stream Completed"
  }
)



let dummyTodos = fetchCalls.todosFromApi();
var todosStream = from(dummyTodos);
todosStream.subscribe(
  (todos: any) => {
    todos.forEach(todo => {
      // console.log("Todo Stream ", todo);
      var liElem = document.createElement("li");
      var textNode = document.createTextNode(todo.title);
      liElem.appendChild(textNode)
      todosOutput.appendChild(liElem)
    })
    
  },
  (err) => {
    console.log(err);
    message.innerHTML = err;
  },
  () => {
    console.log("Todo stream completed");
    message.innerHTML = "Todo Stream Completed"
  }
)


var newSet = new Set(["Hey", 45, {title : "interesting"}]);
var setSteam = from(newSet);

setSteam.subscribe(
  (data : any) => {
    // console.log("Set Stream ", data)
  },
  (err) => {
    console.error(err);
    message.innerHTML = err;
  },
  () => {
    console.log("Set stream completed");
    message.innerHTML = "Set Stream Completed"
  }
)


let dummySource = FreshObservables.dummySource;
dummySource.subscribe( 
  (data: any) => {
    let chunks = [];
    chunks.push(data);

    chunks.forEach( item => {
      var liElem = document.createElement("li");
      var textNode = document.createTextNode(item);
      liElem.appendChild(textNode)
      freshObsOutput.appendChild(liElem)
    })
    // console.log( chunks) 
  },
  (err) => {
    console.error(err);
    message.innerHTML = err;
  }, 
  () => {
    console.log("Set stream completed");
    message.innerHTML = "Set Stream Completed"
  }
)


let dummyPromiseSource = PromiseObservables.dummyPromise;
let dummyPromiseObservable = from(dummyPromiseSource)

dummyPromiseObservable.subscribe(
  (data : any) => {
    console.log("Dummy Promise Observable using fromPromise ", data)
  },
  (err) => {
    console.error(err);
    message.innerHTML = err;
  },
  () => {
    console.log("Dummy Promise completed");
    message.innerHTML = "Dummy Promise Completed"
  }
)



let serverPromise = PromiseObservables.serverPromise;
let serverPromiseObservable = from(serverPromise);

serverPromiseObservable.subscribe(
  (data : any) => {
    // console.log("Dummy Promise Observable using fromPromise ", data)
    data.forEach( item => {
      var liElem = document.createElement("li");
      var textNode = document.createTextNode(item.username);
      liElem.appendChild(textNode)
      promiseOutput.appendChild(liElem)
    })
  },
  (err) => {
    console.error(err);
    message.innerHTML = err;
  },
  () => {
    console.log("Server Promise completed");
    message.innerHTML = "Server Promise Completed"
  }
)



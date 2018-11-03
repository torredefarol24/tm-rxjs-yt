import { fromEvent } from 'rxjs';
import {Observable} from 'rxjs';

var message = document.getElementById("message");

var theBtn = document.getElementById("theBtn");
var btnStream = fromEvent(theBtn, "click");

btnStream.subscribe( 
  (e) => {
    message.innerHTML = "Clicked";
    console.log("Clicked") ;
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
    console.log("Input stream ", e.target.value) ;
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

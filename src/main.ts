import { fromEvent } from 'rxjs';
import {Observable} from 'rxjs';

var theBtn = document.getElementById("theBtn");
var message = document.getElementById("message");

var btnStream = fromEvent(theBtn, "click");

btnStream.subscribe( 
  (e) => {
    message.innerHTML = "Clicked"
    console.log("Clicked")
  },
  (err) => {
    message.innerHTML = err
    console.log("Error")
  } ,
  () => {
    message.innerHTML = "Completed"
    console.log("Completed")
  }
)


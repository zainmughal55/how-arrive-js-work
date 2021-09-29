import { fromEvent, interval } from "rxjs";
import { map } from "rxjs/operators";
var arrive = require("arrive");
const source = interval(1000).pipe(
  map(res => {
    let div = document.createElement("div");
    div.id = "content";
    div.innerHTML = "<p>CreateElement example</p>";
    document.body.appendChild(div);
    return res;
  })
);

source.subscribe();

document.arrive("#content", function() {
  setTimeout(() => {
    document.getElementById("content").remove();
  }, 500);
});

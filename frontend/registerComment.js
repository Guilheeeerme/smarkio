const formElem = document.querySelector("form");

function registerComment(url, body) {
  let request = new XMLHttpRequest();

  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(body));

  request.onload = function () {
    console.log(this.responseText);
  };

  return request.responseText;
}

formElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = "http://localhost:3333/comments";
  const data = document.getElementById("comment").value;

  const body = {
    comment: data,
  };

  registerComment(url, body);
});

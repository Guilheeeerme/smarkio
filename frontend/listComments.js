function listComments(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();

  return request.responseText;
}

function main() {
  let data = listComments("http://localhost:3333/comments");
  let comments = JSON.parse(data);

  let output = "";

  for (let comentario of comments) {
    output += `
    <div class="container-audio">
      <span class="comment">${comentario.comment}</span>
      <button class="btn btn-primary btn-listen" onclick="play(${comentario.id})">Ouvir</button>
      <audio preload="none" id="${comentario.id}">
        <source src="${comentario.comment_url}" type="audio/wav">
      </audio>
    </div>
    `;
  }

  document.getElementById("list").innerHTML += output;
}

function play(id) {
  document.getElementById(id).play();
}

main();

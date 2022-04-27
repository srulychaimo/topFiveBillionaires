const cardContainer = document.getElementById("cardContainer");

function renderAllCards() {
  let html = "";
  json_ar.map((obj) => {
    if (obj.flag === 0) {
      html += cardHtml(obj);
    }
  });

  cardContainer.innerHTML = html;
  const cards = document.querySelectorAll(".card-img-top");
  cards.forEach((card) => {
    card.addEventListener("click", filterRemoved);
    return;
  });
}

function filterRemoved(e) {
  const filteredArr = json_ar.filter((obj) => obj.name === e.target.alt);

  for (const obj of json_ar) {
    if (obj.name === filteredArr[0].name) {
      obj.flag = 1;
    }
  }
  renderAllCards();
  console.log();
  if (cardContainer.children.length === 0) {
    takeOutAll();
  }
}

function cardHtml(obj) {
  return `
  <div class="col-8 col-sm-6 col-md-4 col-lg-2 mb-5">
  <div class="card">
        <img src="${obj.image}" class="card-img-top" alt="${obj.name}" />
        <div class="card-body">
          <h5 class="card-title">${obj.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Networth :</strong> ${obj.worth}</li>
          <li class="list-group-item"><strong>Source of income :</strong> ${obj.source}</li>
        </ul>
      </div>
      </div>`;
}

function takeOutAll() {
  cardContainer.innerHTML = `
  <div class="row justify-content-center align-items-center">
  <img
    class="img-fluid col-12 col-md-10 col-lg-8 mb-5"
    src="https://cdn.pixabay.com/photo/2018/06/26/14/38/money-3499521_960_720.jpg"
    alt="money"
  />
  <h2 class="fw-bold">
    here is your money, you tool out all of the five billionaires
  </h2>
</div>`;
}

renderAllCards();

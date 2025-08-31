import { DataModels, DataItems } from "./api.js";

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

document.addEventListener('DOMContentLoaded', async () => {
  const models = await DataModels();
  renderModels(models);
  const items = await DataItems()
  renderItems(items)
});

function renderItems(items) {
  const container = document.querySelector('.items');
  if (!container) return;

  items.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `item`;

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="#">
       <div class="item_bottom">
         <div class="left_content">
          <h3>${item.title}</h3>
            <div class="price">${item.price}$</div>
         </div>
       <div class="right">
            <div class="add">+</div>
          </div>
      </div>
    `;
    container.appendChild(itemDiv);
  });
}

function renderModels(models) {
  const container = document.querySelector('.layers')

  models.forEach((model, index) => {
    const layerDiv = document.createElement('div');
    layerDiv.classList.add(`layer${index + 1}`);

    const img = document.createElement('img');
    img.src = model.image;
    img.alt = '#';

    layerDiv.appendChild(img);
    container.appendChild(layerDiv);
  });
}


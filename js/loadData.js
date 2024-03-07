import {
  bosac,
  daysac,
  tainghe,
  pinduphong,
  apple,
  other,
} from "../assets/images/prepareData.js";
const container = document.querySelector(".product_list_container");

const dataToImport = {
  bosac,
  daysac,
  tainghe,
  pinduphong,
  apple,
  other,
};

let html = "";
dataToImport[`${container.id}`].forEach((data) => {
  html += `
            <div class="product_item col col-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <div class="card h-100">
                <img src="../assets/images/${
                  data.image
                }" class="card-img-top item_image" alt="${data.ten}" />
                <div class="card-body d-flex justify-content-between flex-column">
                  <h5 class="card-title item_name">${data.ten}</h5>
                  <p class="card-text item_price">${
                    data.gia.toLocaleString("en", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 3,
                    }) + " VND"
                  }</p>
                </div>
                <div class="card-footer border-0 d-grid">
                    <a href="#" class="btn btn-primary item_link_btn border-0 position-relative" id=${
                      data.id
                    }
                      >Xem chi tiết</a
                    >
                  </div>
              </div>
            </div>
            `;
});
container.querySelector(".row").innerHTML = html;

const detailBtns = document.querySelectorAll(".item_link_btn");
detailBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.id);
    localStorage.setItem("productId", btn.id);
    window.location.href = "./detailProduct.html";
  });
});

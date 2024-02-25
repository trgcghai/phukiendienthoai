import { bosac } from "../assets/images/prepareData.js";
const productContainer = document.querySelector(".product_list_container");
const filterBtns = document.querySelectorAll(".filter_btn");
const sortBtns = document.querySelectorAll(".sort_btn");
const under500Btn = document.getElementById("under500");
const under1mBtn = document.getElementById("under1m");
const under2mBtn = document.getElementById("under2m");
const above2mBtn = document.getElementById("above2m");
const nameAscBtn = document.getElementById("name_asc");
const nameDescBtn = document.getElementById("name_desc");
const priceAscBtn = document.getElementById("price_asc");
const priceDescBtn = document.getElementById("price_desc");

const loadData = (container, datas) => {
  let html = "";
  datas.forEach((data) => {
    html += `
            <div class="product_item">
              <div class="card h-100">
                <img src="../assets/images/${
                  data.image
                }" class="card-img-top item_image" alt="${data.ten}" />
                <div class="card-body">
                  <h5 class="card-title item_name">${data.ten}</h5>
                  <p class="card-text item_price">${
                    data.gia.toLocaleString("en", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 3,
                    }) + " VND"
                  }</p>
                </div>
                <div class="card-footer d-grid">
                    <a href="#" class="btn btn-primary item_link_btn"
                      >Xem chi tiết</a
                    >
                  </div>
              </div>
            </div>
            `;
  });
  container.querySelector(".product_list").innerHTML = html;
};

const filterData = (data, condition) => {
  return data.filter((item) => {
    if (condition === "under500") {
      return item.gia <= 500000;
    } else if (condition === "under1m") {
      return item.gia <= 1000000;
    } else if (condition === "under2m") {
      return item.gia <= 2000000;
    } else if (condition === "above2m") {
      return item.gia >= 2000000;
    }
  });
};

const sortData = (data, dir) => {
  return (data = data.sort((a, b) => {
    if (dir === "name_asc") {
      return a.ten.localeCompare(b.ten);
    } else if (dir === "name_desc") {
      return b.ten.localeCompare(a.ten);
    } else if (dir === "price_asc") {
      return a.gia - b.gia;
    } else if (dir === "price_desc") {
      return b.gia - a.gia;
    }
  }));
};

const loadDataWithCondition = () => {
  const activeBtns = document.querySelectorAll(".active");

  if (activeBtns.length === 0) {
    loadData(productContainer, bosac);
  } else if (activeBtns.length === 1) {
    let condition = activeBtns[0].id;
    switch (condition) {
      case "under500":
        loadData(
          productContainer,
          [...bosac].filter((data) => data.gia <= 500000)
        );
        break;
      case "under1m":
        loadData(
          productContainer,
          [...bosac].filter((data) => data.gia <= 1000000)
        );
        break;
      case "under2m":
        loadData(
          productContainer,
          [...bosac].filter((data) => data.gia <= 2000000)
        );
        break;
      case "above2m":
        loadData(
          productContainer,
          [...bosac].filter((data) => data.gia >= 2000000)
        );
        break;
      case "name_asc":
        loadData(
          productContainer,
          [...bosac].sort((a, b) => a.ten.localeCompare(b.ten))
        );
        break;
      case "name_desc":
        loadData(
          productContainer,
          [...bosac].sort((a, b) => b.ten.localeCompare(a.ten))
        );
        break;
      case "price_asc":
        loadData(
          productContainer,
          [...bosac].sort((a, b) => a.gia - b.gia)
        );
        break;
      case "price_desc":
        loadData(
          productContainer,
          [...bosac].sort((a, b) => b.gia - a.gia)
        );
        break;
    }
  } else if (activeBtns.length === 2) {
    let data = filterData([...bosac], activeBtns[0].id);
    data = sortData(data, activeBtns[1].id);
    loadData(productContainer, data);
  }
};

under500Btn.addEventListener("click", () => {
  if (under500Btn.classList.contains("active")) {
    under500Btn.classList.remove("active");
  } else {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    under500Btn.classList.add("active");
  }
  loadDataWithCondition();
});
under1mBtn.addEventListener("click", () => {
  if (under1mBtn.classList.contains("active")) {
    under1mBtn.classList.remove("active");
  } else {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    under1mBtn.classList.add("active");
  }
  loadDataWithCondition();
});
under2mBtn.addEventListener("click", () => {
  if (under2mBtn.classList.contains("active")) {
    under2mBtn.classList.remove("active");
  } else {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    under2mBtn.classList.add("active");
  }
  loadDataWithCondition();
});
above2mBtn.addEventListener("click", () => {
  if (above2mBtn.classList.contains("active")) {
    above2mBtn.classList.remove("active");
  } else {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    above2mBtn.classList.add("active");
  }
  loadDataWithCondition();
});

nameAscBtn.addEventListener("click", () => {
  if (nameAscBtn.classList.contains("active")) {
    nameAscBtn.classList.remove("active");
  } else {
    sortBtns.forEach((btn) => btn.classList.remove("active"));
    nameAscBtn.classList.add("active");
  }
  loadDataWithCondition();
});
nameDescBtn.addEventListener("click", () => {
  if (nameDescBtn.classList.contains("active")) {
    nameDescBtn.classList.remove("active");
  } else {
    sortBtns.forEach((btn) => btn.classList.remove("active"));
    nameDescBtn.classList.add("active");
  }
  loadDataWithCondition();
});
priceAscBtn.addEventListener("click", () => {
  if (priceAscBtn.classList.contains("active")) {
    priceAscBtn.classList.remove("active");
  } else {
    sortBtns.forEach((btn) => btn.classList.remove("active"));
    priceAscBtn.classList.add("active");
  }
  loadDataWithCondition();
});
priceDescBtn.addEventListener("click", () => {
  if (priceDescBtn.classList.contains("active")) {
    priceDescBtn.classList.remove("active");
  } else {
    sortBtns.forEach((btn) => btn.classList.remove("active"));
    priceDescBtn.classList.add("active");
  }
  loadDataWithCondition();
});

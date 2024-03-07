import {
  bosac,
  daysac,
  tainghe,
  pinduphong,
  apple,
  other,
} from "../assets/images/prepareData.js";
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

const dataToImport = {
  bosac,
  daysac,
  tainghe,
  pinduphong,
  apple,
  other,
};

const loadData = (container, datas) => {
  let html = "";
  datas.forEach((data) => {
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

const loadDataWithCondition = (dataToLoad) => {
  const activeBtns = document.querySelectorAll(".active");

  if (activeBtns.length === 0) {
    loadData(productContainer, dataToLoad);
  } else if (activeBtns.length === 1) {
    let condition = activeBtns[0].id;
    switch (condition) {
      case "under500":
        loadData(
          productContainer,
          [...dataToLoad].filter((data) => data.gia <= 500000)
        );
        break;
      case "under1m":
        loadData(
          productContainer,
          [...dataToLoad].filter((data) => data.gia <= 1000000)
        );
        break;
      case "under2m":
        loadData(
          productContainer,
          [...dataToLoad].filter((data) => data.gia <= 2000000)
        );
        break;
      case "above2m":
        loadData(
          productContainer,
          [...dataToLoad].filter((data) => data.gia >= 2000000)
        );
        break;
      case "name_asc":
        loadData(
          productContainer,
          [...dataToLoad].sort((a, b) => a.ten.localeCompare(b.ten))
        );
        break;
      case "name_desc":
        loadData(
          productContainer,
          [...dataToLoad].sort((a, b) => b.ten.localeCompare(a.ten))
        );
        break;
      case "price_asc":
        loadData(
          productContainer,
          [...dataToLoad].sort((a, b) => a.gia - b.gia)
        );
        break;
      case "price_desc":
        loadData(
          productContainer,
          [...dataToLoad].sort((a, b) => b.gia - a.gia)
        );
        break;
    }
  } else if (activeBtns.length === 2) {
    let data = filterData([...dataToLoad], activeBtns[0].id);
    data = sortData(data, activeBtns[1].id);
    loadData(productContainer, data);
  }
};

const handleActionClick = (buttonGroup, button, data) => {
  if (button.classList.contains("active")) {
    button.classList.remove("active");
  } else {
    buttonGroup.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  }
  loadDataWithCondition(data);
};

under500Btn.addEventListener("click", () => {
  handleActionClick(
    filterBtns,
    under500Btn,
    dataToImport[`${productContainer.id}`]
  );
});
under1mBtn.addEventListener("click", () => {
  handleActionClick(
    filterBtns,
    under1mBtn,
    dataToImport[`${productContainer.id}`]
  );
});
under2mBtn.addEventListener("click", () => {
  handleActionClick(
    filterBtns,
    under2mBtn,
    dataToImport[`${productContainer.id}`]
  );
});
above2mBtn.addEventListener("click", () => {
  handleActionClick(
    filterBtns,
    above2mBtn,
    dataToImport[`${productContainer.id}`]
  );
});

nameAscBtn.addEventListener("click", () => {
  handleActionClick(
    sortBtns,
    nameAscBtn,
    dataToImport[`${productContainer.id}`]
  );
});
nameDescBtn.addEventListener("click", () => {
  handleActionClick(
    sortBtns,
    nameDescBtn,
    dataToImport[`${productContainer.id}`]
  );
});
priceAscBtn.addEventListener("click", () => {
  handleActionClick(
    sortBtns,
    priceAscBtn,
    dataToImport[`${productContainer.id}`]
  );
});
priceDescBtn.addEventListener("click", () => {
  handleActionClick(
    sortBtns,
    priceDescBtn,
    dataToImport[`${productContainer.id}`]
  );
});

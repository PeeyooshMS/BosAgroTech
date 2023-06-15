const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// fill orders in table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                        <td>${order.invoiceNo}</td>
                        <td>${order.customerName}</td>
                        <td>${order.serviceType}</td>
                        <td>${order.serviceStatus}</td>
                        <td class="${order.paymentStatus === 'Due' ? 'danger' : order.paymentStatus === 'Partial' ? 'warning': 'success'}">${order.paymentStatus}</td>
                        <td class="color-logo">Details</td>
                    `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
});

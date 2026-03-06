const uiMap = {
  "Admin Portal": [
    { name: "Dashboard", layout: ["metrics", "table", "chart"] },
    { name: "Agent Management", layout: ["search", "table", "actions"] },
    { name: "Supplier Management", layout: ["search", "table", "actions"] },
    { name: "Booking Management", layout: ["filters", "table", "actions"] },
    { name: "Financial Management", layout: ["metrics", "table", "form"] },
    { name: "Reports", layout: ["filters", "chart", "table"] }
  ],
  "Agent Portal": [
    { name: "Agent Dashboard", layout: ["metrics", "search", "table"] },
    { name: "Flight Search", layout: ["form", "actions"] },
    { name: "Flight Results", layout: ["filters", "table", "actions"] },
    { name: "Passenger Details", layout: ["form", "actions"] },
    { name: "My Bookings", layout: ["filters", "table"] },
    { name: "Wallet", layout: ["metrics", "table", "actions"] }
  ],
  "Supplier Portal": [
    { name: "Supplier Dashboard", layout: ["metrics", "table"] },
    { name: "Service Management", layout: ["form", "actions"] },
    { name: "Inventory Management", layout: ["calendar", "table"] }
  ]
};

const labels = {
  metrics: ["Total Agents", "Total Bookings", "Revenue", "Wallet Balance"],
  search: ["Quick Search", "Keywords / Destination"],
  filters: ["Status Filter", "Date Range", "Service Type"],
  table: ["Booking ID", "Service", "Status", "Amount"],
  chart: ["Booking Trend", "Revenue Split"],
  form: ["Input Fields", "Validation State"],
  actions: ["Create", "Update", "Confirm / Cancel"],
  calendar: ["Availability Calendar", "Price Overrides"]
};

const state = {
  portal: Object.keys(uiMap)[0],
  screen: 0,
  filter: ""
};

const portalTabs = document.getElementById("portalTabs");
const screenList = document.getElementById("screenList");
const portalName = document.getElementById("portalName");
const screenName = document.getElementById("screenName");
const screenCounter = document.getElementById("screenCounter");
const canvas = document.getElementById("canvas");
const searchInput = document.getElementById("searchInput");

function drawTabs() {
  portalTabs.innerHTML = "";
  Object.keys(uiMap).forEach((portal) => {
    const tab = document.createElement("button");
    tab.className = `tab ${portal === state.portal ? "active" : ""}`;
    tab.textContent = portal;
    tab.onclick = () => {
      state.portal = portal;
      state.screen = 0;
      state.filter = "";
      searchInput.value = "";
      render();
    };
    portalTabs.appendChild(tab);
  });
}

function getVisibleScreens() {
  const screens = uiMap[state.portal];
  return screens.filter((screen) =>
    screen.name.toLowerCase().includes(state.filter.toLowerCase())
  );
}

function drawScreens() {
  const screens = getVisibleScreens();
  const max = Math.max(screens.length - 1, 0);
  state.screen = Math.min(state.screen, max);

  screenList.innerHTML = "";
  screens.forEach((screen, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = index === state.screen ? "active" : "";
    btn.textContent = screen.name;
    btn.onclick = () => {
      state.screen = index;
      drawScreens();
      drawPreview();
    };
    li.appendChild(btn);
    screenList.appendChild(li);
  });

  if (!screens.length) {
    const li = document.createElement("li");
    li.textContent = "No matching screens.";
    screenList.appendChild(li);
  }
}

function drawPreview() {
  const screens = getVisibleScreens();
  const screen = screens[state.screen];

  if (!screen) {
    portalName.textContent = state.portal;
    screenName.textContent = "No screen selected";
    screenCounter.textContent = "0 / 0";
    canvas.innerHTML = "<p>No preview available for this filter.</p>";
    return;
  }

  portalName.textContent = state.portal;
  screenName.textContent = screen.name;
  screenCounter.textContent = `${state.screen + 1} / ${screens.length}`;

  canvas.innerHTML = "";

  screen.layout.forEach((blockType) => {
    const row = document.createElement("div");
    row.className = `row ${blockType === "metrics" ? "metrics" : ""}`;

    labels[blockType].forEach((label) => {
      const block = document.createElement("div");
      block.className = "block";
      block.innerHTML = `<h4>${label}</h4><p>${screen.name} component</p>`;
      row.appendChild(block);
    });

    canvas.appendChild(row);
  });
}

function render() {
  drawTabs();
  drawScreens();
  drawPreview();
}

searchInput.addEventListener("input", (event) => {
  state.filter = event.target.value;
  state.screen = 0;
  drawScreens();
  drawPreview();
});

render();

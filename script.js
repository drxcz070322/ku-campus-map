const map = L.map("map").setView([37.5894, 127.0324], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

const buildings = [
  {
    name: "중앙광장",
    lat: 37.5894,
    lng: 127.0324,
    info: "고려대학교 대표 중심 공간"
  },
  {
    name: "중앙도서관",
    lat: 37.5887,
    lng: 127.0318,
    info: "대학 본관 도서관"
  },
  {
    name: "과학도서관",
    lat: 37.5899,
    lng: 127.0332,
    info: "자연계열 도서관"
  },
  {
    name: "공학관",
    lat: 37.5902,
    lng: 127.0338,
    info: "공과대학 건물"
  }
];

function showInfo(b) {
  document.getElementById("info").innerHTML = `
    <h3>${b.name}</h3>
    <p>${b.info}</p>
    <p>좌표: ${b.lat}, ${b.lng}</p>
  `;
}

buildings.forEach((b) => {
  const marker = L.marker([b.lat, b.lng]).addTo(map);

  marker.on("click", () => {
    showInfo(b);
  });
});

document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const found = buildings.find(b =>
    b.name.toLowerCase().includes(value)
  );

  if (found) {
    map.setView([found.lat, found.lng], 18);
    showInfo(found);
  }
});

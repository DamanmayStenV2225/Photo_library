const con = document.querySelector(".pc");

for (let i = 1; i <= 14; i++) {
  const img = document.createElement("img");
  img.loading = "lazy";
  img.src = `images/img${i}.jpg`;
  con.appendChild(img);
}

const bp = document.createElement("p");
bp.className = "border";
bp.textContent = "For more.";
con.appendChild(bp);
        
const ad = document.createElement("div");
ad.className = "ad-slot";
con.appendChild(ad);

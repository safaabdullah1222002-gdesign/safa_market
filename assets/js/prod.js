
const products = [
  { id: 1, name: "كرسي مريح فاخر", price: "٢٥٠ ر.س", img: "chair.png" },
  { id: 2, name: "طاولة قهوة خشبية", price: "٤٥٠ ر.س", img: "table.png" },
  { id: 3, name: "مصباح أرضي مودرن", price: "١٨٠ ر.س", img: "lamp.png" },
  { id: 4, name: "ستائر مخمل بيج", price: "٣٢٠ ر.س", img: "cartin.png" },
  { id: 5, name: "كنبة ثلاثية رمادي", price: "١,٢٠٠ ر.س", img: "sofa.png" },
  { id: 6, name: "سجادة صوف يدوية", price: "٨٥٠ ر.س", img: "ca.png" },
  { id: 7, name: "لوحة جدارية تجريدية", price: "١٢٠ ر.س", img: "board.png" },
  { id: 8, name: "خزانة كتب خشبية", price: "٦٠٠ ر.س", img: "wa.png" },
  { id: 9, name: "طقم شموع عطرية", price: "٧٥ ر.س", img: "candles.png" }
];


const prodparent=document.getElementById("prodparent")

if (prodparent){

  prodparent.innerHTML= products.map(p => `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow-sm">
        <img src="/assets/img/${p.img}" class="card-img-top" alt="${p.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.name}</h5>

          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="fw-bold fs-5">${p.price}</span>
          </div>

          <a href="detail-chair.html?id=${p.id}" 
             class="btn btn-outline-primary w-100 mb-2">
             عرض التفاصيل
          </a>

          <button class="btn btn-primary w-100">
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  `).join("")

}




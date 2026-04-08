import ConstructorIO from "@constructor-io/constructorio-client-javascript";

      const productsData = [
        { id: "5097797"}, { id: "5097800"}, { id: "5098130"}, { id: "5085365"}
      ];
const products = productsData.map(p => p.id);

const productChunks = [];
for (let i = 0; i < products.length; i += 20) {
  productChunks.push(products.slice(i, i + 20));
}

const handleResponse = (response) => {
    const firstItem = response.response.results[0];
  if (firstItem) {
    console.log(firstItem.data);
  }
  const mergedProductData = response.response.results.map(item => {
    const obj = productsData.find(o => o.id === item.data.id);
    return { ...item, ...obj };
  });

  mergedProductData.forEach((item) => {
   
    const productElement = document.querySelector(`[data-product="${item.data.id}"]`);
    if (!productElement) return;

  const price = item.data.price ?? 0;
const images = item.data.productImages || [];
const imageUrl = (images[0] || "").split("?")[0];
const imageUrl2 = (images[1] || "").split("?")[0];

const imgEl = productElement.querySelector("img");
imgEl.src = imageUrl;

if (imageUrl2) {
  const preload = new Image();
  preload.src = imageUrl2;

  imgEl.addEventListener("mouseenter", () => imgEl.src = imageUrl2);
  imgEl.addEventListener("mouseleave", () => imgEl.src = imageUrl);
}

    // let imageUrl = item.data.image_url || "";
    // imageUrl = imageUrl.split("?")[0];
const relativeUrl = item.data.url.replace(/^https?:\/\/www\.plaisio\.gr\/?/, "");
const clean = (str = "") => str.replace(/\/+$/, "").replace(/^\/+/, "");

const finalUrl = [
  "https://www.plaisio.gr/product",
  clean(item.data.primaryCategoryPath),
  clean(relativeUrl),
].join("/");
  productElement.querySelectorAll("a").forEach(a => a.href = finalUrl);
  productElement.querySelector("img").src = imageUrl;
  productElement.querySelector(".price").innerText = price.toLocaleString('el-GR') + '€';
  productElement.querySelector(".title").innerText = item.value || "";
  });
};

async function getResultsForIds(apiKey, ids, success) {
  const client = new ConstructorIO({ apiKey });
  const response = await client.browse.getBrowseResultsForItemIds(ids, { resultsPerPage: 100 });
  success(response);
}

productChunks.forEach(chunk => {
  getResultsForIds("key_Wl31DW52SembqpV7", chunk, handleResponse)
    .catch(err => console.error("Constructor.io error:", err));
});

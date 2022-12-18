var listeProduits = [
    {
      name: "Coca cola",
      price: 16,
      description:
        "Saepe laudantium architecto nobis sequi minus vel, veritatis, soluta optio totam asperiores error?",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    },
    {
      name: "Pepsi",
      price: 12,
      description:
        "Saepe laudantium architecto nobis sequi minus vel, veritatis, soluta optio totam asperiores error?",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    },
    {
      name: "Iphone",
      price: 1200,
      description:
        "Saepe laudantium architecto nobis sequi minus vel, veritatis, soluta optio totam asperiores error?",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    },
  ];
  var productHTML = document.getElementById("products");
  
  for (let i = 0; i < listeProduits.length; i++) {
    let produit = listeProduits[i];
  
    productHTML.innerHTML += `<div id="product">
    <img src=${produit.image} alt="" width=200px>
    <h2>${produit.name}</h2>
    <p>${produit.description}</p>
    <div>
        <button>Ajouter au panier</button>
        <h6>${produit.price}</h6>
    </div>
  </div>`;
  }
  
  function addProduct(event) {
    event.preventDefault();
  
    let nom = document.getElementById("nom").value;
    let prix = document.getElementById("prix").value;
    let description = document.getElementById("description").value;
  
    if (nom !== "" && prix !== "" && description !== "") {
      let produit = {
        name: nom,
        price: prix,
        description: description,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
      };
  
      listeProduits.push(produit);
  
      productHTML.innerHTML += `<div id="product">
    <img src=${produit.image} alt="" width=200px>
    <h2>${produit.name}</h2>
    <p>${produit.description}</p>
    <div>
        <button>Ajouter au panier</button>
        <h6>${produit.price}</h6>
    </div>
  </div>`;
    } else {
      alert("you cant send an empty input");
    }
  }
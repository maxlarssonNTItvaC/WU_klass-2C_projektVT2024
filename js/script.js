function addToCart(product) {
    // Hämta produktinformation (t.ex. namn, pris, ID)
    const name = product.find(".product-name").text();
    const price = product.find(".product-price").text();
    const id = product.data("id");
  
    // Skapa ett objekt för varukorgen
    const cartItem = {
      name,
      price,
      id,
      quantity: 1,
    };
  
    // Skicka objektet till varukorgssidan (t.ex. via AJAX)
    $.ajax({
      url: "/varukorg/add",
      method: "POST",
      data: cartItem,
      success: function() {
        // Visa en bekräftelse till användaren
        alert("Produkten har lagts till i varukorgen!");
      },
    });
  }

  $(".product").on("click", function() {
    addToCart($(this));
  });
  
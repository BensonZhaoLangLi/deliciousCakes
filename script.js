/* Add any JavaScript you need to this file. */

window.onload = function() {
  var productContainer = document.getElementById('productContainer'); //flexbox container
  var modal = document.getElementById('enlargedProduct');
  //create a box for each product and append it to the container
  // eslint-disable-next-line no-undef
  products.forEach(function(element) {
    var product = document.createElement('div');
    var productImg = document.createElement('img');
    var productName = document.createElement('h1');
    var productDesc = document.createElement('p');
    var productCat = document.createElement('p');
    var productPrice = document.createElement('p');

    productContainer.appendChild(product);
    product.appendChild(productImg);
    product.appendChild(productName);
    product.appendChild(productDesc);
    product.appendChild(productCat);
    product.appendChild(productPrice);

    productImg.setAttribute('src', './images/' + element.Code + '.jpg');
    productImg.setAttribute('alt', element.Name);
    productImg.setAttribute('id', 'productImg');
    product.setAttribute('class', 'product ' + element.Category);
    productDesc.setAttribute('class', 'description');
    productCat.setAttribute('class', 'category');
    productPrice.setAttribute('class', 'price');
    productName.innerHTML = element.Name;
    productDesc.innerHTML = element.Description;
    productCat.innerHTML = 'Category: ' + element.Category;
    productPrice.innerHTML = 'CAD ' + element.Price;

    /*Allow enlarged image to show on screen*/

    var modalImg = document.getElementById('largeImage');
    var captionText = document.getElementById('caption');

    productImg.onclick = function() {
      modal.style.display = 'block';
      modalImg.src = productImg.src;
      captionText.innerHTML = productImg.alt;
    };
  });

  // Close button for pop-up image
  var span = document.getElementsByClassName('close')[0];

  span.onclick = function() {
    modal.style.display = 'none';
  };

  /*Change the style of the currently active button*/
  var btnContainer = document.getElementById('btnContainerInner');
  var btns = btnContainer.getElementsByClassName('btn');

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      var current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active', '');
      this.className += ' active';
    });
  }

  /*Implement btns to display products belonging to a certain class(cakes, cakes)*/
  var btnAll = document.getElementById('btnAll');
  var btnCakes = document.getElementById('btnCakes');
  var btnCupcakes = document.getElementById('btnCupcakes');
  var productBoxes = document.getElementsByClassName('product'); //select the addresses of all the newly created product divs

  //display all products
  btnAll.addEventListener('click', function() {
    for (i = 0; i < productBoxes.length; i++) {
      if (productBoxes[i].classList.contains('hidden')) {
        productBoxes[i].classList.remove('hidden');
      }
    }
  });

  //display only cakes
  btnCakes.addEventListener('click', function() {
    for (i = 0; i < productBoxes.length; i++) {
      //make products that are not cakes hidden if they aren't already hidden
      if (
        !productBoxes[i].classList.contains('Cakes') &&
        !productBoxes[i].classList.contains('hidden')
      ) {
        productBoxes[i].classList.add('hidden');
      } else {
        //make cakes not hidden if they are hidden
        if (productBoxes[i].classList.contains('Cakes')) {
          productBoxes[i].classList.remove('hidden');
        }
      }
    }
  });
  //display only cupcakes
  btnCupcakes.addEventListener('click', function() {
    for (i = 0; i < productBoxes.length; i++) {
      if (
        !productBoxes[i].classList.contains('Cupcakes') &&
        !productBoxes[i].classList.contains('hidden')
      ) {
        productBoxes[i].classList.add('hidden');
      } else {
        if (productBoxes[i].classList.contains('Cupcakes')) {
          productBoxes[i].classList.remove('hidden');
        }
      }
    }
  });
};

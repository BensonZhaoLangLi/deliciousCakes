window.onload = function() {
  var questionBtn = document.getElementById('formTopic-1');
  var commentBtn = document.getElementById('formTopic-2');
  var orderBtn = document.getElementById('formTopic-3');
  var orderNumberInput = document.getElementById('orderNumber');

  /*Removing and adding hidden attribute to order number input, depending on radio input*/
  questionBtn.onclick = function() {
    console.log('clicked');
    orderNumberInput.classList.add('hidden');
  };

  commentBtn.onclick = function() {
    console.log('clicked');
    orderNumberInput.classList.add('hidden');
  };

  orderBtn.onclick = function() {
    console.log('clicked');
    orderNumberInput.classList.remove('hidden');
  };

  /*Validation for contact us form*/
  var contactForm = document.getElementById('contactForm');

  contactForm.onsubmit = function() {
    var errorMsg = document.getElementById('error');

    /*remove error style on all input boxes, previously invalid input boxes will no longer be highlighted*/
    var inputBoxes = document.contactForm.getElementsByTagName('input');
    console.log(inputBoxes.length);
    for (var i = 0; i < inputBoxes.length; i++) {
      inputBoxes[i].classList.remove('error');
    }

    /*Validation for Canadian postal code: -A1A 1A1 (with or without space between) -can't contain  D, F, I, O, Q or U -required*/
    var postalCode = document.contactForm.postalCode.value.trim();
    var postalCodeRegex = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/;

    if (postalCode === '') {
      document.contactForm.postalCode.classList.add('error');
      errorMsg.innerHTML = '*Postal code is required.';
      contactForm.postalCode.focus();
      return false;
    }

    if (!postalCodeRegex.test(postalCode)) {
      document.contactForm.postalCode.classList.add('error');
      errorMsg.innerHTML = '*Postal code invalid format.';
      contactForm.postalCode.focus();
      return false;
    }

    /*validation for orderNo: -required -must only contain numbers*/
    var orderNo = document.contactForm.orderNumber.value.trim();

    if (orderNo === '') {
      document.contactForm.orderNumber.classList.add('error');
      errorMsg.innerHTML = '*Order number is required.';
      return false;
    }

    if (parseInt(orderNo) !== orderNo) {
      document.contactForm.orderNumber.classList.add('error');
      errorMsg.innerHTML = '*Order number must only contain numbers.';
      return false;
    }

    return true;
  };
};

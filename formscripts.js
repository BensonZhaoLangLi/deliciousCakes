window.onload = function() {
  var questionBtn = document.getElementById('formTopic-1');
  var commentBtn = document.getElementById('formTopic-2');
  var orderBtn = document.getElementById('formTopic-3');
  var orderNumberInput = document.getElementById('orderNumber');

  //Removing and adding hidden attribute to order number input, depending on radio option
  questionBtn.onclick = function() {
    orderNumberInput.classList.add('hidden');
  };

  commentBtn.onclick = function() {
    orderNumberInput.classList.add('hidden');
  };

  orderBtn.onclick = function() {
    orderNumberInput.classList.remove('hidden');
  };

  //Validation for Contact Us form
  var contactForm = document.getElementById('contactForm');
  var errorMsg = document.getElementById('error');

  contactForm.onsubmit = function() {
    //remove error style on all input boxes, previously invalid input boxes will no longer be highlighted
    var inputBoxes = document.contactForm.getElementsByTagName('input');
    var textAreaInput = document.contactForm.getElementsByTagName('textarea');

    for (var i = 0; i < inputBoxes.length; i++) {
      inputBoxes[i].classList.remove('error');
    }
    textAreaInput[0].classList.remove('error');

    //validation for first name: -is required -must only contain alphabet or hyphen(-)
    var validNameChars = true;
    var firstName = contactForm.firstName.value.trim();

    if (firstName === '') {
      document.contactForm.firstName.classList.add('error');
      errorMsg.innerHTML = '*First name is required.';
      contactForm.firstName.focus();
      return false;
    }

    firstName = firstName.toUpperCase(); //easier to check charcode range if uppercase

    for (i = 0; i < firstName.length; i++) {
      if (
        !(
          (firstName.charCodeAt(i) > 64 && firstName.charCodeAt(i) < 91) ||
          firstName.charCodeAt(i) === 45
        )
      ) {
        validNameChars = false;
      }
    }

    if (validNameChars === false) {
      document.contactForm.firstName.classList.add('error');
      errorMsg.innerHTML = '*First name must only contain letters or hyphens(-).';
      contactForm.firstName.focus();
      return false;
    }
    //Last name validation: -is required -contains only letters or hyphen
    validNameChars = true;
    var lastName = contactForm.lastName.value.trim();

    if (lastName === '') {
      document.contactForm.lastName.classList.add('error');
      errorMsg.innerHTML = '*Last name is required.';
      contactForm.lastName.focus();
      return false;
    }

    lastName = lastName.toUpperCase(); //easier to check charcode range if uppercase

    for (i = 0; i < lastName.length; i++) {
      if (
        !(
          (lastName.charCodeAt(i) > 64 && lastName.charCodeAt(i) < 91) ||
          lastName.charCodeAt(i) === 45
        )
      ) {
        validNameChars = false;
      }
    }

    if (validNameChars === false) {
      document.contactForm.lastName.classList.add('error');
      errorMsg.innerHTML = '*Last name must only contain letters or hyphens(-).';
      contactForm.lastName.focus();
      return false;
    }

    //Validation for email address: -is required -must follow proper email format
    var emailAddress = document.contactForm.email.value.trim();
    var emailAddressRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex sourced from https://html5-tutorial.net/form-validation/validating-email/

    if (emailAddress == '') {
      document.contactForm.email.classList.add('error');
      errorMsg.innerHTML = '*Email address is required.';
      contactForm.email.focus();
      return false;
    }
    //test if regex matches input
    if (!emailAddressRegex.test(emailAddress)) {
      document.contactForm.email.classList.add('error');
      errorMsg.innerHTML =
        '*Invalid email address format. Format should be: example@exampledomain.com';
      contactForm.email.focus();
      return false;
    }

    //Validation for address: -is required
    var address = contactForm.address.value.trim();

    if (address === '') {
      document.contactForm.address.classList.add('error');
      errorMsg.innerHTML = '*Address is required.';
      contactForm.address.focus();
      return false;
    }
    //Validation for city: -is required -can only contain letters, and symbols (.)(')(,)(-) -must contain at least 2 letters
    var city = contactForm.city.value.trim();
    var invalidSymbols = false; //test if only valid chars are in input
    var alphaCount = 0; //record number of letters

    city = city.toUpperCase();

    if (city === '') {
      document.contactForm.city.classList.add('error');
      errorMsg.innerHTML = '*Address is required.';
      contactForm.city.focus();
      return false;
    }

    for (i = 0; i < city.length; i++) {
      if (city.charCodeAt(i) > 64 && city.charCodeAt(i) < 91) {
        alphaCount += 1;
      }
      if (
        !(
          (city.charCodeAt(i) > 64 && city.charCodeAt(i) < 91) ||
          city.charCodeAt(i) == 32 ||
          city.charCodeAt(i) == 39 ||
          city.charCodeAt(i) == 44 ||
          city.charCodeAt(i) == 45 ||
          city.charCodeAt(i) == 46
        )
      ) {
        invalidSymbols = true;
      }
    }

    console.log(invalidSymbols);

    if (alphaCount < 2 && invalidSymbols == true) {
      document.contactForm.city.classList.add('error');
      errorMsg.innerHTML =
        "*Invalid city name. Must contain at least 2 letters. Must contain only letters or valid symbols: ( . )( ' )( , )( - )";
      contactForm.city.focus();
      return false;
    }
    if (alphaCount < 2) {
      document.contactForm.city.classList.add('error');
      errorMsg.innerHTML = '*Invalid city name. Must contain at least 2 letters.';
      contactForm.city.focus();
      return false;
    }
    if (invalidSymbols == true) {
      document.contactForm.city.classList.add('error');
      errorMsg.innerHTML =
        "*Invalid city name. Must contain only letters or valid symbols: ( . )( ' )( , )( - )( space )";
      contactForm.city.focus();
      return false;
    }

    //Validation for Canadian postal code: -A1A 1A1 (with or without space between) -can't contain  D, F, I, O, Q or U -is required
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
      errorMsg.innerHTML =
        '*Invalid Canadian postal code format. A1A 1A1 (space or without space in-between)';
      contactForm.postalCode.focus();
      return false;
    }
    /*validation for phone number: -is required -must not contain letters -must be valid Canadian phone number format*/
    var phoneNumber = contactForm.phoneNumber.value.trim();
    var phoneNumberRegex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;

    if (phoneNumber === '') {
      document.contactForm.phoneNumber.classList.add('error');
      errorMsg.innerHTML = '*Phone number is required.';
      contactForm.phoneNumber.focus();
      return false;
    }

    if (!phoneNumberRegex.test(phoneNumber)) {
      document.contactForm.phoneNumber.classList.add('error');
      errorMsg.innerHTML =
        '*Invalid Canadian phone number. Valid examples: 1234567890, 123-456-7890, 123.456.7890, 123 456 7890, (123) 456 7890';
      contactForm.phoneNumber.focus();
      return false;
    }

    /*validation for formTopic: -a form topic value must be selected*/
    var formTopicCheck = false;
    console.log(contactForm.formTopic[1].checked);

    for (i = 0; i < 3; i++) {
      if (contactForm.formTopic[i].checked) {
        formTopicCheck = true;
      }
    }

    console.log(formTopicCheck);

    if (formTopicCheck === false) {
      errorMsg.innerHTML = '*Topic of message must be selected.';
      return false;
    }

    /*validation for orderNo: -required if radio option "order problem" is checked -must only contain numbers*/
    var orderNo = document.contactForm.orderNumber.value.trim();

    if (contactForm.formTopic[2].checked) {
      if (orderNo === '') {
        document.contactForm.orderNumber.classList.add('error');
        errorMsg.innerHTML = '*Order number is required.';
        return false;
      }

      console.log(parseInt(orderNo));
      console.log(orderNo);

      if (parseInt(orderNo) != orderNo) {
        document.contactForm.orderNumber.classList.add('error');
        errorMsg.innerHTML = '*Order number must only contain numbers.';
        return false;
      }

      return true;
    }
    //Validation for message: -is required
    var message = contactForm.message.value.trim();

    if (message === '') {
      document.contactForm.message.classList.add('error');
      errorMsg.innerHTML = '*Please enter a message.';
      contactForm.message.focus();
      return false;
    }
  };
};

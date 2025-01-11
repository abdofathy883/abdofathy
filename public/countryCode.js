const phoneInput = document.querySelector("#phone");
  const iti = intlTelInput(phoneInput, {
    initialCountry: "auto",
    geoIpLookup: callback => {
      fetch('d8dae8adf4e32d')
        .then(resp => resp.json())
        .then(data => callback(data.country))
        .catch(() => callback("us"));
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js", // for formatting
  });


  phoneInput.addEventListener("input", () => {
    const phoneNumber = phoneInput.value.trim();

    try {
      // Parse the phone number
      const parsedNumber = libphonenumber.parsePhoneNumber(phoneNumber);

      if (parsedNumber && parsedNumber.country) {
        // Update the selected country
        iti.setCountry(parsedNumber.country.toLowerCase());
      }
    } catch (error) {
      // Handle invalid phone numbers
      console.log("Invalid phone number:", error);
    }
  });
// Countries
var country_arr = new Array(
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Angola",
  "Anguilla",
  "Antartica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Ashmore and Cartier Island",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burma",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Clipperton Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Cook Islands",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czeck Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Europa Island",
  "Falkland Islands (Islas Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern and Antarctic Lands",
  "Gabon",
  "Gambia, The",
  "Gaza Strip",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Glorioso Islands",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (Vatican City)",
  "Honduras",
  "Hong Kong",
  "Howland Island",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Ireland, Northern",
  "Israel",
  "Italy",
  "Jamaica",
  "Jan Mayen",
  "Japan",
  "Jarvis Island",
  "Jersey",
  "Johnston Atoll",
  "Jordan",
  "Juan de Nova Island",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia, Former Yugoslav Republic of",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Man, Isle of",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Midway Islands",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcaim Islands",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romainia",
  "Russia",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Scotland",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and South Sandwich Islands",
  "Spain",
  "Spratly Islands",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Tobago",
  "Toga",
  "Tokelau",
  "Tonga",
  "Trinidad",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "USA",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Virgin Islands",
  "Wales",
  "Wallis and Futuna",
  "West Bank",
  "Western Sahara",
  "Yemen",
  "Yugoslavia",
  "Zambia",
  "Zimbabwe"
);



function populateStates(countryElementId, stateElementId) {
  var selectedCountryIndex = document.getElementById(countryElementId)
    .selectedIndex;

  var stateElement = document.getElementById(stateElementId);

  stateElement.length = 0; // Fixed by Julian Woods
  stateElement.options[0] = new Option("Select State", "");
  stateElement.selectedIndex = 0;

  var state_arr = s_a[selectedCountryIndex].split("|");

  for (var i = 0; i < state_arr.length; i++) {
    stateElement.options[stateElement.length] = new Option(
      state_arr[i],
      state_arr[i]
    );
  }
}

function populateCountries(countryElementId, stateElementId) {
  // given the id of the <select> tag as function argument, it inserts <option> tags
  var countryElement = document.getElementById(countryElementId);
  countryElement.length = 0;
  countryElement.options[0] = new Option("Mumbai", "-1");
  countryElement.selectedIndex = 0;
  for (var i = 0; i < country_arr.length; i++) {
    countryElement.options[countryElement.length] = new Option(
      country_arr[i],
      country_arr[i]
    );
  }

  // Assigned all countries. Now assign event listener for the states.

  if (stateElementId) {
    countryElement.onchange = function () {
      populateStates(countryElementId, stateElementId);
    };
  }
}

populateCountries("country", "state");


window.__APP_CONFIG__ = {
  domainName: "housing.com",
  appId: "housing.brahmand",
  msClarityId: "ikna4d3lst",
  seller: "https://seller.housing.com",
  appName: "Housing Go",
  fbClientId: "783964004948836",
  digitour: "https://digitour.housing.com",
  digilite: "https://digilite.housing.com",
  hotjarId: "1135073",
  remoteEndpoint: "https://housing.com",
  gooleSheetId: "1rHAEVwN9xaYfc9KrzxdcpCFwhuvIDNbKYn0EjG4JMLw",
  adpushupId: "39057",
  gPlusClientId:
    "1059595317196-hvv73176575ru3ep3ne1183j2bc44vjp.apps.googleusercontent.com",
  testNumbers: [
    "6290559063",
    "6290559063",
    "6290559063",
    "6290559063",
    "6290559063",
  ],
  quickblox_app_id: "5",
  quickblox_auth_key: "cWD85LLTjZb7WUn",
  quickblox_auth_secret: "WWDYZh5pFuqhF25",
  quickblox_account_key: "f97LzrwYnNnhNpaAqVR8",
  pusher: {
    key: "58be07c2bee617bded3a",
    cluster: "ap2",
    authEndPoint: "/instantCall/auth",
  },
  instantCallFlag: true,
  experimentalCities: [
    "4e4400cfc73f26c55466",
    "a1a521fb5347ca015fe7",
    "747be13fe47cb8ae14c3",
    "f97f947ffae6408ac295",
    "f8f7b7494372f34973ff",
    "90d5af399d7256af0694",
    "dc69188259ba46b9d742",
    "fb19f0c23a610b713112",
    "c2783a9ace085c4fbc49",
    "57d63812cf899bb9b7d2",
    "fad9e13ebf6221c3a743",
    "3c69d8421a77f8f8b611",
    "9b970b014a2b47e6bdd6",
    "63277122045b1cec44c1",
    "df50812912a40e78be9a",
    "f6382968b4ba6805e369",
    "061b282491b3f34d8e1b",
    "50600fdbb324ad585350",
    "ff98a4a830d3c9f5fd8c",
    "9900b0f6d3f7f655356d",
  ],
  stream_api_key: "2r94jvvqen92",
  stream_app_id: "1255571",
  endPoints: {
    gql: "https://mightyzeus.housing.com/api/gql",
    zeus: "https://mightyzeus.housing.com",
    videoUrl: "https://oneconnect.housing.com/",
    experimentalGql: "https://zeusptest.housing.com/api/gql",
  },
  rsaPublicKey:
    "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA+Ohp8eyYjO5YfCsfXspJdDUa+mRgw8ttMpu7Tr32UsVxOmlLF7ID65o73pmGApXvbH7bb77M44KuVu24kBKgYGrMCCgyNcecXmu/Bsd3dBf+5sU0la5pxt7+/aaKtOBAst3az34orq2g8BGUA24XF7gZ/eyP/eufjAISpf7yftlBkAdBHkB96y0JjlOImK9r9Y8O7rD/Fp1mpCsx4NQlzvs34K5CKah52RxqcIrFEShdW6jdFb8INBmYbJJH4xyEDx0fkcqKERi1v2SFsmDCn6gVwLE7W9IwcoP0Me8iJdBvGhaKwSCGmchDR/EF9WYSBFUNVNc7tMBYaV+VGqnJKQJCrLVRri8I1JRYRtUWrpn2SJumiMiyU4dRfrHPqdjz6hYFPI36monfbfDMmSUwO8u/31/ECxIwolWZalJYqYegbrgo8b7WVByqodMIgDoEhtpLtMxEOLM9RtJIoalX5elD2JjkBwCnBbk9rPbN9G0ztuHjFCQsT0n2Z0VThCz3BxZqik7dG0s5zuQLZyLdZb9Z/vpOMfc0pL/ZYRj0mtVIlze2oDjsiRuV7ZaDm/KuF/1UosCZq247dNvmYxkFhWNP9lbEEWhFBgosnVA/ecPwSfP78D04Y/bTQ8g1q6vY0jC988O/UstDcsbrTFnlJNcobH/Lt/H63aSxetPjKDECAwEAAQ==",
  pushServerKey:
    "BN3maDZ2lnEDfjOgB3_drfz4QTjPHUZUxmMiiaDmrqgpNd-wJHNS5bOtQUaOumdsT7gZfXIJsZ8jUlfeli8d1Mc=",
  trueCallerPrivateKey: "MXwDA0ffb8aefd10c42ee82b549dcdd377bb6",
  zoomId: "OB9z1hQMTOaLKqMiFH9oGw",
  gcmSenderId: "987614280556",
  moengageId: "8O6K2BUCIK6GD80MYJK3Y81S",
  recaptchaSiteKey: "6LfqjwcbAAAAAAoeaOY_i27FVIWj5gHlDS70nRb8",
  captcha: "6LfqjwcbAAAAAAoeaOY_i27FVIWj5gHlDS70nRb8",
};

window.__APP_VERSION__ = { "housing.demand": {} };

(function () {
  window.ga =
    window.ga ||
    function () {
      (ga.q = ga.q || []).push(arguments);
    };
  ga.l = +new Date();
  ga("create", "UA-64495538-1", "auto");
  ga("set", "transport", "beacon");
})();


(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 1135073, hjsv: 6 };
})(window, document);

(function () {
  window.firePixel =
    window.firePixel ||
    function (pixelEvent) {
      (firePixel.q = firePixel.q || []).push(pixelEvent);
    };
})();

window.__DATA_LOADED__ = true;
window.__SSR_STYLES__ = {};
window.__PUBLIC_PATH__ = function (original) {
  return original.replace("//c.housingcdn.com", "//c.housingcdn.com");
};
window.__DEVICE_TYPE__ = "d";



window.console = window.console || function(t) {};

  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }


$(document).ready(function () {
  $('#so-close').click(function () {
    $('.s-soft').addClass('so-collapse');
    $('#so-open').delay(300).css('left', '0');
  });

  $('#so-open').click(function () {
    $('#so-open').css('left', '-60px');
    $('.s-soft').removeClass('so-collapse');
  });}); 


  function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}























$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});
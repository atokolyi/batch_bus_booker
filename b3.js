function restoreOptions(sType) {
  let gettingItem = browser.storage.sync.get(sType);
  gettingItem.then((res) => {
    document.getElementById(sType).value = res[sType] || "";
  });
}

function bookDate(evt) {
  // Fetch and store the values we're using
  evt.currentTarget.disabled = true;
  evt.currentTarget.innerText = evt.currentTarget.innerText + " - Done"
  let sangStop = "BUSHUBd6ZTW0SS";
  let toBoth = document.getElementById("to-sang").value;
  let toLine = toBoth.split("_")[0];
  let toStop = toBoth.split("_")[1];
  let pTime = document.getElementById("pTime").value;
  let fromBoth = document.getElementById("from-sang").value;
  let fromLine = fromBoth.split("_")[0];
  let fromStop = fromBoth.split("_")[1];
  let dTime = document.getElementById("dTime").value;

  browser.storage.sync.set({
    "to-sang": document.getElementById("to-sang").value
  });
  browser.storage.sync.set({
    "pTime": document.getElementById("pTime").value
  });
  browser.storage.sync.set({
    "from-sang": document.getElementById("from-sang").value
  });
  browser.storage.sync.set({
    "dTime": document.getElementById("dTime").value
  });
  // Get days of the week we need
  // Check how many tickets left, error out if not enough
  // Convert day of week to next date
  let bDate = evt.currentTarget.date;
  rData = '{"objects":[{"lineId":' + toLine + ',"date":"' +
    bDate + 'T' + pTime + ':00","pickupAtcocode":"' + toStop + '","dropoffAtcocode":"' + sangStop + '","direction":"Inbound","passengers":1,"tickets":[' + tId + '],"fares":[]},{"lineId":' + fromLine + ',"date":"' +
    bDate + 'T' + dTime + ':00","pickupAtcocode":"' + sangStop + '","dropoffAtcocode":"' + fromStop + '","direction":"Outbound","passengers":1,"tickets":[' + tId + '],"fares":[]}]}'
  const response = fetch("https://wellcomegenomecampus.bushub.co.uk/booking", {
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-GB,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate, br',
      'Referer': 'https://wellcomegenomecampus.bushub.co.uk/booking/create',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Origin': 'https://wellcomegenomecampus.bushub.co.uk',
      'Connection': 'keep-alive',
      'Cookie': hText,
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'TE': 'trailers'
    },
    body: rData,
  });
}

async function makeStops() {
  var select = document.createElement("select");
  select.name = "to-sang";
  select.id = "to-sang";
  // Array and loop
  var toSang = [["CC_Hills Rd, St Paul's Rd - S", '85336_0500CCITY247'],
  ['CC_Centennial Hotel, Hills Rd - S', '85336_0500CCITY022'],
  ['CC_Mowbray Rd, Mander Way - S', '85336_0500CCITY236'],
  ['CC_Opp Red Cross Lane - E', '85336_0500CCITY080'],
  ['EC_Cambridge Rd, Babraham Rd - NW - (RQ)', '85314_0500SFULB010'],
  ['EC_Gladstone Way - N (RQ)', '85314_0500CCITY350'],
  ["EC_St Andrew's Church (opp), Coldham's Ln - N (RQ)", '85314_0500CCITY341'],
  ["EC_Sainsbury's (nr bridge) - W (RQ)", '85314_0500CCITY098'],
  ['EC_Newmarket Rd / CUFC, Ditton Walk - W (RQ)', '85314_0500CCITY213'],
  ['EC_Newmarket Rd, Retail Park - W (RQ)', '85314_0500CCITY482'],
  ['NC_Buchan St Roundabout', '85334_0500CCITY426'],
  ['NC_CRC, Kings Hedges Rd - E', '85334_BUSHUBrbffbHvy'],
  ['NC_398 Milton Rd, Kendal Way - S (Temp)', '85334_0500CCITY152'],
  ['NC_Milton Rd, Ascham Rd - S  (Temp)', '85334_0500CCITY051'],
  ['NC_Milton Rd, Westbrooke Centre - S', '85334_BUSHUBvHONYOgd'],
  ['NC_Northampton St, Castle Street - W', '85334_0500CCITY275'],
  ["NC_Madingley Rd, Storey's Way - W", '85334_0500CCITY054'],
  ['NC_Madingley Rd, British Antarctic Survey - W', '85334_0500CCITY358'],
  ['SC_London Rd, Church St - N (RQ)', '85313_0500SSTAP017'],
  ['SC_London Rd, Woollards Lane - N (RQ)', '85313_0500SGRED014'],
  ['SC_Maris Green - N (RQ)', '85313_0500SGRED002'],
  ["SC_Shelford Rd, Bishop's Rd (N) RQ", '85313_0500CCITY011'],
  ['SC_High St, Anstey Way - N (RQ)', '85313_0500CCITY077'],
  ['SC_High St, Gazeley Rd -  N (RQ)', '85313_0500CCITY178'],
  ['SC_Grantchester Rd Stop - W (RQ)', '85313_0500CCITY194']]
  for (const val of toSang) {
    var option = document.createElement("option");
    option.value = val[1];
    option.text = val[0];
    select.appendChild(option);
  }
  var label = document.createElement("label");
  label.innerHTML = "Stop (AM): "
  label.htmlFor = "to-sang";
  document.getElementById("to-sang-div").appendChild(label).appendChild(select);

  select = document.createElement("select");
  select.name = "from-sang";
  select.id = "from-sang";
  // Array and loop
  var fromSang = [['CC_Red Cross Lane - W (RQ)', '85336_0500CCITY081'],
  ['CC_Mowbray Rd, Mander Way - N (RQ)', '85336_0500CCITY234'],
  ['CC_Botanic Gdns, Hills Rd - N (RQ)', '85336_0500CCITY035'],
  ["CC_Hills Rd, St Paul's Rd - N (RQ)", '85336_0500CCITY222'],
  ['EC_Newmarket Rd, River Lane - E', '85314_0500CCITY166'],
  ['EC_Newmarket Rd / CUFC, Ditton Walk - E', '85314_0500CCITY191'],
  ["EC_Coldham's Ln, Nr Sainsbury's - E", '85314_0500CCITY040'],
  ["EC_St Andrew's Church, High St - S", '85314_0500CCITY353'],
  ["EC_Fulbourn Rd, Queen Edith's Way (Robin Hood PH) - E",
    '85314_0500CCITY221'],
  ["EC_C'bridge Rd, Babraham Rd - E", '85314_0500SFULB006'],
  ['NC_Madingley Rd, British Antarctic Survey - E (RQ)', '85334_0500CCITY142'],
  ["NC_Madingley Rd, Storey's Way - E (RQ)", '85334_BUSHUBYHAuXOEU'],
  ['NC_Northampton St, Castle Street - E (RQ)', '85334_0500CCITY261'],
  ['NC_Milton Rd, Westbrook Centre - N (RQ) (Temp)', '85334_0500CCITY387'],
  ['NC_Milton Rd, Union Lane - N (RQ)', '85334_0500CCITY092'],
  ['NC_Milton Rd, Kendal Way - N (RQ)', '85334_0500CCITY140'],
  ['NC_CRC, Kings Hedges Rd - W (RQ)', '85334_0500CCITY338'],
  ['NC_Buchan St Roundabout', '85334_0500CCITY426'],
  ['SC_Grantchester Rd Stop - E', '85313_0500CCITY163'],
  ['SC_High St, Gazeley Rd - S', '85313_0500CCITY292'],
  ['SC_High St, Anstey Way - S', '85313_0500CCITY076'],
  ["SC_Shelford Rd, Bishop's Road - SE", '85313_0500CCITY378'],
  ['SC_Cambridge Rd, Maris Green - S', '85313_0500SGRED003'],
  ['SC_London Rd, Wollards Lane - S', '85313_0500SGRED019'],
  ['SC_London Rd, Church St - S', '85313_0500SSTAP016']];
  for (const val of fromSang) {
    var option = document.createElement("option");
    option.value = val[1];
    option.text = val[0];
    select.appendChild(option);
  }
  label = document.createElement("label");
  label.innerHTML = "Stop (PM): "
  label.htmlFor = "from-sang";
  document.getElementById("from-sang-div").appendChild(label).appendChild(select);
}

async function getTicket(hText) {
  // Get the user ID
  const response = await fetch("https://wellcomegenomecampus.bushub.co.uk/account/UserInfo", {
    method: 'GET',
    headers: {
      'Cookie': hText
    }
  });
  const data = await response.json();
  userID = data.UserId;
  //return data;
  const response2 = await fetch("https://wellcomegenomecampus.bushub.co.uk/api/tickets/mytickets?userId=" + userID, {
    method: 'GET',
    headers: {
      'Cookie': hText
    }
  });
  const data2 = await response2.json();
  //tId = data2.Tickets[0].Id;
  // If only one ticket, return that
  // If multiple, return the one with max ActivationsRemaining
  if (data2.Tickets.length > 0) {
    let tId = -1;
    let AR = -1;
    for (let i = 0; i < data2.Tickets.length; i++) {
      let ticket_expiry = data2.Tickets[i].ValidUntil;
      let ticket_expiry_date = new Date(ticket_expiry);
      var now = new Date();
      if (data2.Tickets[i].ActivationsRemaining > AR & now < ticket_expiry_date) {
        tId = data2.Tickets[i].Id;
        AR = data2.Tickets[i].ActivationsRemaining;
      }
    }
    return [tId, AR];
  } else {
    return ["Error", "Error"];
  }

}

async function pullToken() {
  tabs = await browser.tabs.query({ currentWindow: true, active: true });
  let tab = tabs.pop();
  let cookies = await browser.cookies.getAll({ url: tab.url });
  let hText = "";
  let first = true;
  if (cookies.length > 0) {
    for (let cookie of cookies) {
      if (!first) {
        hText = hText + "; ";
      }
      first = false;
      hText = hText + cookie.name + "=" + cookie.value;
    }
    return hText;
  } else {
    return "Error";
  }
}

async function makeDays(hText) {
  // Store checked status
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // Get dates of existing bookings to make list and grey out button if same
  const response = await fetch("https://wellcomegenomecampus.bushub.co.uk/bookings?take=1000", {
    method: 'GET',
    headers: {
      'Cookie': hText
    }
  });
  const htmlContent = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const trElements = doc.querySelectorAll('tr[class=""]');
  let bDates = Array.from(trElements)
    .filter(tr => !tr.textContent.includes('Cancelled'))
    .map(tr => {
      const dateElement = tr.querySelector('td:nth-child(2'); // Assuming date is in the second <td>
      return dateElement.textContent.trim(); // Extract and trim the date
    });
  console.log(bDates);
  // let bDates = validDates.match(/[0-9]+\/[0-9]+\/[0-9]+/g);
  //let exclDates = data.match(/[0-9]+\/[0-9]+\/[0-9]+([\s\S]*)Cancelled/g);
  bDates = bDates.filter((value, index, array) => array.indexOf(value) === index);
  for (let i = 1; i < 11; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    let bDate = `${day}/${month}/${year}`;
    if (day < 10) {
      bDate = `0${day}/${month}/${year}`;
    }
    let dayth = ""
    switch (day % 10) {
      case 1:
        dayth = "st";
        break;
      case 2:
        dayth = "nd";
        break;
      case 3:
        dayth = "rd";
        break;
      default:
        dayth = "th";
    }
    if (date.getDay() != 0 & date.getDay() != 6) {
      // Make a button for each available date
      const createButton = document.createElement('button');
      createButton.innerText = 'Book ' + weekday[date.getDay()] + " (" + day + dayth + ")";
      createButton.date = currentDate;
      createButton.style.cssText = "width: 50%;text-align: left;";
      if (bDates.includes(bDate)) {
        createButton.disabled = true;
        createButton.innerText = createButton.innerText + " - Done"
      }
      document.getElementById("button-div").appendChild(createButton);
      document.getElementById("button-div").appendChild(document.createElement("br"));
      // Need to give bookdate the hText and tId, the rest it can grab from the elements
      createButton.addEventListener("click", bookDate);
    }
  }



}

async function doAll() {
  //set the header of the panel
  let activeTabUrl = document.getElementById('header-title');
  activeTabUrl.appendChild(document.createTextNode("Batch Bus Booker (B\u00b3)"));

  let cookieList = document.getElementById('cookie-list');
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("Acquiring log-in token.. "))
  cookieList.appendChild(li);
  // Get the cookies
  hText = await pullToken();
  if (hText == "Error") {
    li.appendChild(document.createTextNode("Error getting cookies"));
    return 1;
  } else {
    li.appendChild(document.createTextNode("Done!"));
  }

  li = document.createElement("li");
  li.appendChild(document.createTextNode("Checking valid ticket.. "))
  cookieList.appendChild(li);
  // Get the ticket
  tId = await getTicket(hText);
  if (tId[0] == "Error") {
    li.appendChild(document.createTextNode("Failed, purchase a 40x ticket."))
    return 1;
  } else {
    li.appendChild(document.createTextNode("Done! (" + tId[1] + " remaining)"))
  }
  tId = tId[0];

  makeStops();
  // If current values stored, get them and fill the elements
  restoreOptions("to-sang");
  restoreOptions("pTime");
  restoreOptions("from-sang");
  restoreOptions("dTime");

  makeDays(hText);

};

doAll();

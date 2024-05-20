const employeeUrl = 'https://randomuser.me/api/?results=12&inc=name,location,email,picture,dob,cell&nat=us';
const employeeGrid = document.getElementById('grid-list');
const modal = document.getElementById('employee-modal');
const employeeModal = document.getElementById('modal-info');
const closeModal = document.getElementById('closeModal');

//HELPER FUNCTIONS
function capitalize(string){
  return string.split(' ').map(str => {
    return str.charAt(0).toUpperCase(0) + str.substring(1);
  }).join(' ');
}

function stateAbbr(state){
  switch (state){
    case "alabama":
      return "AL";
      break;
    case "alaska":
      return "AK";
      break;
    case "arizona":
      return "AZ";
      break;
    case "arkansas":
      return "AR";
      break;
    case "california":
      return "CA";
      break;
    case "colorado":
      return "CO";
      break;
    case "connecticut":
      return "CT";
      break;
    case "delaware":
      return "DE";
      break;
    case "florida":
      return "FL";
      break;
    case "georgia":
      return "GA";
      break;
    case "hawaii":
      return "HI";
      break;
    case "idaho":
      return "ID";
      break;
    case "illinois":
      return "IL";
      break;
    case "indiana":
      return "IN";
      break;
    case "iowa":
      return "IA";
      break;
    case "kansas":
      return "KS";
      break;
    case "kentucky":
      return "KY";
      break;
    case "louisiana":
      return "LA";
      break;
    case "maine":
      return "ME";
      break;
    case "maryland":
      return "MD";
      break;
    case "massachusetts":
      return "MA";
      break;
    case "michigan":
      return "MI";
      break;
    case "minnesota":
      return "MN";
      break;
    case "mississippi":
      return "MS";
      break;
    case "missouri":
      return "MO";
      break;
    case "montana":
      return "MT";
      break;
    case "nebraska":
      return "NE";
      break;
    case "nevada":
      return "NV";
      break;
    case "new hampshire":
      return "NH";
      break;
    case "new jersey":
      return "NJ";
      break;
    case "new mexico":
      return "NM";
      break;
    case "new york":
      return "NY";
      break;
    case "north carolina":
      return "NC";
      break;
    case "north dakota":
      return "ND";
      break;
    case "ohio":
      return "OH";
      break;
    case "oklahoma":
      return "OK";
      break;
    case "oregon":
      return "OR";
      break;
    case "pennsylvania":
      return "PA";
      break;
    case "rhode island":
      return "RI";
      break;
    case "south carolina":
      return "SC";
      break;
    case "south dakota":
      return "SD";
      break;
    case "tennessee":
      return "TN";
      break;
    case "texas":
      return "TX";
      break;
    case "utah":
      return "UT";
      break;
    case "vermont":
      return "VT";
      break;
    case "virginia":
      return "VA";
      break;
    case "washington":
      return "WA";
      break;
    case "west virginia":
      return "WV";
      break;
    case "wisconsin":
      return "WI";
      break;
    case "wyoming":
      return "WY";
  }
}

function dobFormat(dob){
  const mo = dob.substring(5,7);
  const day = dob.substring(8,10);
  const year = dob.substring(2,4);
  return mo + "/" + day + "/" + year;
}

//HTML EMPLOYEE CARD GENERATOR
function employeeCard(json){
  const data = json.results;
  data.map(employee => {
    const cardDiv = document.createElement('div');
    cardDiv.className = "grid-item";
    employeeGrid.appendChild(cardDiv);
    cardDiv.innerHTML = `
      <div class="emp-img">
        <img src=${employee.picture.large}>
      </div>
      <div class="emp-des">
        <h2>${capitalize(employee.name.first)} ${capitalize(employee.name.last)}</h2>
        <p>${employee.email}</p>
        <p>${capitalize(employee.location.state)}</p>
      </div>
    `;
    cardDiv.addEventListener('click', () => empModal(employee));
  });
}

//MODAL WINDOW
function empModal(employee){
  modal.style.display = "block";
  employeeModal.innerHTML = `
    <img class="emp-modal-img" src=${employee.picture.large}>
    <h2>${capitalize(employee.name.first)} ${capitalize(employee.name.last)}</h2>
    <p>${employee.email}</p>
    <p>${capitalize(employee.location.state)}</p>
    <hr/>
    <p>${employee.cell}</p>
    <p>${employee.location.street.number} ${employee.location.street.name}, ${stateAbbr(employee.location.state)} ${employee.location.postcode}</p>
    <p>Birthday: ${dobFormat(employee.dob.date)}</p>
  `;
}

//CLOSE MODAL
closeModal.addEventListener('click', () => modal.style.display = "none")

//DIRECTORY
window.addEventListener('load', ()=>{
  fetch(employeeUrl)
    .then(response => response.json())
    .then(employeeCard)
    .catch(error => error.error);
});

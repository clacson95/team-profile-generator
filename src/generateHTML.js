
const managerCard = managerData => {
return `
<div class="col shadow-sm p-3 mb-5 bg-body rounded">
        <div class="card border-danger mb-3 h-100" style="width: 18rem;">
          <div class="card-body text-danger">
            <h3 class="card-title text-center">${managerData.getName()}</h3>
            <h5 class="card-title text-center"><span class="badge bg-danger">${managerData.getRole()}</span></h5>
              <ul class="text-left list-group list-group-flush">
                <li class="list-group-item text-danger">ID: ${managerData.getId()}</li>
                <li class="list-group-item text-danger">Email: <a href="${managerData.getEmail()}" class="card-link">${managerData.getEmail()}</a></li>
                <li class="list-group-item text-danger">Office Number: ${managerData.getOfficeNumber()}<span class="text-dark">1</span></li>
              </ul>     
          </div>
        </div>
      </div>
`;
}

const engineerCard = engineerData => {
return `
<div class="col shadow-sm p-3 mb-5 bg-body rounded">
        <div class="card border-success mb-3 h-100" style="width: 18rem;">
          <div class="card-body text-success">
            <h3 class="card-title text-center">${engineerData.getName()}</h3>
            <h5 class="card-title text-center"><span class="badge bg-success">${engineerData.getRole()}</span></h5>
              <ul class="text-left list-group list-group-flush">
                <li class="list-group-item text-success">ID: ${engineerData.getId()}</li>
                <li class="list-group-item text-success">Email: <a href="${engineerData.getEmail()}" class="card-link">${engineerData.getEmail()}</a></li>
                <li class="list-group-item text-success">GitHub: <a href="http://www.github.com/${engineerData.getGithub()}" class="card-link">${engineerData.getGithub()}</a></li>
              </ul>     
          </div>
        </div>
      </div>
`;
}

const internCard = internData => {
return `
<div class="col shadow-sm p-3 mb-5 bg-body rounded">
        <div class="card border-info mb-3 h-100" style="width: 18rem;">
          <div class="card-body text-info">
            <h3 class="card-title text-center">${internData.getName()}</h3>
            <h5 class="card-title text-center"><span class="badge bg-info">${internData.getRole()}</span></h5>
              <ul class="text-left list-group list-group-flush">
                <li class="list-group-item text-info">ID: ${internData.getId()}</li>
                <li class="list-group-item text-info">Email: <a href="${internData.getEmail()}" class="card-link">${internData.getEmail()}</a></li>
                <li class="list-group-item text-info">School: <span class="text-dark">${internData.getSchool()}</span></li>
              </ul>     
          </div>
        </div>
      </div>
`;
}


// for loop iterating through the array of team data
// creates html cards for each team member and combines for later use
const teamDiv = teamArray => {
    let teamContent = ""

    for ( i = 0; i < teamArray.length; i++ ) {
        if (teamArray[i].getRole() === "Manager"){
            teamContent = teamContent + managerCard(teamArray[i])
        }
        if (teamArray[i].getRole() === "Engineer"){
            teamContent = teamContent + engineerCard(teamArray[i])
        }
        if (teamArray[i].getRole() === "Intern"){
            teamContent = teamContent + internCard(teamArray[i])
        }
    } return teamContent
}

// html template, plugs in the teamDiv html
const generateHTML = data => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
</head>
<body>
    <h1 class="bg-secondary text-light px-4 py-5 text-center ">My Team</h1>
    <div class="row row-cols-auto justify-content-center">
        ${teamDiv(data)}
    </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>
`;
}


module.exports = generateHTML;
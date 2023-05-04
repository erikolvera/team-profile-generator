const generateCards = (teamArray) => {
    // console.log(teamArray.getRole());

    const htmlArray = teamArray.map(employee => {
        switch (employee.getRole()) {
            case "Manager":
                return `
                <div class="shadow card m-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-name">${employee.getName()}</h5>
                  <h6 class="card-role">${employee.getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employee.getID()}</li>
                  <li class="list-group-item">Email:<a href="mailto:">${employee.getEmail()}</a></li>
                  <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
                </ul>
              </div>
                `
            case "Engineer":
                return `
                <div class="shadow card m-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-name">${employee.getName()}</h5>
                  <h6 class="card-role">${employee.getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employee.getID()}</li>
                  <li class="list-group-item">Email: <a href="mailto:">${employee.getEmail()}</a> </li>
                  <li class="list-group-item">Github: <a href="mailto:">${employee.getGithub()}</a></li>
                </ul>
              </div>
                `
            case "Intern":
                return `
                <div class="shadow card m-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-name">${employee.getName()}</h5>
                  <h6 class="card-role">${employee.getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employee.getID()}</li>
                  <li class="list-group-item">Email:<a href="mailto:">${employee.getEmail()}</a></li>
                  <li class="list-group-item">School name: ${employee.getSchool()}</li>
                </ul>
              </div>
                `
        }
    })

    return htmlArray;
}

const generateHtml = (teamArray) => {
    return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Dream Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <link href="/dist/style.css" rel="stylesheet">
      </head>


      <body class="">
        <h1 class="header">Dream Team</h1>
        <div class="d-flex p-2 flex-md-row flex-wrap">
            ${generateCards(teamArray)}
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
      </body>
    </html>
    `
}


module.exports = generateHtml;
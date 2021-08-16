window.addEventListener("DOMContentLoaded", (event) => {

  // Création d'une fonction permettant de générer un code html avec le bon nombre d'étoiles
  function getStar(vote) {
    vote = parseInt(vote)
    let starVote = vote / 2
    let starFill = ''
    for (i = 0; i < 5; i++) {
      if (i < starVote) {
        starFill += `<i class="imgS fas fa-star"></i>`
      } else {
        starFill += `<i class="far fa-star"></i>`
      }
    }
    return starFill
  }

  // Récupération du fichier en local (attention, il faut un vhost)
  fetch('movies.json')
    .then(response => response.json())
    .then((data) => {
      data.results.map((item) => {
        let title = item.original_title
        let overview = item.overview
        let poster = item.poster_path
        let vote = item.vote_average
        let star = getStar(vote)
        document.getElementById('filmTable').innerHTML += 
          `
            <div class='col-md-4 mb-3'>
              <div class='row align-items-center'>
                <div class='col-md-4 border solid'>
                  <img class='img-fluid' src='${poster}' />
                </div>
                <div class='col-md-8'>
                  <h5>${title}</h5>
                  <p class='text'>${overview}</p>
                  <hr>
                  <p>${star}</p>
                </div>
              </div>
            </div>
          `
      })
    })
    
});

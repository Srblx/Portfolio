https://serbelloni.vercel.app
  <!-- <script> // Vérifier si la clé "visited" existe dans le stockage local -->
    // if (!localStorage.getItem('visited')) {
    //   // Si la clé "visited" n'existe pas, afficher la boîte de dialogue modale
    //   alert("Ce site est en cours de développement. Merci de votre compréhension !");
    
    //   // Enregistrer la clé "visited" dans le stockage local pour indiquer que l'utilisateur a visité le site
    //   localStorage.setItem('visited', true);
    // }
    <!-- // </Script> -->

      <section id="work" class="portfolio-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Portfolio
              </h3>
              <p class="subtitle-a">
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
      <div class="row">
        <div class="col-md-4">
          <div class="work-box">
            <a href="assets/img/portfoli_biblio.png" data-gallery="portfolioGallery" class="portfolio-lightbox">
              <div class="work-img">
                <img src="assets/img/portfoli_biblio.png" alt="" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">Bibliothèque en ligne</h2>
                  <div class="w-more">
                    <span class="w-ctegory">Web Design</span> / <span class="w-date">Mars 2023</span>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <span class="bi bi-plus-circle" onclick="openModal('myModal_biblio')"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Fenêtre modale -->
        <div id="myModal_biblio" class="modal myModal_biblio">
          <div class="modal-content">
            <span class="close" onclick="closeModal('myModal_biblio')">&times;</span>
            <h2>Bibliothèque en ligne</h2>
            <p>Ce site est conçu pour mettre en valeur mes compétences en développement. Il est <b> important de noter </b> que les informations 
              contenues dans le site ne sont pas nécessairement réelles, mais plutôt utilisées à des fins démonstratives.</p>
            <div class="link_biblio">
              <a href="https://serbelloni.alwaysdata.net/?controller=home&action=home" target="_blank" class="link_site">Site internet</a>
            <!-- <a href="https://github.com/Srblx" class="link_code_source" target="_blank">Code source</a> -->
          </div>
          </div>
        </div>
      
        <div class="col-md-4">
          <div class="work-box">
            <a href="assets/img/portfolio_miramas.png" data-gallery="portfolioGallery" class="portfolio-lightbox">
              <div class="work-img">
                <img src="assets/img/portfolio_miramas.png" alt="" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">Les amis du vieux Miramas</h2>
                  <div class="w-more">
                    <span class="w-ctegory">Web Design</span> / <span class="w-date">Avril 2023</span>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <span class="bi bi-plus-circle" onclick="openModal('myModal_miramas')"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Fenêtre modale -->
        <div id="myModal_miramas" class="modal myModal_miramas">
          <div class="modal-content">
            <span class="close" onclick="closeModal('myModal_miramas')">&times;</span>
            <h2>Les amis du vieux Miramas</h2>
            <p>Site en cour de déploiment dans sa version HTTPS</p>
            <a href="https://amisduvieuxmiramas.fr" target="_blank" class="link_site">Site internet</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-box">
            <a href="assets/img/work-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
              <div class="work-img">
                <img src="assets/img/work-3.jpg" alt="" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">PortFolio Personnel</h2>
                  <div class="w-more">
                    <span class="w-ctegory">Web Design</span> / <span class="w-date">Avril 2023</span>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <a href="#"> <span class="bi bi-plus-circle"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-box">
            <a href="assets/img/bytemaster.png" data-gallery="portfolioGallery" class="portfolio-lightbox">
              <div class="work-img">
                <img src="assets/img/bytemaster.png" alt="" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">Les amis du vieux Miramas</h2>
                  <div class="w-more">
                    <span class="w-ctegory">Web Design</span> / <span class="w-date">Avril 2023</span>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <span class="bi bi-plus-circle" onclick="openModal('myModal_miramas')"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Fenêtre modale -->
        <div id="myModal_miramas" class="modal myModal_miramas">
          <div class="modal-content">
            <span class="close" onclick="closeModal('myModal_miramas')">&times;</span>
            <h2>ByteMaster</h2>
            <p>Ce site constitue une plateforme interactive et dynamique offrant une variété de quiz à différents niveaux portant sur les langages de programmation les plus couramment utilisés.</p>
            <a href="https://bytemaster.alwaysdata.net" target="_blank" class="link_site">Site internet</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-box">
            <a href="assets/img/attribu_zombie.png" data-gallery="portfolioGallery" class="portfolio-lightbox">
              <div class="work-img">
                <img src="assets/img/attribu_zombie.png" alt="" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">Usine à Crypto Zombie</h2>
                  <div class="w-more">
                    <span class="w-ctegory">Smart Contract</span> / <span class="w-date">Avril 2023</span>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <span class="bi bi-plus-circle" onclick="openModal('myModal_zombie')"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Fenêtre modale -->
        <div id="myModal_zombie" class="modal myModal_zombie">
          <div class="modal-content">
            <span class="close" onclick="closeModal('myModal_zombie')">&times;</span>
            <h2>Usine Crypto Zombie</h2>
            <p>Dans le souci de garantir une expérience fluide et accessible à tous les joueurs, j'ai choisi de ne pas déployer le Smart Contract sur la blockchain publique en raison des frais associés aux transactions. Cependant, vous pouvez consulter le code source sur GitHub pour découvrir les mécanismes sous-jacents et les fonctionnalités passionnantes du jeu.</p>
            <a href="https://github.com/Srblx/CryptoZombie" target="_blank" class="link_code_source">Code source</a>
          </div>
        </div>
        
import "./style.css";
import logo from "../../assets/navbar-brand.png";
import toggle from "../../assets/Category.svg";

const Navbar = () => {
  return (
    <header className="">
      <nav class="fixed-top mt-3  navbar navbar-expand-lg navbar-light bg-light d-flex   container">
        <div class="container">
          <div class="logo">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="">
              <img src={toggle} alt="" />
            </div>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end navbar-menu"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Tentang Acara
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Berita
                </a>
              </li>

              <button class="rounded-pill registrasi">
                <a
                  class="nav-link"
                  href="https://event.detik.com/"
                  target="_blank"
                >
                  Registrasi
                </a>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

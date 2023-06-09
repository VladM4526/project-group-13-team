(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),

      closeMenuAbout: document.querySelector("[data-menu-mob-close-about]"),
      closeMenuCatalog: document.querySelector("[data-menu-mob-close-catalog]"),
      closeMenuSale: document.querySelector("[data-menu-mob-close-sale]"),

      menu: document.querySelector("[data-menu]"),
    };

    refs.closeMenuAbout.addEventListener("click", toggleMenu);
    refs.closeMenuCatalog.addEventListener("click", toggleMenu);
    refs.closeMenuSale.addEventListener("click", toggleMenu);
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden-menu");
    }
  })();
const drawerInitiator = {
  init({
    button,
    drawer,
    content,
  }) {
    button.addEventListener('click', (event) => {
      this.toggleDrawer(event, drawer);
      const icon = button.querySelector('i');

      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    drawer.addEventListener('click', (event) => {
      if (event.target.className === 'nav-link') {
        this.closeDrawer(event, drawer);
      }
    });

    content.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });
  },

  toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('collapse');
  },

  closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('collapse');
    const icon = document.querySelector('.fas');
    if (icon.classList.contains('fa-times')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  },

};

export default drawerInitiator;

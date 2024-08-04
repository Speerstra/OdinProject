class FancyDropdown {
  constructor(options) {
    this.button = document.querySelector(options.buttonSelector);
    this.menu = document.querySelector(options.menuSelector);
    this.animationDuration = options.animationDuration || 300; // Default to 300ms if not provided
    this.position = options.position || "bottom-left"; // Default to 'bottom-left' if not provided

    this.init();
  }

  init() {
    this.button.addEventListener("mouseover", () => this.showMenu());
    this.button.addEventListener("mouseout", () => this.hideMenu());

    this.menu.addEventListener("mouseover", () => this.showMenu());
    this.menu.addEventListener("mouseout", () => this.hideMenu());

    this.setPosition();
  }

  showMenu() {
    this.menu.style.transition = `opacity ${this.animationDuration}ms`;
    this.menu.style.opacity = 1;
  }

  hideMenu() {
    this.menu.style.transition = `opacity ${this.animationDuration}ms`;
    this.menu.style.opacity = 0;
  }

  setPosition() {
    const buttonRect = this.button.getBoundingClientRect();
    const menuRect = this.menu.getBoundingClientRect();
    const containerRect = this.button.parentElement.getBoundingClientRect();

    switch (this.position) {
      case "bottom-left":
        this.menu.style.top = `${buttonRect.bottom - containerRect.top}px`;
        this.menu.style.left = `${buttonRect.left - containerRect.left}px`;
        break;
      case "bottom-right":
        this.menu.style.top = `${buttonRect.bottom - containerRect.top}px`;
        this.menu.style.left = `${
          buttonRect.right - containerRect.left - menuRect.width
        }px`;
        break;
      case "top-left":
        this.menu.style.top = `${
          buttonRect.top - containerRect.top - menuRect.height
        }px`;
        this.menu.style.left = `${buttonRect.left - containerRect.left}px`;
        break;
      case "top-right":
        this.menu.style.top = `${
          buttonRect.top - containerRect.top - menuRect.height
        }px`;
        this.menu.style.left = `${
          buttonRect.right - containerRect.left - menuRect.width
        }px`;
        break;
      default:
        console.warn(`Position "${this.position}" not recognized.`);
    }
  }
}

module.exports = FancyDropdown;

// classe que vai conter a lógica dos dados e como os dados serão estruturados
//parei 09:17


export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = [
      {
        login: "maykbrito",
        name: "Mayk Brito",
        public_repos: "76",
        followers: "120000",
      },
      {
        login: "diego3g",
        name: "Diego Fernandes",
        public_repos: "76",
        followers: "120000",
      },
    ];
  }
}

// classe que vai criar a visualoização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.update();
  }

  update() {
    this.removeAllTr();

		this.entries.forEach((user) => {
			const row - this.createRow()
      ResizeObserver.querySelector(".user img")
    });
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td class="user">
              <img
                src="http://github.com/navybrasil.png"
                alt="imagem de Eliéser Nascimento"
              />
              <a href="http://github.com/navybrasil" target="_blank">
                <p>Eliéser Nascimento</p>
                <span>navybrasil</span>
              </a>
            </td>
            <td class="repositories">76</td>
            <td class="followers">9589</td>
            <td><button class="remove">&times;</button></td>

		`;
    return tr;
  }

  removeAllTr() {
    const tbody = this.root.querySelector("table tbody");

    tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}

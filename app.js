const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const refs = {
  imagesContainer: document.querySelector(".gallery"),
  openModalBtn: document.querySelector(".lightbox"),
  closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
  modalImage: document.querySelector(".lightbox__image"),
};

// ======================================???????????????? ?????????????? ??????????????????????=======================================================

const galleryEl = galleryItems.reduce(
  (string, galleryItem) =>
    string +
    `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${galleryItem.original}
  >
    <img
      class="gallery__image"
      src=${galleryItem.preview}
      data-source=${galleryItem.original}
      alt=${galleryItem.description}
    />
  </a>
</li>`,
  ""
);
refs.imagesContainer.insertAdjacentHTML("afterbegin", galleryEl);

// =============================================???????????????? ?? ???????????????? ???????????????????? ????????===============================================

refs.imagesContainer.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
const sources = galleryItems.map((galleryItem) => galleryItem.original);

function onOpenModal(e) {
  e.preventDefault();
  const condition = e.target.nodeName === "IMG";
  if (condition) {
    window.addEventListener("keydown", onEscKeyPress);
    window.addEventListener("keydown", slideModalByKey);
    refs.openModalBtn.classList.add("is-open");
  }

  refs.modalImage.attributes.src.value = galleryItems.find(
    (galleryItem) => e.target.attributes.src.value === galleryItem.preview
  ).original;
}

function slideModalByKey(e) {
  if (e.code === "ArrowLeft") {
    byLeft(sources);
  } else if (e.code === "ArrowRight") {
    byRight(sources);
  }
}

function onCloseModal(evt) {
  window.removeEventListener("keydown", onEscKeyPress);
  window.removeEventListener("keydown", slideModalByKey);
  refs.openModalBtn.classList.remove("is-open");
  refs.modalImage.attributes.src.value = "";
}

// =========================???????????????? ???? ????????????????=====================

const backdrop = document.querySelector(".lightbox");
backdrop.addEventListener("click", onBackdropClick);
function onBackdropClick(event) {
  if (event.target.classList.contains("lightbox__overlay")) {
    onCloseModal(backdrop);
  }
}

// =======================================???????????????? ???? Escape===================================

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

// ==================================?????????? ?????????????????? ??????????/????????????=======================================================================

function byLeft(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === refs.modalImage.attributes.src.value && i > 0) {
      i--;
      refs.modalImage.attributes.src.value = array[i];
    }
  }
}
function byRight(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] === refs.modalImage.attributes.src.value) {
      i++;
      refs.modalImage.attributes.src.value = array[i];
    }
  }
}

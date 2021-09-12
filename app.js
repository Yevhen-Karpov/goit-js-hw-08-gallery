const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  imagesContainer: document.querySelector('.gallery'),
  openModalBtn: document.querySelector('.lightbox'),
  closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
  
};
// console.log(refs.backdrop);
const galleryEl = galleryItems.reduce((string, galleryItem) => string + `<li class="gallery__item">
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
</li>`, '')
refs.imagesContainer.insertAdjacentHTML('afterbegin', galleryEl)

refs.imagesContainer.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
// const backdrop = document.querySelector('.is-open')
//   console.log(backdrop);
//   backdrop.addEventListener('click', onBackdropClick)

function onOpenModal(e) {
  e.preventDefault();
  const condition = e.target.nodeName === 'IMG'
  console.log(condition);
  if (condition) {
    window.addEventListener('keydown', onEscKeyPress)
    refs.openModalBtn.classList.add('is-open')}
  const modalImage = document.querySelector('.lightbox__image')
  console.log(modalImage);
}

function onCloseModal(evt) {
  window.removeEventListener('keydown', onEscKeyPress)
  refs.openModalBtn.classList.remove('is-open')
}

// function onBackdropClick(event) {
//   if (event.target.classList.contains('lightbox')) {
//     console.log(event.target.classList.contains('lightbox'));
//     onCloseModal()
//   }
// }
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal()
  }

}
// const nav = document.querySelector(".js-nav");

// nav.addEventListener("click", handleNavClick);

// function handleNavClick(event) {
//   event.preventDefault();
  
//   const target = event.target;
//   console.log("event target: ", target); // посмотрите что тут

//   // Проверяем тип узла, если не ссылка выходим из функции
//   if (target.nodeName !== "A") return;

//   setActiveLink(target);
// }

// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = nav.querySelector("a.active");

//   if (currentActiveLink) {
//     currentActiveLink.classList.remove("active");
//   }

//   nextActiveLink.classList.add("active");
// }

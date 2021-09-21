// ======================================Создание галереи изображений=======================================================
import refs from './refs'
import galleryItems from '../db/array'
import templateByArray from '../templates/markupByArray.hbs'
// import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js'
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'
// import '@pnotify/core/dist/PNotify.css'
// import '@pnotify/core/dist/BrightTheme.css'
// defaultModules.set(PNotifyMobile, {})

// const galleryEl = galleryItems.reduce(
//   (string, galleryItem) =>
//     string +
//     `<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href=${galleryItem.original}
//   >
//     <img
//       class="gallery__image"
//       src=${galleryItem.preview}
//       data-source=${galleryItem.original}
//       alt=${galleryItem.description}
//     />
//   </a>
// </li>`,
//   ''
// );
console.log(galleryItems)
const galleryEl = templateByArray(galleryItems)
console.log(galleryEl)
refs.imagesContainer.insertAdjacentHTML('afterbegin', galleryEl)

// =============================================Открытие и закрытие модального окна===============================================

refs.imagesContainer.addEventListener('click', onOpenModal)
refs.closeModalBtn.addEventListener('click', onCloseModal)
const sources = galleryItems.map(galleryItem => galleryItem.original)

function onOpenModal(e) {
  e.preventDefault()
  const condition = e.target.nodeName === 'IMG'
  if (condition) {
    window.addEventListener('keydown', onEscKeyPress)
    window.addEventListener('keydown', slideModalByKey)
    refs.openModalBtn.classList.add('is-open')
  }

  refs.modalImage.attributes.src.value = e.target.dataset.source
}

function slideModalByKey(e) {
  if (e.code === 'ArrowLeft') {
    byLeft(sources)
  } else if (e.code === 'ArrowRight') {
    byRight(sources)
  }
}

function onCloseModal(evt) {
  window.removeEventListener('keydown', onEscKeyPress)
  window.removeEventListener('keydown', slideModalByKey)
  refs.openModalBtn.classList.remove('is-open')
  refs.modalImage.attributes.src.value = ''
}

// =========================Закрытие по бэкдропу=====================

const backdrop = document.querySelector('.lightbox')
backdrop.addEventListener('click', onBackdropClick)
function onBackdropClick(event) {
  if (event.target.classList.contains('lightbox__overlay')) {
    onCloseModal(backdrop)
  }
}

// =======================================Закрытие по Escape===================================

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal()
  }
}

// ==================================Слайд клавишами влево/вправо=======================================================================

function byLeft(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === refs.modalImage.attributes.src.value && i > 0) {
      i--
      refs.modalImage.attributes.src.value = array[i]
    }
  }
}
function byRight(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] === refs.modalImage.attributes.src.value) {
      i++
      refs.modalImage.attributes.src.value = array[i]
    }
  }
}

import bible from './acf.json'

const getNameAndQuantityOfChapters = () => {
  return bible.map((b, index) => ({
    name: b.name,
    chapterNumber: b.chapters.length,
    id: index
  }))
}

const getBooks = () => {
  return bible.map(b => ({
    name: b.name,
  }))
}

const getBook = (book) => {
  return bible[book]
}

const getChapterByBook = (book, chapter) => {
  return bible[book].chapters[chapter]
}

export default {
  getBooks, getBook, getNameAndQuantityOfChapters, getChapterByBook
}
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

const parseString = (text) => {
  let parsed = text
  parsed = parsed.replace(/[áàãâä]/ui, 'a');
  parsed = parsed.replace(/[éèêë]/ui, 'e');
  parsed = parsed.replace(/[íìîï]/ui, 'i');
  parsed = parsed.replace(/[óòõôö]/ui, 'o');
  parsed = parsed.replace(/[úùûü]/ui, 'u');
  parsed = parsed.replace(/[ç]/ui, 'c');
  return parsed
}

const searchBooks = (value) => {
  if(value === '') return getNameAndQuantityOfChapters();

  const books = bible.filter(book => parseString(book.name.toLowerCase()).includes(parseString(value.toLowerCase())))
  return books.map((b, index) => ({
    name: b.name,
    chapterNumber: b.chapters.length,
    id: index
  }))
}

export default {
  getBooks, 
  getBook, 
  getNameAndQuantityOfChapters, 
  getChapterByBook,
  searchBooks
}
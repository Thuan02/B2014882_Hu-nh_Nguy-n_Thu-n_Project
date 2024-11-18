const authRouter = require('./auth');
const nxbRouter = require('./nxb');
const bookRouter = require('./book');
const borrowRouter = require('./borrow');
function route(app) {
  app.use('/auth', authRouter);
  app.use('/nxb', nxbRouter);
  app.use('/book', bookRouter);
  app.use('/borrow', borrowRouter);
}
module.exports = route;

// manager.js - Quản lý mượn sách

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false; // Trạng thái sách (đã mượn hay chưa)
  }

  // Phương thức để mượn sách
  borrow() {
    if (this.isBorrowed) {
      console.log(`Sách "${this.title}" đã được mượn trước đó.`);
      return false;
    }
    this.isBorrowed = true;
    console.log(`Bạn đã mượn sách: "${this.title}"`);
    return true;
  }

  // Phương thức để trả sách
  returnBook() {
    if (!this.isBorrowed) {
      console.log(`Sách "${this.title}" chưa được mượn.`);
      return false;
    }
    this.isBorrowed = false;
    console.log(`Bạn đã trả sách: "${this.title}"`);
    return true;
  }

  // Phương thức hiển thị thông tin sách
  display() {
    const status = this.isBorrowed ? 'Đã mượn' : 'Còn sẵn';
    console.log(
      `ID: ${this.id} | Tiêu đề: "${this.title}" | Tác giả: ${this.author} | Trạng thái: ${status}`
    );
  }
}

class LibraryManager {
  constructor() {
    this.books = []; // Mảng lưu trữ danh sách sách trong thư viện
  }

  // Phương thức thêm sách vào thư viện
  addBook(book) {
    this.books.push(book);
    console.log(`Đã thêm sách: "${book.title}" vào thư viện.`);
  }

  // Phương thức hiển thị tất cả sách
  displayBooks() {
    if (this.books.length === 0) {
      console.log('Thư viện hiện tại không có sách.');
      return;
    }
    console.log('Danh sách sách trong thư viện:');
    this.books.forEach((book) => book.display());
  }

  // Phương thức tìm kiếm sách theo ID
  findBookById(id) {
    return this.books.find((book) => book.id === id);
  }

  // Phương thức mượn sách từ thư viện
  borrowBook(id) {
    const book = this.findBookById(id);
    if (book) {
      book.borrow();
    } else {
      console.log('Không tìm thấy sách với ID: ' + id);
    }
  }

  // Phương thức trả sách về thư viện
  returnBook(id) {
    const book = this.findBookById(id);
    if (book) {
      book.returnBook();
    } else {
      console.log('Không tìm thấy sách với ID: ' + id);
    }
  }
}

// Sử dụng hệ thống quản lý thư viện

// Tạo một thư viện mới
const libraryManager = new LibraryManager();

// Thêm sách vào thư viện
libraryManager.addBook(
  new Book(1, 'Harry Potter và Hòn đá Phù thủy', 'J.K. Rowling')
);
libraryManager.addBook(new Book(2, 'Đắc Nhân Tâm', 'Dale Carnegie'));
libraryManager.addBook(new Book(3, 'Nhà Giả Kim', 'Paulo Coelho'));

// Hiển thị danh sách sách trong thư viện
libraryManager.displayBooks();

// Mượn sách
libraryManager.borrowBook(1); // Mượn sách "Harry Potter và Hòn đá Phù thủy"

// Mượn lại một sách đã mượn
libraryManager.borrowBook(1); // Đã mượn sách rồi

// Trả sách
libraryManager.returnBook(1); // Trả sách "Harry Potter và Hòn đá Phù thủy"

// Hiển thị danh sách sách sau khi trả
libraryManager.displayBooks();

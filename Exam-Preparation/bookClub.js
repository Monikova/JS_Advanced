// 88/100 in Judge !!!

class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        let isBookInArr = false;
        for (let book of this.books) {
            if (book.hasOwnProperty(title)) {
                isBookInArr = true;
                return `The book "${title}" by ${author} is already in ${this.library} library.`;
            }
        }
        
        if (!isBookInArr) {
            this.books.push({title, author});
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        }
    }

    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`;
        } else {
            this.members.push(memberName); 
            return `Member ${memberName} has been joined to the book club.`;
        }
    }

    assignBookToMember(memberName, bookTitle) {
        if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        } 

        let isBookInArr = false;
        let bookIdx;
        let bookAuthor;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === bookTitle) {
                isBookInArr = true;
                bookIdx = i;
                bookAuthor = this.books[i].author;
            }
        }
        
        if (!isBookInArr) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        if (this.members.includes(memberName) && isBookInArr) {
            let message = `Member ${memberName} has been assigned the book "${bookTitle}" by ${bookAuthor}.`;
            this.books.splice(bookIdx, 1);
            return message;
        }
    }

    generateReadingReport() {
        if (this.members.length === 0) {
            return 'No members in the book club.';
        } else if (this.books.length === 0) {
            return 'No available books in the library.';
        } else {
            let message = `Available Books in ${this.library} library:\n`;
            this.books.forEach(b => message += `"${b.title}" by ${b.author}\n`);
            return message.trim();
        }
    }
}


const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook('The Great Gatsby', 'F. Scott Fitzgerald'));
console.log(myBookClub.addBook('To Kill a Mockingbird', 'Harper Lee'));
console.log(myBookClub.addBook('1984', 'George Orwell'));
console.log(myBookClub.addMember('Alice'));
console.log(myBookClub.addMember('Peter'));
console.log(myBookClub.assignBookToMember('Mary', 'The Great Gatsby'));


// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook('The Great Gatsby', 'F. Scott Fitzgerald'));
// console.log(myBookClub.addBook('To Kill a Mockingbird', 'Harper Lee'));
// console.log(myBookClub.addBook('1984', 'George Orwell'));
// console.log(myBookClub.addMember('Alice'));
// console.log(myBookClub.addMember('Alice'));
// console.log(myBookClub.assignBookToMember('Alice', 'The Great Gatsby'));
// console.log(myBookClub.generateReadingReport());


// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));


// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "1984"));
// console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
// console.log(myBookClub.generateReadingReport());

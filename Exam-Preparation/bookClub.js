// 100/100 in Judge

class BookClub {
    books = [];
    members = [];

    constructor(library) {
        this.library = library;
    }

    addBook(title, author) {
        let book = this.books.find(b => b.title === title);

        if (book) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        } else {
            this.books.push({title, author});
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        }
    }

    addMember(memberName) {
        if (!this.members.includes(memberName)) {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`;
        } else {
            return `Member ${memberName} is already a part of the book club.`;
        }
    }

    assignBookToMember (memberName, bookTitle) {
        if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        }
        
        let book = this.books.find(b => b.title === bookTitle);
        if (!book) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        this.books = this.books.filter(b => b.title !== bookTitle);
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${book.author}.`;
    }

    generateReadingReport() {
        if (!this.members.length) {
            return "No members in the book club.";
        } else if (!this.books.length) {
            return "No available books in the library.";
        } else {
            let message = [`Available Books in ${this.library} library:`];
            this.books.forEach(b => message.push(`"${b.title}" by ${b.author}`));
            return message.join("\n");
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

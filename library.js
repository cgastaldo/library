const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return [this.title, this.author, this.pages, this.read];
    };

}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function getBook(arr){
    for (i=0; i<arr.length; i++){
        console.log(arr[i].title);
    }    
}

//rewrite to cause adding a book to add a new row?
function addRow(tableID, arr){
    let tableRef = document.getElementById(tableID);
    for (i=0; i<arr.length; i++){
        let newRow = tableRef.insertRow(-1);
        let newCell = newRow.insertCell(0);
        let newText = document.createTextNode(arr[i].title);
        newCell.appendChild(newText);
    }

}

function bookBtn{
    
}
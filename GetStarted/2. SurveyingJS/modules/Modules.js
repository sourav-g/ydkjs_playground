//~ Patterns : Grouping data and behaviour together into logical units
//* 1. Module Pattern (tick)
//* 2. Class Pattern


//? a) Classic modules
//~ -> Just a function which gets called, produces an instance of it
//with exposed functions which in turn can be used to operate on the module
//instances internal data (encapsulated)
//Also called module factories, since produces instances

//? Example
//* The difference here is the lack of using `new`, calling the module factories
//* as normal functions

function Publication(title,author,pubDate){
    var publicAPI = {
        print(){
            console.log(`Title : ${title} By ${author} On ${pubDate}`);
        }
    }
    return publicAPI;
}

function Book(bookDetails){
    var pub = Publication(bookDetails.title,bookDetails.author,bookDetails.pubDate);
    var publicAPI = {
        print(){
            pub.print();
            console.log(`Publisher: ${bookDetails.publisher} ISBN: ${bookDetails.ISBN}`)
        }
    }
    return publicAPI;
}

//Driver code
var bookDetails = {
    title :     'You Don`t Know JS',
    author:     'Kyle Simpson',
    pubDate:    '12-06-2022',
    publisher:  'ABC Publishings',
    ISBN:       'ABDC-5253-DHDH'
}
var book = Book(bookDetails);
console.log(book.print());

//? FootNote
//* There are other variations to this factory function form that are quite common across JS
// 1. AMD (Asynchronous Module Definition)
// 2. UMD (Universal Module Definition)
// 3. CommonJS(classic Node.js-style modules)
//~ All are based on the same basic principle discussed above

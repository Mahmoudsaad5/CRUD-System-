var siteName = document.getElementById("bookmarkName")
var siteUrl = document.getElementById("siteUrl")
var Searchinput = document.getElementById("Searchinput")
var bookmarklist = [];

if((localStorage.getItem("list")) != null){
    bookmarklist = JSON.parse(localStorage.getItem("list"))
    display()
}

function addBookmark() {
    var bookmark = {
        siteName: siteName.value,
        siteUrl: siteUrl.value
    }
    bookmarklist.push(bookmark)
    localStorage.setItem("list",JSON.stringify(bookmarklist))
    console.log(bookmarklist)
    display()
}

function display() {
    var temp = ""
    for (var i = 0; i < bookmarklist.length; i++) {
        temp += `<div class="row pt-sans-caption-bold border border-1 d-flex align-items-center">
                  <div class="col">
                    `+ (i+1) + `
                  </div>
                  <div class="col">
                    `+ bookmarklist[i].siteName + `
                  </div>
                  <div class="col">
                    <button class="btn bg-success text-white m-2"><i class="fa-regular fa-eye"></i> Visit</button>
                  </div>
                  <div class="col">
                    <button onclick="deletebookmark(`+ i + `)" class="btn bg-danger text-white m-2"><i class="fa-solid fa-trash-can"></i> Delete</button>
                  </div>
                </div>`
    }
    document.getElementById("myRow").innerHTML = temp
}

function deletebookmark(x) {
    bookmarklist.splice(x, 1)
    display()
}

function search(){

var searchVal = Searchinput.value.toLowerCase()
var temp = ""

for(var i =0; i<bookmarklist.length; i++)

    if((bookmarklist[i].siteName.toLowerCase().includes(searchVal)) == true){

        temp += `<div class="row pt-sans-caption-bold border border-1 d-flex align-items-center">
                  <div class="col">
                    `+ (i+1) + `
                  </div>
                  <div class="col">
                    `+ bookmarklist[i].siteName + `
                  </div>
                  <div class="col">
                    <button class="btn bg-success text-white m-2"><i class="fa-regular fa-eye"></i> Visit</button>
                  </div>
                  <div class="col">
                    <button onclick="deletebookmark(`+ i + `)" class="btn bg-danger text-white m-2"><i class="fa-solid fa-trash-can"></i> Delete</button>
                  </div>
                </div>`
    }    
    document.getElementById("myRow").innerHTML = temp

}

function validateForm() {
    let x = document.forms["myForm"]["siteUrl"].value;
    if (x.toLowerCase().includes(".com") == false) {
      alert("Please Enter A Valid URL Address");
      return false;
    }
  }
 

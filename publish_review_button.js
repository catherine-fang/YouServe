var reviewSingle = "0";
var fileName = "test.txt"
// document.getElementById("name1").value;
function WriteToFile() {
  title=document.getElementById("content1").value;
  organization=document.getElementById("content2").value;
   // alert("title: " +title)
  location1=document.getElementById("content3").value;
  rating=document.getElementById("content4").value;
  description=document.getElementById("content5").value;
 var entry = "Title: " + title
              + "\nOrganization: " + organization
              + "\nLocation: " + location1
              + "\nRating: " + rating
              + "\nDescription: " + description + "\n\n";

  var reviewSingle = entry;

  download(fileName, reviewSingle);

}

function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' +

encodeURIComponent(text));
  pom.setAttribute('download', filename);

  pom.style.display = 'none';
  document.body.appendChild(pom);

  pom.click();

  document.body.removeChild(pom);
}
//open the file containing all past results and append them to our current list
// f = open("reviewList.txt", "r")
// olddata = json.load(f)
// listAllUsers.extend(olddata)
// f.close()










// function WriteToFile(passForm) {
//
//     set fso = CreateObject("Scripting.FileSystemObject");
//     set s = fso.CreateTextFile("test.txt", True);
//     s.writeline(document.passForm.title.value);
//     s.writeline(document.passForm.organization.value);
//     s.writeline(document.passForm.location.value);
//     s.writeline(document.passForm.rating.value);
//     s.writeline(document.passForm.description.value);
//     s.Close();
//  }






// function WriteToFile() {
//
//   title=document.getElementById("title").value;
//   organization=document.getElementById("organization").value;
//    // alert("title: " +title)
//   location=document.getElementById("location").value;
//   rating=document.getElementById("rating").value;
//   description=document.getElementById("description").value;
//  var reviewSingle = {
//     "title":title,
//     "organization":organization,
//     "location":location,
//     "rating":rating,
//     "description":description
//   };
// // alert("variable successfully created!")
// // reviewSingle = document.getElementById('display').innerHTML;
//
// // //open the file containing all past results and append them to our current list
// // f = open("all_answers.json", "r")
// // olddata = json.load(f)
// // listAllUsers.extend(olddata)
// // f.close()
// }

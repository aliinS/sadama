// Get the modal
var modal = document.getElementById('myModal1');
 
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
 
 
// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
    
 }    

 //secong image
 // Get the modal
var modal = document.getElementById('myModal2');
 
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
 
 
// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
    
 }    
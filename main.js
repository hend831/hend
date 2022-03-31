//implamentation google maps
function initMap() {
       // The location of Uluru
       const cairo = { lat: -25.344, lng: 131.036 };
       // The map, centered at Uluru
       const map = new google.maps.Map(document.getElementById("map"), {
         zoom: 4,
         center: cairo,
       });
       // The marker, positioned at Uluru
       const marker = new google.maps.Marker({
         position: cairo,
         map: map,
       });
     }
$("#navbar a, .btn").on("click",function(event){
  if(this.hash !==""){
    event.preventDefault();
    const hash =this.hash;
    $("html,body").animate(scrollTop:$(hash).offset().top - 100}
    ,800);

  }
});
//navbar opacity
Window.addEventListener("scroll" ,function(){
  if(Window.scrollY >150){
    document.querySelector("#navbar").style.opacity =0.9;
  }else{
    document.querySelector("#navbar").style.opacity =1;
  }
});

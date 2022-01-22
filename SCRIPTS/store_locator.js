// let city = "india";
let map_Div = document.getElementById("store_map")

function searchCity(){

    let city = document.getElementById("store_select").value;
    // console.log(city)
    showMap(city)
}
 showMap("india")

function showMap(city){
 
    map_Div.innerHTML = null;

    let map_D = document.createElement("div");
    map_D.setAttribute("id", "store_map_inner")
    let iframe = document.createElement("iframe");

    iframe.src="https://maps.google.com/maps?q="+city+"&t=&z=13&ie=UTF8&iwloc=&output=embed";
    map_D.append(iframe)
    map_Div.append(map_D)

}
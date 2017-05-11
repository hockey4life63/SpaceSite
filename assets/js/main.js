const KEY = "api_key=rHIvnZXQfuCEI4TiNtPSmjF3YctiZkjAr4uABwoc";
const APODURL = "https://api.nasa.gov/planetary/apod?";
const MARS = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";
const MARSEARTH = "earth_date=";
const MARSCAM = "camera=";
const CAMS = ["fhaz", "rhaz", "pancam", "navcam", "minites"]
    /*FHAZ       |  Front Hazard Avoidance Camera
    RHAZ       |  Rear Hazard Avoidance Camera
    PANCAM     |  Panoramic Camera
    NAVCAM     |  Navigation Camera
    MINITES    |  Miniature Thermal Emission Spectrometer (Mini-TES)*/
$.ajax({
    url: APODURL + KEY,
    method: 'GET'
}).done(function(response) {
    console.log(response)
    $(".container").append($("<img>").attr("src", response.url))
})
console.log()
$.ajax({
    url: MARS + MARSEARTH + "2017-1-1&" + KEY,
    method: "GET"
}).done(function(response) {
    $(".container").append($("<img>").attr("src", response.photos[0].img_src))
    console.log(response.photos[0].img_src)
})

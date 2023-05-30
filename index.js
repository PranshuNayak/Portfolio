
    mapboxgl.accessToken =
    "pk.eyJ1IjoicHJhbnNodW5heWFrIiwiYSI6ImNsM2EzMnNvajAxcDIzY29pcnhsMG10dmwifQ.JYAC1UYF_va8YF2N4Xg8-A";
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [80.0246,23.1769 ], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
  
  let profession_strings = [
    "Web developer & designer",
    "mobile app developer",
    "book reader",
  ];
  let profession_element = document.querySelector(".profession");
  let curString = 0,
    i = 0,
    speed = 100;
  const typewriter = () => {
    if (i < profession_strings[curString].length) {
      profession_element.innerHTML += profession_strings[curString][i];
      i++;
    } else {
      profession_element.innerHTML = "";
      curString = (curString + 1) % 3;
      i = 0;
    }
    setTimeout(typewriter, speed);
  };

  window.addEventListener("load", () => {
    typewriter();
  });


  let toggler = document.querySelector('.toggler');
  let menu = document.querySelector('.menu');
  let cross = document.querySelector('.cross');
  toggler.addEventListener('click',()=>{
    menu.style.height="100vh";
    menu.style.width="200px";
  })
  cross.addEventListener('click',()=>{
    menu.style.height="100vh";
    menu.style.width="0px";
    menu.style.transition="width 1s ease";
  })

  //setting the age
  let ageComponent = document.getElementById('current-age')
  ageComponent.innerHTML = new Date().getFullYear()-2002
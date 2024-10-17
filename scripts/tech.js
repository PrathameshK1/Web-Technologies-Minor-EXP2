const links = Array.from(document.getElementsByClassName("tech-selector"));

const data = {
  vehicle: {
    name: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: "launch-vehicle",
  },
  spacesport: {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: "spaceport",
  },
  capsule: {
    name: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: "space-capsule",
  },
};

links.forEach((link) => {
  link.addEventListener("mouseup", changeTechPage);
});

function changeTechPage(e) {
  links.forEach((link) => {
    link.classList.remove("active");
  });

  e.target.classList.add("active");
  switch (e.target.getAttribute("data-tech")) {
    case "vehicle":
      changeElemData(data.vehicle);
      break;
    case "spaceport":
      changeElemData(data.spacesport);
      break;
    case "capsule":
      changeElemData(data.capsule);
      break;
  }
}

function changeElemData(elem) {
  const name = $("name");
  const description = $("tech-description");
  const imgMobile = $("hero-mobile");
  const imgDesktop = $("hero-desktop");
  const vp = window.visualViewport.width;

  console.log(description);
  name.textContent = elem.name;
  description.textContent = elem.description;

  vp < 1200
    ? (imgMobile.src = `./assets/technology/image-${elem.image}-landscape.jpg`)
    : (imgDesktop.src = `./assets/technology/image-${elem.image}-portrait.jpg`);
}

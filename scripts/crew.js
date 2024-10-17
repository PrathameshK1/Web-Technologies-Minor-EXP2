const crew = {
  sharma: {
    name: "Rakesh Sharma",
    title: "Commander",
    description:
      "Rakesh Sharma is a former Indian Air Force pilot and the first Indian citizen to travel to space. He flew aboard the Soyuz T-11 spacecraft and conducted scientific experiments during his mission.",
  },
  pande: {
    name: "Sunil K. Nair",
    title: "Mission Specialist",
    description:
      "Sunil K. Nair is an Indian astronaut and scientist who has contributed significantly to India's space missions. He has participated in various research projects and space-related activities.",
  },
  gill: {
    name: "Anil Menon",
    title: "Pilot",
    description:
      "Anil Menon is an Indian-American astronaut and physician. He is part of NASA's Artemis program and has a background in aviation and medical science.",
  },
  chawla: {
    name: "Kalpana Chawla",
    title: "Flight Engineer",
    description:
      "Kalpana Chawla was the first woman of Indian origin in space. An aerospace engineer, she flew on two space shuttle missions and made significant contributions to space exploration.",
  },
};

const crewDots = Array.from(document.getElementsByClassName("crew-selector"));

crewDots.forEach((link) => {
  link.addEventListener("mouseup", (e) => {
    updateActiveLink(e);
    updateCrewInfo(e);
  });
});

function updateActiveLink(e) {
  crewDots.forEach(link => link.classList.remove("active"));
  e.target.classList.add("active");
}

function updateCrewInfo(e) {
  const crewKey = e.target.getAttribute("data-crew");
  const member = crew[crewKey];

  if (member) {
    updateElements(member);
  }
}

function updateElements(member) {
  const imgMobile = document.getElementById("crew-img-mobile");
  const imgTablet = document.getElementById("crew-img-tablet");
  const title = document.getElementById("title");
  const name = document.getElementById("name");
  const description = document.getElementById("crew-description");

  const formattedName = member.name.toLowerCase().replace(" ", "-");

  imgMobile.src = `./assets/crew/image-${formattedName}.webp`;
  imgTablet.src = `./assets/crew/image-${formattedName}.webp`;

  title.textContent = member.title;
  name.textContent = member.name;
  description.textContent = member.description;
}

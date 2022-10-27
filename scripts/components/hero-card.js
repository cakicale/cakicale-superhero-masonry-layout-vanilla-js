export const HeroCard = (name, realName, imgUrl, race, occupation, debut) => {
  const card = document.createElement("a");
  card.setAttribute("class", "card");
  card.setAttribute("href", `https://www.google.com/search?tbm=isch&q=${name}`);
  card.setAttribute("target", "_blank");

  const img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src", imgUrl);
  card.append(img);

  const description = document.createElement("div");
  description.setAttribute("class", "card-info");
  card.append(description);

  const heroName = document.createElement("h4");
  heroName.setAttribute("class", "card-description-title");
  heroName.innerHTML = name;
  description.append(heroName);

  const fullName = document.createElement("p");
  fullName.setAttribute("class", "card-description");
  fullName.innerHTML = "Real name: " + `${realName}`;
  description.append(fullName);

  const heroRace = document.createElement("p");
  heroRace.innerHTML = "Race: " + race;
  description.append(heroRace);

  const work = document.createElement("p");
  work.innerHTML = "Occupation: " + occupation;
  description.append(work);

  const br = document.createElement("hr");
  description.append(br);

  const firstAppearance = document.createElement("p");
  firstAppearance.innerHTML = "First appearance: " + debut;
  description.append(firstAppearance);

  return card;
};

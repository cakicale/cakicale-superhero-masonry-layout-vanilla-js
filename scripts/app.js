import { HeroCard } from "./components/hero-card.js";
import { getHeroes } from "./services/hero-service.js";

const App = async () => {
  const container = document.querySelector("#container");
  const heroes = await getHeroes();
  const newHeroes = heroes.slice(0, 120);

  for (const hero of newHeroes) {
    container.append(
      HeroCard(
        hero.name,
        hero.biography?.fullName || hero.name,
        hero.images.md,
        hero.appearance.race || "No info",
        hero.work.occupation,
        hero.biography.firstAppearance
      )
    );
  }
};

window.addEventListener("load", () => {
  App();
});

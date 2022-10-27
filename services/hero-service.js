const API_URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api";

export const getHeroes = async () => {
  const response = await fetch(`${API_URL}/all.json`);
  const res = await response.json();
  return res;
};

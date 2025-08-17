export const fetchAllBerries = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/berry/?limit=100'); // There are around 64 berries, so a limit of 100 should be safe
      const data = await response.json();
  
      const berryDetailsPromises = data.results.map(async (berry) => {
        const berryResponse = await fetch(berry.url);
        return berryResponse.json();
      });
  
      const berryDetails = await Promise.all(berryDetailsPromises);
      return berryDetails;
    } catch (error) {
      console.error("Failed to fetch berries:", error);
      return [];
    }
  };
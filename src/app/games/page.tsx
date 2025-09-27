import { getGamesList } from "@/lib/games/logic/list";
import { GridCard, LargeCard } from "@/lib/games/cards/gridCard";
import popular from "../popular";

const gamesList = getGamesList()


export default function Home() {

  let gamesDisplayed: string[] = []

  if (gamesList[0].name) gamesDisplayed.push(gamesList[0].name)
  
  const primaryCategories = [
    'puzzle',
    'endless',
    'sports',
    'vehicles',
    'arcade',
    'adventure',
    'action'
  ]
  // these are categories that display on front page

  const categoryMap: Record<string, Array<any>> = {};
  gamesList.forEach(game => {
    if (Array.isArray(game.categories)) {
      game.categories.forEach((cat: string) => {
        if (!categoryMap[cat]) categoryMap[cat] = [];
        categoryMap[cat].push(game);
      });
    }
  });

  return (
    <div className="w-full p-5">
      <title>Games | Rycell Games</title>
      <div className="flex flex-col w-full gap-5">
        <div className="grid grid-cols-4 not-md:grid-cols-1 gap-5 overflow-hidden not-md:grid-rows-1">
          {
            popular.map((info, index) => {
              if (gamesDisplayed.indexOf(info.folder || '') > -1) return
              if (!info.folder) return
              if (index > 3) return
              gamesDisplayed.push(info.folder)
              return <LargeCard name={info.name} id={info.folder} key={info.folder} />
            })
          }
        </div>
        <h1 className="text-5xl">Popular</h1>
        <div className="grid grid-cols-6 not-md:grid-cols-2 gap-5 grow max-h-full">
          {
            (() => {
              let displayedGames = 0
              return popular.map((info, index) => {
                if (gamesDisplayed.indexOf(info.folder || '') > -1) return null
                if (!info.folder) return
                if (displayedGames > 11) return
                displayedGames++
                gamesDisplayed.push(info.folder)
                return <GridCard name={info.name} id={info.folder} key={info.folder} />
              })
            })()
          }
        </div>

        {/* Category Section */}
        <div className="flex flex-col gap-8">
          {Object.keys(categoryMap).sort().map(category => (
            primaryCategories.includes(category) ? <div key={category}>
              {primaryCategories.includes(category) ? <h2 className="text-4xl mb-3">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>:null}
              <div className="grid grid-cols-6 not-md:grid-cols-2 gap-5 grow max-h-full">
                {categoryMap[category].map((info: any) => {
                  if (!info.folder) return null;
                  if (!primaryCategories.includes(category)) return null;
                  gamesDisplayed.push(info.folder);
                  return <GridCard name={info.name} id={info.folder} key={info.folder} />;
                })}
              </div> 
            </div> : null
          ))}
        </div>

        <h1 className="text-5xl">All Games</h1>
        <div className="grid grid-cols-6 not-md:grid-cols-2 gap-5 grow max-h-full">
          {
            (() => {
              let displayedGames = 0
              return gamesList.map((info, index) => {

                if (!info.folder) return
                displayedGames++
                gamesDisplayed.push(info.folder)
                return <GridCard name={info.name} id={info.folder} key={info.folder} />
              })
            })()
          }
        </div>
      </div>
    </div>
  );
}

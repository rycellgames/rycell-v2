import { getGamesList } from "@/lib/games/logic/list";
import { GridCard, LargeCard } from "@/lib/games/cards/gridCard";
import popular from "./popular";

const gamesList = getGamesList()


export default function Home() {

  let gamesDisplayed: string[] = []

  if (gamesList[0].name) gamesDisplayed.push(gamesList[0].name)

  return (
    <div className="w-full p-5">
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
        <h1 className="text-5xl">All Games</h1>
        <div className="grid grid-cols-6 not-md:grid-cols-2 gap-5 grow max-h-full">
          {
            (() => {
              let displayedGames = 0
              return gamesList.map((info, index) => {
                if (gamesDisplayed.indexOf(info.folder || '') > -1) return null
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

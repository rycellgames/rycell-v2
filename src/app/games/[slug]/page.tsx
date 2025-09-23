import fs from "fs";
import path from "path";
import GameFrame from "@/lib/games/frames/gameFrame";

type pageParams = {
    params: {
        slug: string
    }
}

type game = {
    name: string,
    categories: string
    description: string
}

export async function generateStaticParams() {
    const gamesDir = path.join(process.cwd(), "public/raw/games");
    const folders = fs.readdirSync(gamesDir);

    return folders.map((folder) => ({
        slug: folder,
    }));
}

async function getGameData(slug: string) {
    
    const gameDir = path.join(process.cwd(), "public/raw/games", slug);
    const filePath = path.join(gameDir, "game.json");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents);
}

export default async function GamePage({ params }: pageParams) {
    const resolvedParams = await params
    const game = await getGameData(resolvedParams.slug);

    return (
        <div className="p-5">
            <GameFrame params={resolvedParams} game={game}/>
            <p>{game.description}</p>
        </div>
    );
}

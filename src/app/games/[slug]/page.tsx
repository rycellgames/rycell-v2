
import fs from "fs";
import path from "path";
import GameFrame from "@/lib/games/frames/gameFrame";
import { AArrowUp } from "lucide-react";

type PageProps = {
    params: {
        slug: string;
    };
};

type game = {
    name: string;
    categories: string;
    description: string;
};

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
    return { id: slug, ...JSON.parse(fileContents) };
}

export default async function GamePage({ params }: PageProps) {
    const game = await getGameData(params.slug);
    return (
        <div className="p-5">
            <GameFrame game={game} />
            <p>{game.description}</p>
        </div>
    );
}

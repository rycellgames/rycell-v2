const fs = require('fs')
const path = require('path');

function crawlAndCompile(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            crawlAndCompile(fullPath);
        } else if (entry.isFile() && entry.name === 'game.json') {
            const folder = dir;
            const jsonPath = path.join(folder, 'game.json');
            const json = JSON.parse(fs.readFileSync(path.join(folder, 'game.json')))

            const data = {
                categories: json.categories.split(','),
                name: json.name,
                description: json.description
            }

            fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
        }
    });
}

crawlAndCompile(__dirname);
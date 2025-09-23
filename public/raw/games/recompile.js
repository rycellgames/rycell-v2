const fs = require('fs')
const path = require('path');

function crawlAndCompile(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            crawlAndCompile(fullPath);
        } else if (entry.isFile() && entry.name === 'categories.txt') {
            const folder = dir;
            const files = ['categories.txt', 'description.txt', 'name.txt'];
            let data = {};
            files.forEach(file => {
                const filePath = path.join(folder, file);
                if (fs.existsSync(filePath)) {
                    const key = file.replace('.txt', '');
                    data[key] = fs.readFileSync(filePath, 'utf8').trim();
                }
            });
            const jsonPath = path.join(folder, 'game.json');
            fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
            files.forEach(file => {
                const filePath = path.join(folder, file);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            });
        }
    });
}

// Start crawling from the current directory
crawlAndCompile(__dirname);
export default function about() {
    return (<div className="p-20 not-md:p-5 w-full flex flex-col items-center justify-center">
        <div className="flex flex-col max-w-300 gap-5">
            <h1 className="text-5xl text-left">About Us</h1>
            <p><strong>Rycell Games</strong> is your go-to site to play games anywhere. Whether you’re at school, stuck
                in a boring meeting, or just chilling at home — we’ve got you covered! With an epic library of fun,
                unblocked games, you can search for your favorites or check out what’s trending on the home page.</p>
            <p><strong>Our mission?</strong> To make sure you’re having fun. Every time you visit.</p>
            <p>We’ve got the latest and greatest games ready for you — and we’re always adding more. From fast-paced
                action to chill puzzles, there’s something for everyone.</p>

            <h3 className="text-3xl">Our Perks:</h3>
            <ul>
                <li>🎮 Huge game library</li>
                <li>⚡ Fast loading</li>
                <li>🕹️ No downloads required</li>
                <li>🌐 Unblocked &amp; Online</li>
                <li>💻 Works on any device like Chromebooks &amp; School Computers</li>
            </ul>
            <blockquote>
                <p>⚠️ <strong>Disclaimer:</strong> All games are provided as-is. Rycell Games does not host or own all
                    content directly. If you’re a content owner and have concerns, please contact us.</p>
            </blockquote>
            <p><strong>Play anywhere. Play anytime. Play Rycell.</strong></p>
            <h2 id="faq" className="text-4xl">FAQ</h2>
            <details>
                <summary>How do I recommend a game?</summary>
                🎮 To recommend a game to add, <a href="#contact-us">contact us</a> either by our <a href="mailto:rycellgames@outlook.com" className="mail">email</a> or the <a href="https://discord.gg/p9UgWmuJAW">discord server</a>!
            </details>

            <h2 className="text-4xl" id="contact-us">Contact Us</h2>
            <p>Got a suggestion, need help or have a complaint? Drop us an email at <strong><a href="mailto:rycellgames@outlook.com" className="mail">rycellgames@outlook.com</a></strong> or join
                the <strong><a href="https://discord.gg/p9UgWmuJAW">discord server</a></strong>!</p>

        </div>
    </div>)
}
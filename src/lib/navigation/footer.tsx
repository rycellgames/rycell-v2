const logo = {
    mainLogo: '/static/images/brand/logotransparent.png'
}

export const metadata = {
    title: 'about us'
}

export default function Footer() {
    return (<>
        <footer className="bg-main-700 min-h-[300px] mt-10 box-border p-10 w-full flex flex-row not-md:flex-col not-md:gap-10 justify-between not-md:min-h-auto">

            <div className='flex flex-col'>
                <a className=" w-full max-w-[300px] flex flex-row items-center gap-2" href="/">
                    <img alt="Yellow Emoji wearing sunglasses impressed" className="h-full max-h-[100px] aspect-square" src={logo.mainLogo}></img>

                    <div>
                        <p className="font-bold text-[#6200ff] text-2xl font-gothic">RYCELL <span className="text-white">GAMES</span></p>
                        <p className='max-w-[300px]'>Your go-to site to enjoy yourself, playing any game any time.</p>
                    </div>
                </a>
            </div>
            <div className='flex flex-row-reverse gap-10 not-md:w-full not-md:grid not-md:grid-cols-2'>
                <div className='flex flex-col not-md:w-full'>
                    <p className='font-bold text-2xl text-right mb-2 not-md:text-center'>About</p>
                    <a href="/about" className='text-right not-md:text-center'>About Us</a>
                    <a href="/privacy" className='text-right not-md:text-center'>Privacy Policy</a>
                    <a href="/contact" className='text-right not-md:text-center'>Contact Us</a>
                </div>
                <div className='flex flex-col not-md:w-full not-md:text-center'>
                    <p className='font-bold text-2xl text-right mb-2 not-md:w-full not-md:text-center'>Socials</p>
                    <a href="https://github.com/rycellgames/rycellgames.github.io" rel="noopener" target='_blank' className='text-right not-md:text-center'>Github</a>
                    <a href="https://discord.gg/9T7Rpv7NY9" rel="noopener" target='_blank' className='text-right not-md:text-center'>Discord</a>
                </div>
            </div>

        </footer>
    </>)
}

const Hero = () => {
    return (
        <main className="flex flex-col md:flex-row justify-center items-center gap-2 sm:gap-10 lg:gap-20">
            <div>
                <div className="font-bold text-[40px] sm:text-[55px] lg:text-[60px] text-nowrap">
                    <div>
                        Make better
                    </div>
                    <div className="flex items-start gap-6">
                        coffee <img className="inline h-[45px] sm:h-[65px] lg:h-[80px]" src="./icons/coffee.svg" />
                    </div>
                </div>
                <div className="text-[15px] sm:text-[20px] lg:text-[30px] font-light">
                    Why learn how to blog?
                </div>
            </div>
            <div>
                <img className="w-[450px] lg:w-[600px]" src="./images/coding2.jpeg" />
            </div>
        </main>
    )
}

export default Hero

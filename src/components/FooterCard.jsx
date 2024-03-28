import Button from "./Button"

const FooterCard = () => {

    return (
        <section className="flex flex-col gap-4 bg-white">
            <article className="bg-[#f7fafc] flex flex-col md:flex-row justify-between border-[2px] rounded-md w-full">
                <div className="p-3 sm:p-6 lg:p-16 flex flex-col justify-center gap-8 lg:gap-14">
                    <div className="flex flex-col gap-3">
                        <div className="text-[40px] font-bold">
                            What is lorem Ipsum?
                        </div>
                        <div className="text-[16px] text-pretty">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that in the way you can see thing in a different way...
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <span>May 20th 2020</span>
                        <a href="/">Read more</a>
                    </div>
                </div>
                <div className="md:min-w-[250px] md:max-w-[700px] md:min-h-[550px] max-h-[500px]">
                    <img className="object-cover w-full h-full" src="https://www.10wallpaper.com/wallpaper/1366x768/1801/Office_laptop_programming_coffee_4K_1366x768.jpg" alt="imagen de persona con laptop" />
                </div>
            </article>
            <Button />
        </section>
    )
}

export default FooterCard

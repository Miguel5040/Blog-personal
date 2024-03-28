
const MainCard = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between border-[2px] rounded-md shadow-xl w-full">
            <div className="p-3 sm:p-6 lg:p-8 flex flex-col justify-between gap-8 lg:gap-14 md:min-w-[422px]">
                <div className="flex flex-col gap-3">
                    <div className="text-[30px] font-bold">
                        Long established
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
            <div className="md:min-w-[250px] md:max-w-[450px]">
                <img className="object-cover w-full h-full" src="./images/imagen-laptop.jpg" alt="imagen de persona con laptop" />
            </div>
        </section>
    )
}

export default MainCard

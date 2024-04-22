
const ArticleCard = (props) => {

    return (
        <section className="flex flex-col md:flex-row justify-between border-[2px] rounded-md shadow-lg w-full">
            <div className="md:min-w-[200px] md:max-w-[300px]">
                <img className="object-cover w-full h-full" src={`./images/${props.img}`} alt={props.alt} />
            </div>
            <div className="p-2 sm:p-4 lg:p-6 flex flex-col justify-between gap-3 lg:gap-10 md:min-w-[422px]">
                <div className="flex flex-col gap-3">
                    <div className="text-[24px] font-bold">
                        {props.title}
                    </div>
                    <div className="text-[14px] text-pretty">
                        {props.description}
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>{props.date}</span>
                    <a href="/">Read more</a>
                </div>
            </div>
        </section>
    )
}

export default ArticleCard

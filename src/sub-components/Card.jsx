
const Card = (props) => {

    return (
        <article className="flex flex-col justify-between border-[2px] rounded-md shadow-lg">
            <div className="">
                <img className="object-cover w-full h-full" src={props.image} alt={props.alt} />
            </div>
            <div className="p-5 flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-3">
                    <div className="text-[20px] font-bold">
                        {props.title}
                    </div>
                    <div className="text-[14px] text-pretty">
                        {props.description}
                    </div>
                </div>
                <div className="text-[12px] flex justify-between">
                    <span>
                        {props.date}
                    </span>
                    <a className="font-medium" href="">Read more</a>
                </div>
            </div>
        </article>
    )
}

export default Card

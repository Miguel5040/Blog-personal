import ArticleCard from './ArticleCard'

const AritclesList = () => {

    return (
        <main className="flex flex-col gap-4">
            {/* Aqui deberia ir el map del array de articulos que vamos a sacar de la base de datos futura */}
            <ArticleCard
                img={"imagen-laptop.jpg"}
                alt={"Imagen de laptop"}
                title={"Motso y gorda"}
                description={"El habitat natural de los perros es el hogar, es por esa razon que los motsos no tienen que estar saliendo a la calle, ademas de que los podria atropellar un carro..."}
                date={"June 17 2024"}
            />
            <ArticleCard
                img={"imagen-laptop.jpg"}
                alt={"Imagen de laptop"}
                title={"Motso y gorda"}
                description={"El habitat natural de los perros es el hogar, es por esa razon que los motsos no tienen que estar saliendo a la calle, ademas de que los podria atropellar un carro..."}
                date={"June 17 2024"}
            />
            <ArticleCard
                img={"imagen-laptop.jpg"}
                alt={"Imagen de laptop"}
                title={"Motso y gorda"}
                description={"El habitat natural de los perros es el hogar, es por esa razon que los motsos no tienen que estar saliendo a la calle, ademas de que los podria atropellar un carro..."}
                date={"June 17 2024"}
            />
            <ArticleCard
                img={"imagen-laptop.jpg"}
                alt={"Imagen de laptop"}
                title={"Motso y gorda"}
                description={"El habitat natural de los perros es el hogar, es por esa razon que los motsos no tienen que estar saliendo a la calle, ademas de que los podria atropellar un carro..."}
                date={"June 17 2024"}
            />
            <ArticleCard
                img={"imagen-laptop.jpg"}
                alt={"Imagen de laptop"}
                title={"Motso y gorda"}
                description={"El habitat natural de los perros es el hogar, es por esa razon que los motsos no tienen que estar saliendo a la calle, ademas de que los podria atropellar un carro..."}
                date={"June 17 2024"}
            />
        </main>
    )
}

export default AritclesList

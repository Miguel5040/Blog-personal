import React from "react"
import Card from "../sub-components/Card"

const Sections = () => {

    return (
        <section className="grid grid-flow-col lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-rows-1 sm:grid-rows-2 grid-rows-3 gap-8">
            <Card
                image={"./images/equipo-programacion.jpg"}
                alt={"imagen de prueba"}
                title={"Motso y gorda"}
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ut explicabo aliquid quam tempore porro recusandae odit nesciunt ipsum mollitia!"}
                date={"June 17th 2024"}
            />
            <Card
                image={"./images/computadora-programacion.jpg"}
                alt={"imagen de prueba"}
                title={"Motso y gorda"}
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ut explicabo aliquid quam tempore porro recusandae odit nesciunt ipsum mollitia!"}
                date={"June 17th 2024"}
            />
            <Card
                image={"./images/codigo-imagen.jpeg"}
                alt={"imagen de prueba"}
                title={"Motso y gorda"}
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ut explicabo aliquid quam tempore porro recusandae odit nesciunt ipsum mollitia!"}
                date={"June 17th 2024"}
            />
        </section>
    )
}


export default Sections

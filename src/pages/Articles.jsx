import React from 'react'
import MainPicture from "../components/MainPicture"
import Title from "../components/Title"

const Articles = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <MainPicture />
            <div className="max-w-[1200px] w-[75%]">
                <Title />
            </div>
        </div>
    )
}

export default Articles

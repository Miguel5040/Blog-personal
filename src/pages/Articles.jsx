import React from 'react'
import MainPicture from "../components/MainPicture"
import Title from "../components/Title"
import Content from '../sub-components/Content'
import ButtonTop from '../sub-components/ButtonTop'

const Articles = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <MainPicture />
            <div className="max-w-[1200px] w-[70%]">
                <Title />
                <Content />
            </div>
            <ButtonTop />
        </div>
    )
}

export default Articles

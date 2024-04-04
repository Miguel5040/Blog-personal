import React from 'react'
import MainPicture from "../components/MainPicture"
import Title from "../components/Title"
import Content from '../sub-components/Content'
import ButtonTop from '../sub-components/ButtonTop'
import AritclesList from '../components/ArticlesList'

const Articles = () => {
    return (
        // <div className="motso w-full flex flex-col items-center relative">
        //     <MainPicture />
        //     <div className="max-w-[720px]">
        //         <Title />
        //         <Content />
        //     </div>
        //     <ButtonTop />
        // </div>
        <AritclesList />
    )
}

export default Articles

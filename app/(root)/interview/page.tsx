import React from 'react'
import Agent from "@/components/Agent";

const Page = () => {
    return (
        <>
            <h3>Interview generation</h3>

            <Agent userName={"you"} type={'generate'}/>
        </>
    )
}
export default Page

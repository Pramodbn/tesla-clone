import React from 'react'
import styled from "styled-components"
import Section from "./Section";


function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundIMG="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundIMG="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundIMG="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundIMG="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Lowest Cost Solar Pannels in America"
                description="Money-back Gaurantee"
                backgroundIMG="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundIMG="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundIMG="accessories.jpg"
                leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
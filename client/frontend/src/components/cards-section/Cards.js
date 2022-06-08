import { Banner } from "./banner/Banner";
import { Card } from "./card/Card"

export const Cards = (props) => {
    
    return (
        <section className="cards">
            <Banner />
            <Card />
        </section>
    )
}
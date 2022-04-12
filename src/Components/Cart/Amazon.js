import React from "react";
import Data from "../Cart/Data";
import Card from "../Cart/Card";
import "./Styles/amazon.css"

const Amazon = ({ handleClick }) => {
    return (
        <section>
            {Data.map((item) => (
                <Card key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
    );
};

export default Amazon;
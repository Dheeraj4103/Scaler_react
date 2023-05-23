import React from "react";
import Accordian from "../../Components/Accordian/Accordian";

function BestPracticesPage() {

    const list = [
        'Reder list item 1',
        'Reder list item 2',
        'Reder list item 3',
        'Reder list item 4'
    ];

    return <Accordian heading="My Accordian">
        <ul>
            {
                list.map((item, index) => {
                    return <li key={index}>{ item }</li>
                })
            }
        </ul>
        <Accordian heading="Nested Accordian" defaultExpaned={true}> 
        <ul>
            {
                list.map((item, index) => {
                    return <li key={index}>{ item }</li>
                })
            }
        </ul>
    </Accordian>
    </Accordian>
}

export default BestPracticesPage;
import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { spoon_left, spoon_right } from "../asset/icon";

import  { Grid } from "../elements"
import { getEventList } from "../shared/api.js";
import EventPost from "../components/EventPost.js";

const Event = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        async function getList(){
            const {data} = await getEventList()
            console.log(data)
            setList(data);
        }
        return getList();       
    },[]);

    console.log("list", list)
    
    return (        
        <>
                <Title>
                    <img
                        src={require("../asset/title/h_title.png").default}
                        alt="event"
                    />
                </Title>

                <Grid width="1200px" margin="0 auto">                 
                    <EventList>                        
                        {list.length>0 ? list.map((item, idx) => (
                            <EventPost key={idx} {...item}/>
                        )) : ""}
                    </EventList>
                </Grid>
        </>
    )
};

const Title = styled.div`
    width: max-content;
    margin: auto;
    margin-top: 105px;
    margin-bottom: 35px;
    position: relative;
    ::before {
        content: "";
        display: block;
        position: absolute;
        left: -50px;
        top: 6px;
        width: 36px;
        height: 12px;
        background: url(${spoon_left}) no-repeat;
    }
    ::after {
        content: "";
        display: block;
        position: absolute;
        top: 6px;
        right: -50px;
        width: 36px;
        height: 12px;
        background: url(${spoon_right}) no-repeat;
    }
`;



const EventList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: auto;
`;

export default Event;

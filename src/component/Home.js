import React from "react";
import { useState, useEffect } from "react";
import Menu from "./Menu";
export default function Home(props){

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("count변경  1",count);
        timer()
    },[count])


    const timer = async()=>{
        // await new Promise((resolve)=>{
        //     setTimeout(()=>{
        //         console.log("5초 기다려라  2");
        //         resolve()
        //     },5000)
        // })
        // console.log("5초 끝나고 실행  3")
    }


    return(
        <div>
            <div>Home</div>
            <div>
                --------------------
                <Menu cnt={count}/>
                --------------------
            </div>
            <div>{count}</div>
            <div>
                <button onClick={()=>{setCount(count + 1)}}>+</button>
                <button onClick={()=>{setCount(count - 1)}}>-</button>
            </div>
        </div>


        
    )
}


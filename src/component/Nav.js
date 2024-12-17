import React from "react"
import { Link } from "react-router-dom"

export default function Nav(){
    return(
        <div>
            <ul>
                <li>
                    <Link to={"/"}>홈</Link>
                </li>
                <li>
                    <Link to={"/notice"}>공지사항</Link>
                </li>
                <li>
                    <Link to={"/menu"}>메뉴</Link>
                </li>
            </ul>
        </div>
    )
}
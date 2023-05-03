import { useState } from "react";
import "../styles/Searchbar.css";
import Subbar from "./Subbar";


function Searchbar() {
    return(
        <div className="container">
            <div className="content">
                <Subbar/>
                <div>Searchbarresults</div>
            </div>
        </div>
    );
}
export default Searchbar;
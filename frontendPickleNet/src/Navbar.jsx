import React from "react";
import { NavLink } from "react-router-dom";

//define Navbar component
function Navbar(){
    return(
        //a container <nav> element (horizontal bar)
        <nav
        style={{
            position: "fixed", //fix position
            overflow: "hidden",

            //put at top
            top:0,
            left:0,

            width: "100%", //span full width of screen
            height: "80px", //set a consistent height
            display: "flex", //items in a row
            justifyContent: "space-between", //spread content apart
            alignItems: "center", //centers items (vertically)
            padding: "10px 20px",
            backgroundColor: "#4CAF50", // green
            color: "white", //text color
            zIndex: 1000, //make sure it stays above page
            boxSizing: "border-box", //makes it so the words fit on nav bar, not off page
            overflowX: "hidden",
            fontSize: "140%",
            textShadow: "2px 2px 4px black",
            fontWeight: "bold",
        }}
        >
            {/*left side: app title "PickleNet" */}
            <h2>PickleNet</h2>

            {/*right side: navigation links */}
            <div>
                <NavLink
                to="/" //route to headlines page
                style={({ isActive }) => ({
                    marginRight: "20px", 
                    textDecoration: "none", 
                    color: "white",
                    fontWeight: isActive ? "bold" : "normal", 
                    borderBottom: isActive ? "2px solid white" : "none"

                })}
                >
                Headlines
                </NavLink>

                <NavLink
                to="/write" //route to write page
                style={({ isActive }) => ({ 
                    textDecoration: "none", 
                    color: "white",
                    fontWeight: isActive ? "bold" : "normal", 
                    borderBottom: isActive ? "2px solid white" : "none"

                })}
                >
                Write
                </NavLink>
            </div>
        </nav>
    )
}

// Export  Navbar imports into pages
export default Navbar;

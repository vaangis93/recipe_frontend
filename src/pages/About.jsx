import { useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { AboutContainer, ImageStyle } from "../styles/AboutStyle";

function About() {

        const [forceError, setForceError] = useState(false);
    
        if (forceError) {
            throw new Error("Error triggered by clicking the button!");
        }

       
    return ( 
    <>
    
   
    <AboutContainer>
    <button onClick={() => setForceError(true)}>Trigger Error</button>
        
    <ImageStyle src="public\pics\coolCat.jpg" alt="cat" />
    <ImageStyle src="public\pics\coolCat.jpg" alt="cat" />
    <ImageStyle src="public\pics\coolCat.jpg" alt="cat" />
    <ImageStyle src="public\pics\coolCat.jpg" alt="cat" />
    <ImageStyle src="public\pics\coolCat.jpg" alt="cat" />
    <ImageStyle src="public\pics\coolCat.jpg" alt="cat" />
    <ImageStyle src="public\pics\coolCat.jpg" alt="cat" />
    <ImageStyle src="public\pics\coolCat.jpg" alt="cat" />
    <ImageStyle src="public\pics\coolCat.jpg" alt="cat" />
    </AboutContainer>
   
</>
    )
}

export default About;
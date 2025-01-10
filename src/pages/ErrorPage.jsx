import { useNavigate } from "react-router";

function ErrorPage() {
const navigate = useNavigate();

const handleClickNavigate = () => {
    navigate("/Home")
}

    return ( 
        <>
        <h1>wupsi dupsi !</h1>
        <p>Something went wrong or the page dont exist</p>
        <button onClick={handleClickNavigate}>Home</button>

        
        </>
     );
}

export default ErrorPage;
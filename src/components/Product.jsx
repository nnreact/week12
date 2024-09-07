import { useNavigate, useParams } from "react-router-dom"

function Product() {

    const { productId } = useParams();

    const navigate = useNavigate();

    const handleClick = () => {
        // window.location.href = "/"
        navigate("/about");
    }

    return (
        <>
            <button onClick={handleClick}>Home</button>
            <div>Product: {productId}</div>
        </>
    )
}

export default Product
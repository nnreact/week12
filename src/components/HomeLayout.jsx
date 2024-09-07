import { Link, Outlet } from "react-router-dom"

function HomeLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet /> 

            <h1>Home Layout Footer</h1>
        </div>
    )
}

export default HomeLayout
import { Link } from "@nextui-org/react";

// TODO: Make this component work

const Arrow = ( {to} ) => {
    console.log(to);
    return (
        <Link to={to} spy={true} smooth={true} >
            <img src="/down_icon-icons.com_61209.png" alt="Outlined arrow for navigational purposes" className="arrow" />
        </Link>
    );
};

export default Arrow;
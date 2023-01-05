import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

function Category() {
    return (
        <List>
            <SLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={"/cuisine/American"}>
                <FaHamburger />
                <h4>Hamburger</h4>
            </SLink>
            <SLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={"/cuisine/Japanese"}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink> 
        </List>       
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    background: linear-gradient(35deg, #4949494, #313131);
    @media screen and (min-width: 576px) {
        margin: 1rem 0rem; 
    }

`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    @media screen and (min-width: 576px) {
        margin-right: 1rem;
    } @media screen and (min-width: 992px) {
        margin-right: 1rem;
    } @media screen and (min-width: 1200px) {
        margin-right: 3rem;
    }
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.75rem;
    }
    svg {
        color: white;
        font-size: 2.1rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
    
        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }
`;
export default Category
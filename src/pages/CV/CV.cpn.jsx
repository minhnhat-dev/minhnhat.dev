import styled from "styled-components"
import { mobile } from "../../responsive"
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    ::-webkit-scrollbar {
        display: none;
    }
`
export const LeftHeader = styled.div`
    width: 500px;
    position: sticky;
    display: flex;
    height: calc(100vh - 80px);
    top: 80px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #195a70;
    ${mobile({ display: "none" })}
`

export const Content = styled.div`
    height: calc(100vh - 80px);
    top: 80px;
    position: relative;
    padding: 20px;
    ${mobile({ padding: "10px", marginTop: "20px" })}
`
export const Img = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.4);
`
export const MenuList = styled.ul`
    margin-top: 20px;
    margin-left: 0;
`

export const MenuItem = styled.li`
    margin: 10px 0;
    color: white;
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 20px;
    background-color: ${props => (props.action ? "#113f4e" : "transform")};

    &:hover {
        background-color: #113f4e;
    }
`
export const About = styled.div`
    margin-bottom: 20px;
`
export const Hr = styled.div`
    height: 1px;
    background-color: gray;
`
export const Experience = styled.div`
    margin-top: 30px;
`
export const Education = styled.div``
export const Skills = styled.div``
export const Projects = styled.div``
export const Interests = styled.div``
export const TheEnd = styled.div``
export const Name = styled.h1`
    color: #195a70;
    ${mobile({ fontSize: "35px" })}
`
export const Title = styled.span``
export const Text = styled.span``

export const TextTitle = styled.p``
export const TextContent = styled.p`
    margin: 10px 0;
`
export const TextWelcome = styled.span`
    ${mobile({ fontSize: "25px" })}
`
export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`
export const Icon = styled.button`
    padding: 8px;
    border: none;
    background-color: transparent;
    outline: none;
`

export const IconImage = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 5px;
`

export const IconImageHeader = styled.img`
    width: 23px;
    height: 23px;
    margin-right: 5px;
`
export const ContentList = styled.i``
export const Link = styled.a``
export const AboutContent = styled.div``
export const Table = styled.table`
    margin-left: 20px;
    border-spacing: 0 20px;
`
// handle responsive for mobile

export const MenuListMobile = styled.ul`
    position: fixed;
    left: 0;
    top: 80px;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: #195a70;
    padding-top: 25px;
    text-align: center;
    visibility: hidden;
    clip-path: circle(20px at -10% -10%);
    -webkit-clip-path: circle(20px at -10% -10%);
    transition: all 1s ease-out;
    ${mobile({ visibility: "visible" })}
    pointer-events: none;

    li {
        opacity: 0;
        margin: 15px 20px;
    }

    &.open {
        clip-path: circle(1000px at -10% -10%);
        -webkit-clip-path: circle(1000px at -10% -10%);
        pointer-events: all;
        > li {
            opacity: 1;
            transition: all 0.2s ease-out;
        }
    }
`
export const ButtonBars = styled.button`
    position: fixed;
    left: 5px;
    top: 85px;
    z-index: 1000;
    visibility: hidden;
    ${mobile({ visibility: "visible" })}
    border: 2px solid  #00b2b2;
    background-color: white;
    outline: none;
    border-radius: 5px;
`
export const Header = styled.h1`
    color: #195a70;
    ${mobile({ fontSize: "35px" })}
`

export const SkillList = styled.ul`
    display: flex;
   flex-wrap: wrap;
   margin: 20px;
`

export const SkillItem = styled.li``
export const SkillImage = styled.img`
    object-fit: cover;
    width: 70px;
    height: 70px;
    border-radius: 10px;
`
export const SkillContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 10px;
`

export const ProjectsContainer = styled.div`
   display: flex;
`
export const ProjectsContainerWrapper = styled.div`
    border-radius: 5px;
    border: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`
export const ProjectsContainerLeft = styled.div`flex: 1;`;
export const ProjectsContainerRight = styled.div`flex: 1;`
export const NameProject = styled.p``
export const LinkDemo = styled.p``
export const LinkGit = styled.p``

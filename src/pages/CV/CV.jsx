import React, { useState } from "react"
import IconTypeScript from "../../shared/IconTypeScript/IconTypeScript"
import IconJS from "../../shared/IconJS/IconJS"
import IconDocker from "../../shared/IconDocker/IconDocker"
import IconGraphQL from "../../shared/IconGraphQL/IconGraphQL"
import IconMongodb from "../../shared/IconMongodb/IconMongodb"
import IconNodeJs from "../../shared/IconNodeJs/IconNodeJs"
import IconPostgreSQL from "../../shared/IconPostgreSQL/IconPostgreSQL"
import IconReactJS from "../../shared/IconReactJS/IconReactJS"
import IconRedis from "../../shared/IconRedis/IconRedis"
import IconRedux from "../../shared/IconRedux/IconRedux"
import IconFacebook from "../../shared/IconFacebook/IconFacebook"
import IconGithub from "../../shared/IconGithub/IconGithub"
import {
    Container,
    LeftHeader,
    Content,
    Img,
    MenuList,
    MenuItem,
    About,
    Experience,
    Education,
    Skills,
    Projects,
    Interests,
    TheEnd,
    Name,
    Title,
    Text,
    Icon,
    TextContainer,
    TextTitle,
    AboutContent,
    Link,
    Table,
    TextWelcome,
    ButtonBars,
    MenuListMobile,
    Header,
    Hr,
    IconImage,
    TextContent,
    IconImageHeader
} from "./CV.cpn"

function CV() {
    const menu = ["About", "Experience", "Education", "Skills", "Projects", "Interests", "The end"]
    const [menuSelected, setMenuSelected] = useState("About")

    const [isMobile, setIsMobile] = useState(false)

    return (
        <Container>
            <ButtonBars
                onClick={() => setIsMobile(!isMobile)}
                className={`mr-10 fs-20 ${isMobile ? "fas fa-times" : "fas fa-bars"}`}
            ></ButtonBars>
            <MenuListMobile className={`${isMobile && "open"}`}>
                {menu.map((item, index) => (
                    <MenuItem
                        className="underline-hover"
                        action={menuSelected === item}
                        onClick={() => {
                            setMenuSelected(item)
                            setIsMobile(!isMobile)
                        }}
                        key={index}
                    >
                        {item}
                    </MenuItem>
                ))}
            </MenuListMobile>

            <LeftHeader>
                <Img src="person/avatar.jpg"></Img>
                <MenuList>
                    {menu.map((item, index) => (
                        <MenuItem
                            className="underline-hover"
                            action={menuSelected === item}
                            onClick={() => setMenuSelected(item)}
                            key={index}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </MenuList>
            </LeftHeader>
            <Content>
                <About>
                    <Name className="fs-50">Nguyễn Minh Nhật</Name>
                    <TextContainer>
                        <Icon className="mr-10 fs-20 fas fa-address-card"></Icon>
                        <Text className="fs-18 fw-500">FULL STACK WEB DEVELOPER</Text>
                    </TextContainer>
                    <TextContainer>
                        <Icon className="mr-10 fs-20 fas fa-globe-asia"></Icon>
                        <Text className="fs-18 fw-500">HO CHI MINH CITY, VIETNAM</Text>
                    </TextContainer>
                    <TextContainer>
                        <Icon className="mr-10 fs-20 far fa-envelope"></Icon>
                        <Text className="fs-18 fw-500">minhnhat.devweb@gmail.com</Text>
                    </TextContainer>
                    <TextContainer>
                        <Icon className="mr-10 fs-20 fas fa-phone-alt"></Icon>
                        <Text className="fs-18 fw-500">0707922483</Text>
                    </TextContainer>
                    <TextContainer style={{ marginTop: "20px" }}>
                        <Icon className="mr-10 fs-25 far fa-hand-peace"></Icon>
                        <TextWelcome className="fs-30 fw-700">Welcome to visit my CV online!</TextWelcome>
                    </TextContainer>

                    <TextContainer>
                        <Icon className="mr-10 fs-25 fas fa-server"></Icon>
                        <TextWelcome className="fs-25 fw-700">Short description of my skills.</TextWelcome>
                    </TextContainer>

                    <Table>
                        <tr>
                            <td style={{ borderRadius: "5px" }} className="bg-base-lime">
                                <Icon className="fs-25 fab fa-node-js"></Icon>
                            </td>
                            <td style={{ paddingLeft: "10px" }}>
                                <Text className="fs-18 fw-500">
                                    <b>Back-End:</b> I am experienced in Javascript <IconJS />, TypeScript{" "}
                                    <IconTypeScript />, GraphQL <IconGraphQL />, PostgreSQL <IconPostgreSQL />, MongoDB{" "}
                                    <IconMongodb /> ...etc on NodeJS <IconNodeJs /> platform. I know a little about
                                    Docker <IconDocker /> and build my own project with Docker.
                                </Text>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderRadius: "5px" }} className="bg-base-seafoam">
                                <Icon className="fs-25 fab fa-react"></Icon>
                            </td>
                            <td style={{ paddingLeft: "10px" }}>
                                <Text className="fs-18 fw-500">
                                    <b>Front-End:</b> I am experienced in Javascript <IconJS /> on ReactJS{" "}
                                    <IconReactJS /> Framework, using Redux <IconRedux />, Redux Toolkit, Bootstrap...etc
                                </Text>
                            </td>
                        </tr>
                    </Table>
                    <TextContainer style={{ marginTop: "40px" }}>
                        <Text className="fs-20">
                            My website:{" "}
                            <b className="underline-hover pointer">
                                <Link className="text-link" href="https://minhnhat.dev" target="_blank">
                                    minhnhat.dev
                                </Link>
                            </b>
                        </Text>
                    </TextContainer>
                    <TextContainer>
                        <Link href="https://www.facebook.com/face.NhatTay" target="_blank">
                            <IconFacebook className="mr-10" />
                        </Link>
                        <Link href="https://github.com/minhnhat-dev" target="_blank">
                            <IconGithub />
                        </Link>
                    </TextContainer>
                </About>
                <Hr />
                <Experience>
                    <Header className="fs-40">Experience</Header>
                    <Table>
                        <tr>
                            <td style={{ width: "70%" }}>
                                <TextContent className="fs-25 fw-700 dark-basic-yellow">
                                    <IconImageHeader src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633850790/public/icons8-star-filled_1.gif" />
                                    KING FOOD
                                </TextContent>
                                <TextContent className="fs-20 fw-700 mb-20">BACK-END ENGINEER</TextContent>
                                <TextContent>
                                    <IconImage src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633851301/public/icons8-flag-60_1.png" />
                                    Provide API and build support features for sales and management of orders, products,
                                    inventory... of KING FOOD
                                </TextContent>
                                <TextContent>
                                    <IconImage src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633851301/public/icons8-flag-60_1.png" />
                                    I'm the <b>Leader</b> of a small team of about 3 members, analyzing requirements and
                                    creating tasks for members to solve problems.
                                </TextContent>
                                <TextContent>
                                    <IconImage src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633851301/public/icons8-flag-60_1.png" />
                                    <b>KING FOOD: </b>The supermarket chain provides fresh, clean food for the family's
                                    daily meals, not only fresh vegetables, fresh meat, fresh fruits, nutritious drinks
                                    but also a variety of foods from all over the world
                                </TextContent>
                            </td>
                            <td style={{ width: "30%", textAlign: "center" }}>
                                <span>Oct 2019 - Present</span>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: "70%" }}>
                                <TextContent className="fs-25 fw-700 dark-basic-blue">
                                    <IconImageHeader src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633850790/public/icons8-star-filled_1.gif" />
                                    DIROX
                                </TextContent>
                                <TextContent className="fs-20 fw-700 mb-20">BACK-END ENGINEER</TextContent>
                                <TextContent>
                                    <IconImage src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633851301/public/icons8-flag-60_1.png" />
                                    Provide API and participate in company projects
                                </TextContent>
                                <TextContent>
                                    <IconImage src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633851301/public/icons8-flag-60_1.png" />
                                    I have the opportunity to work with many frameworks and technologies such as:
                                    GraphQL, Loopback.io, AWS Service, Fastify...
                                </TextContent>
                                <TextContent>
                                    <IconImage src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633851301/public/icons8-flag-60_1.png" />
                                    <b>DIROX: </b>A recognised IT Advisory and Software Development company For more
                                    than 17 years.
                                </TextContent>
                            </td>
                            <td style={{ width: "30%", textAlign: "center" }}>
                                <span>Oct 2019 - Present</span>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: "70%" }}>
                                <TextContent className="fs-25 fw-700 dark-basic-blue">
                                    <IconImageHeader src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633850790/public/icons8-star-filled_1.gif" />
                                    HARAVAN
                                </TextContent>
                                <TextContent className="fs-20 fw-700 mb-20">BACK-END ENGINEER</TextContent>
                                <TextContent>
                                    <IconImage src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633851301/public/icons8-flag-60_1.png" />
                                    Provide API and participate in company projects
                                </TextContent>
                                <TextContent>
                                    <IconImage src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633851301/public/icons8-flag-60_1.png" />
                                    I have the opportunity to work with many frameworks and technologies such as:
                                    GraphQL, Loopback.io, AWS Service, Fastify...
                                </TextContent>
                                <TextContent>
                                    <IconImage src="https://res.cloudinary.com/minhnhat-dev/image/upload/v1633851301/public/icons8-flag-60_1.png" />
                                    <b>DIROX: </b>A recognised IT Advisory and Software Development company For more
                                    than 17 years.
                                </TextContent>
                            </td>
                            <td style={{ width: "30%", textAlign: "center" }}>
                                <span>Oct 2019 - Present</span>
                            </td>
                        </tr>
                    </Table>
                </Experience>
                <Education></Education>
                <Skills></Skills>
                <Projects></Projects>
                <Interests></Interests>
                <TheEnd></TheEnd>
            </Content>
        </Container>
    )
}

export default CV

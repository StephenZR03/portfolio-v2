import Link from "next/link"
import Image from "next/image"
import { Text, useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
justify-content: center;
height: 30px;
line-height: 20px;
padding: 10px 0px;

@media (hover: hover) {
    &:hover img {
        transform: rotate(20deg);
    }
}
`

const Logo = () => {
    const logo = `/images/icon${useColorModeValue('', '-dark')}.svg`

    return (
        <Link href="/">
            <LogoBox>
                <Image src={logo} width={20} height={20} alt="logo" />
                <Text
                    color={useColorModeValue('#121728', '#efefef')}
                    display="flex"
                    alignItems="center"
                    fontSize='sm'
                    fontWeight="bold"
                    ml={2}
                >
                    Stephen Adebambo
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo

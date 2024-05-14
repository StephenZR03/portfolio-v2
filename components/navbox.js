import Logo from "./logo"
import NextLink from "next/link"
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <Link as={NextLink} href={href}
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            fontSize={active ? "sm" : "12px"}
        >
            <Flex gap={2}>
                <Flex alignItems="center">
                    <Box bgColor={active ? '#202023' : inactiveColor} border="1px solid black" height={active ? 4 : 2} width={active ? 4 : 2}></Box>
                </Flex>
                <Box>{children}</Box>
            </Flex>
        </Link>
    )
}

const Navbox = props => {
    const { path } = props

    return (
        <Flex
            mt={10}
            flexDir="column"
            gap={1}
            fontWeight="bold"
            zIndex={1}
            sx={{
                '@media (max-width: 1023px)': {
                    display: 'none'
                }
            }}
            {...props}>
            <LinkItem href="/about" path={path}>
                ABOUT
            </LinkItem>
            <LinkItem href="/experience" path={path}>
                EXPERIENCE
            </LinkItem>
            <LinkItem href="/projects" path={path}>
                PROJECTS
            </LinkItem>
        </Flex >
    )
}

export {
    LinkItem,
}

export default Navbox

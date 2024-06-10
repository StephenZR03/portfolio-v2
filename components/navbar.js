import { Container, Stack, Flex, Box, Menu, MenuButton, MenuList, MenuItem, IconButton, Link, useColorModeValue, useColorMode, Heading } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import Logo from "./logo"
import ThemeToggleButton from "./theme-toggle-button"
import styles from "../lib/styles/nav.module.css"

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            fontSize="sm"
        >
            {children}
        </Link>
    )
}

const Navbar = props => {
    const { path } = props
    const { colorMode } = useColorMode()
    const menuStyle = colorMode === 'light' ? styles.light_menu : ''

    return (
        <Box
            justifyContent="space-between"
            alignItems="center"
            as="nav"
            zIndex={1}
            w="100%"
            position="fixed"
            backdropFilter="blur(10px)"
            bg={useColorModeValue('#ffffff50', '#19253680')}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing="tight">
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    justifyContent="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="/experience" path={path}>
                        Experience
                    </LinkItem>
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="" path={path}>
                        Notebook
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu className={menuStyle}>
                            <MenuButton
                                className={styles.menu_button}
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                                _light={{
                                    bg: '#f0e7db',
                                    _active: { bg: '#d0c7ab' },
                                    _focus: { bg: 'f0e7db' },
                                    border: '1px solid #19253640'
                                }}
                            />
                            <MenuList className={menuStyle}>
                                <MenuItem className={menuStyle}>
                                    <Link as={NextLink} href="/" passHref>
                                        About
                                    </Link>
                                </MenuItem>
                                <MenuItem className={menuStyle}>
                                    <Link as={NextLink} href="/experience" passHref>
                                        Experience
                                    </Link>
                                </MenuItem>
                                <MenuItem className={menuStyle}>
                                    <Link as={NextLink} href="/projects" passHref>
                                        Projects
                                    </Link>
                                </MenuItem>
                                <MenuItem className={menuStyle}>
                                    <Link
                                        as={NextLink}
                                        href="https://github.com/steveade/steveade"
                                        passHref>
                                        View Source
                                    </Link>
                                </MenuItem>
                                <MenuItem className={menuStyle}>
                                    <Link
                                        as={NextLink}
                                        href=""
                                        passHref>
                                        Hobbies
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar

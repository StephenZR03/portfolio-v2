import { Box, Menu, MenuButton, MenuList, MenuItem, IconButton, Link } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import NextLink from "next/link"

const MobileNav = () => {
    return (
        <Box sx={{ '@media (min-width: 1024px)': { display: 'none' } }}>
            <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                <MenuList>
                    <MenuItem>
                        <Link as={NextLink} href="/" passHref>About</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link as={NextLink} href="/experience" passHref>Experience</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link as={NextLink} href="/projects" passHref>Projects</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link as={NextLink} href="/" passHref>View Source</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default MobileNav

import NextLink from "next/link"
import Image from "next/image"
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { Global } from "@emotion/react"

export const Grid = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const ProjGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
        <NextLink href={`/experience/${id}`}>
            <LinkBox cursor="pointer">
                <Image src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay href={`/works/${id}`} >
                </LinkOverlay>
            </LinkBox>
        </NextLink>
    </Box>
)

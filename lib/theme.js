import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import "@fontsource/geist-sans/400.css"
import "@fontsource/geist-sans/700.css"
import "@fontsource/ibm-plex-serif/400.css"
import "@fontsource/ibm-plex-serif/700.css"
import "@fontsource/ibm-plex-serif/400-italic.css"
import "@fontsource/ibm-plex-serif/700-italic.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"

const styles = {
    global: props => ({
        body: {
            // fontFamily: mode("'IBM Plex Serif', serif", "'Geist Sans', sans-serif")(props),
            fontFamily: "'Inter', sans-serif",
            bg: mode('#f0e7db', '#121728')(props),
            color: mode('#121728', '#efefef')(props)
        },
        "h1, h2, h3, h4, h5, h6": {
            fontFamily: mode("'IBM Plex Serif', serif", "'Geist Sans', sans-serif")(props),
        }
    })
}

const components = {
    Heading: {
        baseStyle: props => ({
            fontFamily: mode("'IBM Plex Serif', serif", "'Geist Sans', sans-serif")(props),
        }),
        variants: {
            'section-title': props => ({
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: mode('#525252', '#586475')(props),
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            })
        }
    },
    Link: {
        baseStyle: props => ({
            textUnderlineOffset: 4,
        })
    },
}

/* const fonts = {
    heading: "'IBM Plex Serif', serif",
    body: "'Inter', sans-serif"
} */

const colors = {
    glassTeal: '#88ccca',
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    // fonts
})

export default theme

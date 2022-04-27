import { animateScroll } from 'react-scroll'

export const scrollToBottom = (id) => {
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0,
        delay: 0,
        smooth: true,
        offset: -50
    })
}


export const scrollToBottomAnimated = (id) => {
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 250,
        delay: 0,
        smooth: true,
        offset: -50
    })
}

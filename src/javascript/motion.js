import { animate, inView, delay, spring, scroll } from "motion"

// Banner text
inView(".hi", (element) => {
    animate(
        '.hi',
        { opacity: [0, 1], x: [-100, 0] },
        {
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
        }
    )
})

// Banner text
delay(() => {
    inView(".vtuber", (element) => {
        animate(
            element,
            { opacity: [0, 1], x: [-100, 0] },
            {
                duration: 0.9,
                easing: [0.17, 0.55, 0.55, 1],
            }
        )
    })


}, 0.2)

delay(() => {
    inView(".piña", (element) => {
        animate(
            element,
            { opacity: [0, 1], x: [-100, 0] },
            { type: spring, bounce: 0.3, duration: 1, easing: [0.17, 0.55, 0.55, 1], }
        )
    })
    inView("#banner__youtube", (element) => {
        animate(
            element,
            { transform: ["translateX(-100px)", "translateX(0px)"], opacity: [0, 1] },
            { type: spring, bounce: 0.3, duration: 1, easing: [0.17, 0.55, 0.55, 1], }
        )
    })
    inView("#banner__discord", (element) => {
        animate(
            element,
            { transform: ["translateX(-100px)", "translateX(0px)"], opacity: [0, 1] },
            { type: spring, bounce: 0.3, duration: 0.9, easing: [0.17, 0.55, 0.55, 1], }
        )
    })
    inView("#banner__tiktok", (element) => {
        animate(
            element,
            { transform: ["translateX(-100px)", "translateX(0px)"], opacity: [0, 1] },
            { type: spring, bounce: 0.3, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
        )
    })
}, 0.3)

// Banner image
delay(() => {
    inView("#aleinad-logo", (element) => {
        animate(
            element,
            { transform: ["translateX(-100px)", "translateX(0px)"] },
            { type: spring, bounce: 0.5, duration: 1.1, easing: [0.17, 0.55, 0.55, 1], }
        )
    })
}, 0.1)



scroll(progress => {
    animate(
        '#aleinad-logo',
        { transform: ["translateY(-10px)", "translateY(0px)"] },
        { type: spring, damping: 2 }
    )
    animate(
        '.hi',
        { transform: ["translateY(-20px)", "translateY(0px)"] },
        { type: spring, damping: 6 }
    )
    animate(
        '.vtuber',
        { transform: ["translateY(-15px)", "translateY(0px)"] },
        { type: spring, damping: 7 }
    )
    animate(
        '.piña',
        { transform: ["translateY(-15px)", "translateY(0px)"] },
        { type: spring, damping: 7 }
    )
    animate(
        '.banner__link',
        { transform: ["translateY(-15px)", "translateY(0px)"] },
        { type: spring, damping: 2 }
    )
})
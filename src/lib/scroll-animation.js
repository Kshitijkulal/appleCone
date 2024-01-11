import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline();

    tl.to(position, {
            x: -4.0421,
            y: -12.49,
            z: -7.96,
            scrollTrigger: {
                trigger: '.sound-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false,
            },
            onUpdate
        })
        .to(target, {
            x: 1.42,
            y: -1.18038,
            z: -0.5323,
            scrollTrigger: {
                trigger: '.sound-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false,
            },
        })
        .to('.jumbotron-section', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.sound-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false,
            },
        })
        .to('.sound-section-content', {
            opacity: 1,
            scrollTrigger: {
                trigger: '.sound-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false,
            },
        })
        .to(position, {
            x: 1.56,
            y: 5.0,
            z: 0.01,
            scrollTrigger: {
                trigger: '.display-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false,
            },
            onUpdate
        })
        .to(target, {
            x: -0.55,
            y: 0.32,
            z: 0.0,
            scrollTrigger: {
                trigger: '.display-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false,
            },
        })
}
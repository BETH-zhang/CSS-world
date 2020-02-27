import React from 'react'
import './index.less'

// 1.px px就是像素,也是我们现在经常使用的基本单位,比如常常听到的电脑像素是1024x...
// 2.em em参考物是父元素的font-size,默认字体大小是16px,所以1em不是固定...
// 3.rem rem参考物是相对于根元素,我们在使用时可以在根元素设置一个参考值即可,相对于...
// 4.% % 是相对于父元素的大小设定的比率,position:absolute;的元素是相对...
// 5.vm vm相对于视口的宽度。视口被均分为100单位 h1 { font-size: 8...

export const santaData = {
    children: (<div className="santa">
        <div className="santa-body">
            <div className="santa-head">
                <div className="santa-ear"></div>
                <div className="santa-ear"></div>
                <div className="santa-hat"></div>
                <div className="santa-eye"></div>
                <div className="santa-eye"></div>
                <div className="santa-nose"></div>
                <div className="santa-mouth"></div>
            </div>
        </div>
    </div>),
    root: [{
        ele: 'div',
        className: 'santa',
        parentNode: '',
    }, {
        ele: 'div',
        className: 'santa-body',
        parentNode: 'santa',
    }, {
        ele: 'div',
        className: 'santa-head',
        parentNode: 'santa-body',
    }, {
        ele: 'div',
        className: 'santa-ear',
        parentNode: 'santa-head',
    }, {
        ele: 'div',
        className: 'santa-ear',
        parentNode: 'santa-head',
    }, {
        ele: 'div',
        className: 'santa-hat',
        parentNode: 'santa-head',
    }, {
        ele: 'div',
        className: 'santa-eye',
        parentNode: 'santa-head',
    }, {
        ele: 'div',
        className: 'santa-eye',
        parentNode: 'santa-head',
    }, {
        ele: 'div',
        className: 'santa-nose',
        parentNode: 'santa-head',
    }, {
        ele: 'div',
        className: 'santa-mouth',
        parentNode: 'santa-head',
    }],
}


export const santaData1 = {
    root: [{
        ele: 'div',
        key: 'auto',
        className: 'auto',
        parentNode: '',
    }, {
        ele: 'div',
        key: 'body',
        className: 'body flex default-bg circle balance',
        style: {
            fontSize: '120px',
            width: '1em',
            height: '1em',
            backgroundColor: '#f91047',
            boxShadow: 'inset 0 -0.25em rgba(0,0,0,0.1)',
        },
        parentNode: 'auto',
    }, {
        ele: 'div',
        key: 'head',
        className: 'head relative',
        style: {
            fontSize: '48px',
            width: '1em',
            height: '1.9em',
            backgroundColor: 'white',
            borderRadius: '.5em',
            transform: 'translateY(-1em)',
        },
        parentNode: 'body',
    }, {
        ele: 'div',
        key: 'head-before',
        className: 'head-before absolute',
        style: {
            top: '.65em',
            width: '1em',
            height: '.375em',
            backgroundColor: '#ff9876',
        },
        parentNode: 'head',
    }, {
        ele: 'div',
        key: 'ear',
        className: 'ear absolute',
        style: {
            left: '-.1em',
            top: '.75em',
            backgroundColor: '#fc8363',
            width: '.1em',
            height: '.3em',
            borderRadius: '.05em 0 0 .05em',
        },
        parentNode: 'head',
    }, {
        ele: 'div',
        key: 'ear',
        className: 'ear absolute',
        style: {
            right: '-.1em',
            top: '.75em',
            backgroundColor: '#fc8363',
            width: '.1em',
            height: '.3em',
            borderRadius: '0 .05em .05em 0',
        },
        parentNode: 'head',
    }, {
        ele: 'div',
        key: 'hat',
        className: 'hat absolute',
        style: {
            width: '1em',
            height: '.15em',
            transform: 'scale(1.1)',
            top: '.5em',
            left: 0,
            backgroundColor: 'white'
        },
        parentNode: 'head',
    }, {
        ele: 'div',
        key: 'hat-before',
        className: 'hat-before absolute',
        style: {
            width: '1em',
            height: '.5em',
            top: 0,
            left: 0,
            zIndex: 2,
            backgroundColor: '#915d69',
            borderRadius: '.5em .5em 0 0',
        },
        parentNode: 'head',
    }, {
        ele: 'div',
        key: 'hat-after',
        className: 'hat-after absolute',
        style: {
            width: '.25em',
            height: '.25em',
            top: '-0.22em',
            right: 0,
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '-0.2em 0.2em 0 0.12em rgba(0,0,0,0.2), -0.2em 0.2em 0 0.12em #f91047'
        },
        parentNode: 'head',
    }, {
        ele: 'div',
        key: 'eye',
        className: 'eye absolute',
        style: {
            width: '.12em',
            height: '.12em',
            backgroundColor: 'black',
            borderRadius: '50%',
            top: '.76em',
            left: '.2em',
        },
        parentNode: 'head',
    }, {
        ele: 'div',
        key: 'eye',
        className: 'eye absolute',
        style: {
            width: '.12em',
            height: '.12em',
            backgroundColor: 'black',
            borderRadius: '50%',
            top: '.76em',
            right: '.2em', 
        },
        parentNode: 'head',
    }, {
        ele: 'div',
        key: 'nose',
        className: 'nose absolute center-x',
        style: {
            width: '.12em',
            height: '.22em',
            backgroundColor: '#f24c4c',
            borderRadius: '0 0 .12em .12em',
            top: '.84em',
            left: '50%',
        },
        parentNode: 'head',
    }, {
        ele: 'div',
        key: 'mouth',
        className: 'mouth absolute center',
        style: {
            width: '.18em',
            height: '.1em',
            borderRadius: '0 0 5vw 5vw',
            marginTop: '.3em',
            backgroundColor: 'black',
            top: '50%',
            left: '50%',
        },
        parentNode: 'head',
    }],
}


export const santaData2 = {
    // 缩进要保持一致
    rootNames: `
    auto
        body
            head
                head-before
                ear-left
                ear-right
                hat
                hat-before
                hat-after
                eye-left
                eye-right
                nose
                mouth
    `,
    attributes: {
        auto: {
            className: 'auto', 
        },
        body: {
            className: 'body flex default-bg circle balance',
            style: {
                fontSize: '120px',
                width: '1em',
                height: '1em',
                backgroundColor: '#f91047',
                boxShadow: 'inset 0 -0.25em rgba(0,0,0,0.1)',
            }, 
        },
        head: {
            className: 'head relative',
            style: {
                fontSize: '48px',
                width: '1em',
                height: '1.9em',
                backgroundColor: 'white',
                borderRadius: '.5em',
                transform: 'translateY(-1em)',
            },
        },
        'head-before': {
            className: 'head-before absolute',
            style: {
                top: '.65em',
                width: '1em',
                height: '.375em',
                backgroundColor: '#ff9876',
            },
        },
        'ear-left': {
            className: 'ear absolute',
            style: {
                left: '-.1em',
                top: '.75em',
                backgroundColor: '#fc8363',
                width: '.1em',
                height: '.3em',
                borderRadius: '.05em 0 0 .05em',
            },
        }, 
        'ear-right': {
            className: 'ear absolute',
            style: {
                right: '-.1em',
                top: '.75em',
                backgroundColor: '#fc8363',
                width: '.1em',
                height: '.3em',
                borderRadius: '0 .05em .05em 0',
            },
        },
        hat: {
            className: 'hat absolute',
            style: {
                width: '1em',
                height: '.15em',
                transform: 'scale(1.1)',
                top: '.5em',
                left: 0,
                backgroundColor: 'white'
            },
        },
        'hat-before': {
            className: 'hat-before absolute',
            style: {
                width: '1em',
                height: '.5em',
                top: 0,
                left: 0,
                zIndex: 2,
                backgroundColor: '#915d69',
                borderRadius: '.5em .5em 0 0',
            },
        },
        'hat-after': {
            className: 'hat-after absolute',
            style: {
                width: '.25em',
                height: '.25em',
                top: '-0.22em',
                right: 0,
                backgroundColor: 'white',
                borderRadius: '50%',
                boxShadow: '-0.2em 0.2em 0 0.12em rgba(0,0,0,0.2), -0.2em 0.2em 0 0.12em #f91047'
            },
        },
        'eye-left': {
            className: 'eye absolute',
            style: {
                width: '.12em',
                height: '.12em',
                backgroundColor: 'black',
                borderRadius: '50%',
                top: '.76em',
                left: '.2em',
            },
        },
        'eye-right': {
            className: 'eye absolute',
            style: {
                width: '.12em',
                height: '.12em',
                backgroundColor: 'black',
                borderRadius: '50%',
                top: '.76em',
                right: '.2em', 
            },
        },
        nose: {
            className: 'nose absolute center-x',
            style: {
                width: '.12em',
                height: '.22em',
                backgroundColor: '#f24c4c',
                borderRadius: '0 0 .12em .12em',
                top: '.84em',
                left: '50%',
            },
        },
        mouth: {
            className: 'mouth absolute center',
            style: {
                width: '.18em',
                height: '.1em',
                borderRadius: '0 0 5vw 5vw',
                marginTop: '.3em',
                backgroundColor: 'black',
                top: '50%',
                left: '50%',
            },
        },
    },
}

export const shapeData = {
    rootNames: `
    auto
        semicircle
        circular
        square
        rectangle
        triangle
        oval
        roundRectangle
    `,
    attributes: {
        auto: {
            fontSize: '120px'
        },
        semicircle: {
            className: 'semicircle',
            style: {
                color: 'blue',
            },
        },
        circular: {
            className: 'circle red'
        },
    }
}

export const xiaouData = {
    rootNames: `
    `,
}
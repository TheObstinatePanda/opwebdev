import carDLL from '../carousel/carList.js';

const servData = new carDLL();

const elements = [
    {
        image: require('../../assets/design.gif'),
        heading: "Design",
        text: "We will work with you to sketch a design perfect for your business.",
    },
    {
        image: require('../../assets/Develop.png'),
        heading: "Develop",
        text: "We will take those sketches and develop a beautiful and functional webpage from the ground up.",
    },
    {
        image: require('../../assets/Deliver.png'),
        heading: "Deliver",
        text: "We will deliver the site to you. If you need, we can also handle the hosting and domain acquisition for you.",
    },
]

elements.forEach(({image, heading, text}) => {
    servData.addToTail(image, heading, text)
})

export default servData;
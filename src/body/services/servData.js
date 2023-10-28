import carDLL from '../carousel/carList.js';

const servData = new carDLL();

const elements = [
    {
        image: require('../../assets/design.gif'),
        heading: "Design",
        text: "",
    },
    {
        image: require('../../assets/Develop.png'),
        heading: "Develop",
        text: "",
    },
    {
        image: require('../../assets/Deliver.png'),
        heading: "Deliver",
        text: "",
    },
]

elements.forEach(({image, heading, text}) => {
    servData.addToTail(image, heading, text)
})

export default servData;
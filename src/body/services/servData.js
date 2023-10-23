import carDLL from '../carousel/carList.js';

const servData = new carDLL();

const elements = [
    {
        image: require('../../assets/spinner.gif'),
        heading: "Design",
        text: "",
    },
    {
        image: require('../../assets/spinner.gif'),
        heading: "Develop",
        text: "",
    },
    {
        image: require('../../assets/spinner.gif'),
        heading: "Deliver",
        text: "",
    },
]

elements.forEach(({image, heading, text}) => {
    servData.addToTail(image, heading, text)
})

export default servData;
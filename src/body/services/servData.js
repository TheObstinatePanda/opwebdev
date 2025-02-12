import carDLL from '../carousel/carList.js';

const servData = new carDLL();

const elements = [
    {
        image: require('../../assets/design.gif'),
        heading: "Design",
        text: "We're dedicated to collaborating closely with you to curate your vision of a perfect design which resonates with your target audience.",
    },
    {
        image: require('../../assets/Develop.png'),
        heading: "Develop",
        text: "Those initial designs are used to meticulously construct a visually stunning website optimized for user experience in accordance with your vision.",
    },
    {
        image: require('../../assets/Deliver.png'),
        heading: "Deliver",
        text: "Once complete, we’ll deliver your site files. At your request, we’ll handle hosting, domain, and technical support so you can focus on your business’s core priorities.",
    },
    
]

elements.forEach(({image, heading, text}) => {
    servData.addToTail(image, heading, text)
})

export default servData;
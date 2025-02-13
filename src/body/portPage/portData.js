import carDLL from '../carousel/carList.js';

const portData = new carDLL();

const elements = [
    {
        image: require('../../assets/paradox-screencap.png'),
        heading: "Paradox Spay Neuter Clinic",
        text: "A website created for a local non-profit organization dedicated to providing affordable spay and neuter services for pets in the community.",
        link: "https://paradoxspayneuter.netlify.app/",
    },
    
   
]

elements.forEach(({image, heading, text, link}) => {
    portData.addToTail(image, heading, text, link)
})

export default portData;
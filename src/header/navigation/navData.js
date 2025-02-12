import navDLL from './navList';
//navData populates the navigation bar with the following data://

const navData = new navDLL();

const elements = [
    {
        title: "Main",
        url: "/",
        preview: "",
    },
    {
        title: "Services",
        url: "/services",
        preview: "",
    },
    {
        title: "Portfolio",
        url: "/portfolio",
        preview: "",
    },
    {
        title: "Contact",
        url: "/contact",
        preview: "",
    },
    {
        title: "GitHub",
        url: "https://github.com/TheObstinatePanda",
        preview: "",
    },
]

elements.forEach(({title, url, preview}) => {
    navData.addToTail(title, url, preview)
})

//This could easily be made into a form that allows users to set the navigation elements to display on a custom page of their own. This would require generation of additional pages.//

export default navData;
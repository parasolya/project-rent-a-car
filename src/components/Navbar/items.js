import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home",
        link: "/"
    },
    {
        id: nanoid(),
        text: "Catalog",
        link: "/catalog"
    },
    {
        id: nanoid(),
        text: "Favorites",
        link: "/favorites"
    },
];

export default items;
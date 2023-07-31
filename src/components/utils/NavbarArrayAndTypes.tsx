export interface NavbarItemType {
    label: string,
    href:string,
    IsdropDown: boolean,
    dropDownData?: Array<NavbarItemType>
}


export const NavbarArray: Array<NavbarItemType>=[
    {
        label:"Female",
        href:"/female/Female",
        IsdropDown:true,
        dropDownData:[
            {
                label: "Dresses",
                href:"/female/Dress",
                IsdropDown:false,
            },
            {
                label: "Sweaters",
                href:"/female/Sweater",
                IsdropDown:false,
            },
            {
                label: "T-Shirts",
                href:"/female/T shirt",
                IsdropDown:false,
            },
            {
                label: "Pants",
                href:"/female/Pant",
                IsdropDown:false,
            },
            {
                label: "Jackets",
                href:"/female/Jacket",
                IsdropDown:false,
            },
        ]
    },
    {
        label:"Male",
        href:"/male/Male",
        IsdropDown:true,
        dropDownData:[
            {
                label: "Sweaters",
                href:"/male/Sweater",
                IsdropDown:false,
            },
            {
                label: "Jackets",
                href:"/male/Jacket",
                IsdropDown:false,
            },
        ]
    },
    {
        label:"Kids",
        href:"/kid",
        IsdropDown:false
    },
    {
        label:"All Products",
        href:"/products",
        IsdropDown:false
    }
]
export interface NavbarItemType {
    label: string,
    href:string,
    IsdropDown: boolean,
    dropDownData?: Array<NavbarItemType>
}


export const NavbarArray: Array<NavbarItemType>=[
    {
        label:"Female",
        href:"/female",
        IsdropDown:true,
        dropDownData:[
            {
                label: "Dresses",
                href:"/female/dress",
                IsdropDown:false,
            },
            {
                label: "Sweaters",
                href:"/female/sweater",
                IsdropDown:false,
            },
            {
                label: "T-Shirts",
                href:"/female/t-shirt",
                IsdropDown:false,
            },
            {
                label: "Pants",
                href:"/female/pant",
                IsdropDown:false,
            },
            {
                label: "Jackets",
                href:"/female/jacket",
                IsdropDown:false,
            },
        ]
    },
    {
        label:"Male",
        href:"/male",
        IsdropDown:true,
        dropDownData:[
            {
                label: "Sweaters",
                href:"/male/sweater",
                IsdropDown:false,
            },
            {
                label: "Jackets",
                href:"/male/jacket",
                IsdropDown:false,
            },
        ]
    },
    {
        label:"Kids",
        href:"/kids",
        IsdropDown:false
    },
    {
        label:"All Products",
        href:"/allproducts",
        IsdropDown:false
    }
]
import { FaCog } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";


 export type detailsProps =  {

    id: number;
    icon: any ;
    description: string ;
    context: string
}
 export type  holdersProps = {
    id: number 
    icon: any
    description: string
    context: string

 }

export const Contents : Array <detailsProps> = [
    {
        id : 1 ,
        icon : < FaCog />,
        description : "Tradition , innovation , performance ",
        context : "Quality you deserve and dependability you can count on"
    },
    {
        id : 2 ,
        icon : < FaToolbox />,
        description : "Experience and Reputation",
        context : "it's a proof we are the best for your project needs"
    },
    {
        id : 3 ,
        icon : < FaDollarSign />,
        description : "Full service and Affordable price",
        context : "Quality you deserve and dependability you can count on",
    }
    
]

export const Holders : holdersProps [] = [
    {
        id : 0,
        icon : < FaPaintBrush />,
        description : "Creative Design",
        context : "Our expert craftmen can transform your outdoor  space into a 'wow'space.We have the experience and know-how to design and build the perfect outdoor landscape.",
    },
    {
        id : 1,
        icon : < FaPeopleCarry />,
        description : "Thoughtful Installation",
        context : "Our expert craftmen can transform your outdoor  space into a 'wow'space.We have the experience and know-how to design and build the perfect outdoor landscape.",
    },
    {
        id : 2 ,
        icon : < FaFolderOpen />,
        description : "Beautiful Landscape",
        context : "We understand that each part of a well-designed landscape has its own a function. Let us create a landscape for your home or business that is just right for you and your property",
    }
]


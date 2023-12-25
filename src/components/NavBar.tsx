import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch";


const NavBar = () => {


    return (
        <HStack justifyContent={"space-between"} padding={3}>
            <Image src={logo} boxSize={'68px'} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar;
import { Game } from "../services/Game";
import { Icon, HStack } from "@chakra-ui/react";
import { 
    FaWindows, 
    FaPlaystation, 
    FaXbox, 
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { IconType as IconT } from "react-icons";
import {
    SiNintendo,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface PlatformIconListProps {
    platforms: Game['platforms'][0]['platform'][]
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
    const iconMap: {
        [key in Game['platforms'][0]['platform']['slug']]: IconT
    } = {
        pc: FaWindows,
        playstation4: FaPlaystation,
        playstation5: FaPlaystation,
        "xbox-one": FaXbox,
        "xbox-series-x": FaXbox,
        web: BsGlobe,
        playstation3: FaPlaystation,
        xbox360: FaXbox,
        macos: FaApple,
        "nintendo-switch": SiNintendo,
        linux: FaLinux,
        android: FaAndroid,
        "ps-vita": FaPlaystation,
        ios: FaApple,
        "xbox-old": FaXbox,
    };
    
    return (
        <>
        <HStack>
            {
                platforms.map(platform => {
                    return <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'} />
                })
            }
        </HStack>
        </>
    )
}

export default PlatformIconList;


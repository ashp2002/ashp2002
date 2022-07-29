import React from "react";
import 
{ 
    Button, 
    Box, 
    NativeBaseProvider,
    Text,
    Image,
    Flex 
} from "native-base";
import Home_TitleButton from "../common/component/Home_TitleButton"

const img = require('../common/image/bg_image1.png');
const Home = ({navigation}) => {
    return (
        <Flex dir="column">
            <Box>
                <Home_TitleButton img={img}/> 
            </Box>
            <Box>
                <Home_TitleButton img={img}/> 
            </Box>  
            <Box>
                <Home_TitleButton img={img}/> 
            </Box>   
        </Flex>
    )
}

export default Home
import React from "react";
import 
{ 
    Button, 
    Box, 
    NativeBaseProvider,
    Flex, 
} from "native-base";

const BottomNav = ({navigation}) => {
    return (
        <Flex direction="row">
           <Button 
            width="25%" 
            borderRadius={0}  
            bgColor="black"
            onPress={() => navigation.replace('Page_one')}
        >
               페이지1
           </Button>
           <Button 
            width="25%" 
            borderRadius={0}  
            bgColor="black"
            onPress={() => navigation.replace('Page_two')}
        >
               페이지2
           </Button>
           <Button 
            width="25%" 
            borderRadius={0}  
            bgColor="black"
            onPress={() => navigation.replace('Page_three')}
        >
               페이지3
           </Button>
           <Button 
            width="25%" 
            borderRadius={0}  
            bgColor="black"
            onPress={() => navigation.replace('Page_four')}
        >
               페이지4
           </Button>
        </Flex>
    )
}

export default BottomNav;
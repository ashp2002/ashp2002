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

const Home_TitleButton = (props, {navigation}) => {
    const { img } = props;
    return (
        <>
        <Flex direction="row" Width="100%" px={2}>
            <Box flex={1}>
                <Image
                    source={img}
                    height={150}
                />
                <Flex 
                    direction="row"
                    position="absolute" 
                    bottom={110}
                    pl={2}
                >
                    <Box bg="blue.500" width={2} height={8}>

                    </Box>
                    <Box ml={2} pt={1}>
                        <Text 
                            fontWeight="bold"
                        >
                            대회 정보
                        </Text>
                    </Box>
                </Flex>
            </Box>   
            <Box flex={1}>
                <Image
                    source={img}
                    height={150}
                />
                <Flex 
                    direction="row"
                    position="absolute" 
                    bottom={110}
                    pl={2}
                >
                    <Box bg="blue.500" width={2} height={8}>

                    </Box>
                    <Box ml={2} pt={1}>
                        <Text 
                            fontWeight="bold"
                        >
                            대회 정보
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
            
        </>
    )
}

export default Home_TitleButton

import { FormControl, Center, VStack, Input as DefaultInput } from "native-base";
import { useState } from "react";
function Input({name, placeholder} : {name: string, placeholder: string}) {
    const [formData, setData] = useState({});
    return <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired>
            <FormControl.Label _text={{
                bold: true
            }}>{placeholder}</FormControl.Label>
            <DefaultInput placeholder={placeholder} key={name} onChangeText={value => setData({
                ...formData,
                name: value
            })} />
            <FormControl.HelperText _text={{
                fontSize: 'xs'
            }}>
                Field should contain atleast 3 character.
            </FormControl.HelperText>
            <FormControl.ErrorMessage _text={{
                fontSize: 'xs'
            }}>
                Error Name
            </FormControl.ErrorMessage>
        </FormControl>
    </VStack>;
}

export default Input;
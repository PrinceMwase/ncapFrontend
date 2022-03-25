import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { FormControl, InputGroup, VStack, InputLeftAddon, InputRightAddon, Input, Button, Icon } from "native-base";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
const MyDatePicker = ({ name }: { name: string }) => {
    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {

        setDate(selectedDate ? selectedDate : date);

    };

    const showMode = (currentMode: "date" | "time") => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true
        })
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (

        <VStack width="90%" mx="3" maxW="300px">

            <FormControl>
                <FormControl.Label _text={{
                }}>  {name}</FormControl.Label>
                <InputGroup w={{
                    base: "70%",
                    md: "285"
                }}>
                    <InputLeftAddon children={<Button variant='unstyled' onPress={showDatepicker} leftIcon={<Icon as={Ionicons} name="calendar" size="sm" />}> </Button>} />
                    <Input w={{
                        base: "70%",
                        md: "100%"
                    }} isReadOnly={true} placeholder={date.toDateString()} />

                </InputGroup>
            </FormControl>
        </VStack>



        //     <View>
        //       <Button onPress={showDatepicker} title="Show date picker!" />
        //     </View>
        //     <View>
        //       <Button onPress={showTimepicker} title="Show time picker!" />
        //     </View>
        //     <Text>selected: {date.toLocaleString()}</Text>
        //   </View>
    );
}
export default MyDatePicker
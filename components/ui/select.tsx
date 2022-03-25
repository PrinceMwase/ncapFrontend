import { CheckIcon, Select as DefaultSelect } from "native-base";
import { useState } from "react";

export type SelectOption = {
    label: string,
    value: string
}


function Select( {label, data} : {label: string, data: SelectOption[]} ) {
    let [service, setService] = useState("");
    return (<DefaultSelect selectedValue={service} minWidth="200" accessibilityLabel={label} placeholder={label} _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
        {
            data.map( (item) => (
                <DefaultSelect.Item label={item.label} value={item.value} key={item.value} />        
            ) )
        }   
        
    </DefaultSelect>)
}

export default Select

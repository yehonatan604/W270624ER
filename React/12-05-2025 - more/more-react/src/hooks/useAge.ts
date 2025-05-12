import { useState } from "react";

const useAge = (defaultAge: number) => {
    const [age, setAge] = useState(defaultAge);

    const changeAge = (type: "+" | "-") => {
        if (type === "+") {
            setAge(age + 1);
        } else if (type === "-") {
            setAge(age - 1);
        }
    };

    return { age, changeAge };
}

export default useAge;
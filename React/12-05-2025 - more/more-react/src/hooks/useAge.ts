import { useState } from "react";

const useAge = () => {
    const [age, setAge] = useState(25);

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
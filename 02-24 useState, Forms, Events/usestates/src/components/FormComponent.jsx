import { use, useState } from "react";
export default function FormComponent()
{
    // var data = "default"
    // var [data, setData] = useState("Default")
    // const [name, setName] = useState("Default Name");
    // const [age, setAge] = useState("");
    // const [email, setEmail] = useState("");

    const [formData, setFormData] = useState({
        name: "default name",
        age: 0,
        email: ""
    })



    function handleChange(event)
    {
        // console.log("On Change event fired")
        // console.log(data)
        // setData(event.target.value)

        // console.dir(event.target.name)

        // setFormData(prevFormData => { prevFormData[event.target.name] = event.target.value })
    }

    // function handleSubmit(event)
    // {
    //     event.preventDefault();
    //     console.log(event.target.name.value)
    //     setName(event.target.name.value)
    //     setEmail(event.target.email.value)
    //     setAge(event.target.age.value)
    // }
    return (
        <>
            <form>
                <input placeholder="Enter your name" name="name" type="text" id="name" onChange={handleChange} />
                <br />
                <input placeholder="Enter your age" name="age" type="number" id="age" onChange={handleChange} />
                <br />
                <input placeholder="Enter your email" name="email" type="email" id="email" onChange={handleChange} />
                <br />
                <input type="submit" value="Submit Form" />
                <h3>{formData.name} {formData.email} {formData.age}</h3>
            </form>
        </>
    )
}
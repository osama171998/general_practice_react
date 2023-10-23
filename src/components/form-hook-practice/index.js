import React from "react"
import { useForm } from "react-hook-form"


const FormHookPractice = () => {
    const { register, handleSubmit,formState: { errors }} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return <React.Fragment>

        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder="First Name" {...register("firstName")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input placeholder="Last Name" {...register("lastName", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.lastName && <span>This field is required</span>}
            <select {...register("gender")}>
                    <option disabled>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
            </select>
            <input type="submit" />
        </form>
    </React.Fragment>
}
export default FormHookPractice
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../global/apolloclient/graphQL_querys";
import { StyledBox, StyledButton, StyledForm, StyledPaper, StyledTypography } from "../../../global/styles/styled-component/style.adduser";
import styled from "styled-components";


const StyledTextField = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  border-color: ${props => props.isError ? 'red' : '#ccc'};
  
  &:focus {
    outline: none;
    border-color: ${props => props.isError ? 'red' : 'blue'};
  }

  &::placeholder {
    color: #aaa;
  }
`;

type StyledTextFieldProps = {
  isError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const StyledTextFieldWithProps = ({ isError, ...props }: StyledTextFieldProps) => (
  <StyledTextField isError={isError} {...props} />
);

const AddUser = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createUser] = useMutation(CREATE_USER); // Initialize the useMutation hook

    
    const onSubmit = async (formData:any) => {
        try {
            const { data } = await createUser({ variables: { createUserInput: formData } });
            console.log(data);
            // Handle success (e.g., show a message or redirect)
            navigate("/"); // Redirect or perform another action after successful user creation
        } catch (error) {
            // Handle errors (e.g., show error messages)
            console.error("Error creating a user:", error);
        }
    };

    return (
        <StyledBox>
            <StyledButton onClick={() => navigate("/")}>דף הבית</StyledButton>
            <StyledPaper>
                <StyledTypography>הוסף משתמש</StyledTypography>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledTextFieldWithProps 
                        type="number"
                        placeholder="גיל" 
                        {...register("age", { required: "שדה חובה" })}
                        isError={!!errors.age}
                    />
                    <StyledTextFieldWithProps 
                        type="text"
                        placeholder="כתובת" 
                        {...register("street", { required: "שדה חובה" })}
                        isError={!!errors.street}
                    />
                    <StyledTextFieldWithProps 
                        type="text"
                        placeholder="עיר" 
                        {...register("city", { required: "שדה חובה" })}
                        isError={!!errors.city}
                    />
                    <StyledTextFieldWithProps 
                        type="text"
                        placeholder="תואר" 
                        {...register("title", { required: "שדה חובה" })}
                        isError={!!errors.title}
                    />
                    <StyledTextFieldWithProps 
                        type="password"
                        placeholder="סיסמה" 
                        {...register("password", { required: "שדה חובה" })}
                        isError={!!errors.password}
                    />
                    <StyledTextFieldWithProps 
                        type="text"
                        placeholder="זמן" 
                        {...register("time", { required: "שדה חובה" })}
                        isError={!!errors.time}
                    />
                    <StyledTextFieldWithProps 
                        type="number"
                        placeholder="קו רוחב" 
                        {...register("latitude", { required: "שדה חובה" })}
                        isError={!!errors.latitude}
                    />
                    <StyledTextField 
                        type="number"
                        placeholder="קו אורך" 
                        {...register("longitude", { required: "שדה חובה" })}
                        isError={!!errors.longitude}
                    />
                    <StyledButton type="submit">שלח</StyledButton>
                </StyledForm>
            </StyledPaper>
        </StyledBox>
    );
};

export default AddUser;

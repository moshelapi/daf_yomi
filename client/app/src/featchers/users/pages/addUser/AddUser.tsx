import { useForm } from "react-hook-form";
import { TextField, Button, Grid, Box, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        // Add your submit logic here
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 2 ,direction:"rtl"}}>
            <Button onClick={() => navigate("/")}>דף הבית</Button>
            <Paper sx={{ padding: 2, marginTop: 2 }}>
                <Typography variant="h4" sx={{ marginBottom: 2 }}>הוסף משתמש</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                label="שם פרטי" 
                                {...register("firstName", { required: true })}
                                error={!!errors.firstName}
                                helperText={errors.firstName ? "שדה חובה" : ""}
                            />
                            <TextField 
                                fullWidth 
                                label="שם משפחה" 
                                {...register("lastName", { required: true ,})}
                                error={!!errors.lastName}
                                helperText={errors.lastName ? "שדה חובה" : ""}
                            />
                            <TextField 
                                fullWidth 
                                label="אימייל" 
                                {...register("email", { required: true })}
                                error={!!errors.email}
                                helperText={errors.email ? "שדה חובה" : ""}
                            />
                            <TextField 
                                fullWidth 
                                label="סיסמה" 
                                {...register("password", { required: true })}
                                error={!!errors.password}
                                helperText={errors.password ? "שדה חובה" : ""}
                            />
                            <TextField 
                                fullWidth 
                                label="זמן" 
                                {...register("time", { required: true })}
                                error={!!errors.time}
                                helperText={errors.time ? "שדה חובה" : ""}
                            />
                            <TextField 
                                fullWidth 
                                label="תואר" 
                                {...register("title", { required: true })}
                                error={!!errors.title}
                                helperText={errors.title ? "שדה חובה" : ""}
                            />
                            <TextField 
                                fullWidth 
                                label="עיר" 
                                {...register("city", { required: true })}
                                error={!!errors.city}
                                helperText={errors.city ? "שדה חובה" : ""}
                            />
                            <TextField 
                                fullWidth 
                                label="רחוב" 
                                {...register("street", { required: true })}
                                error={!!errors.street}
                                helperText={errors.street ? "שדה חובה" : ""}
                            />
                            <TextField 
                                fullWidth 
                                label="גיל" 
                                {...register("age", { required: true })}
                                error={!!errors.age}
                                helperText={errors.age ? "שדה חובה" : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained">שלח</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
};

export default AddUser;

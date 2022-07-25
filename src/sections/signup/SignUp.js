import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Button, Grid, NoSsr } from "@mui/material";
import { Iconify, Image } from "../../components";
import { userSignUp } from "../../apis/users/CreateUser";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",

    "& .MuiTextField-root": {
      margin: "5px",
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: "10px",
    },
  },
}));

const Form = () => {
  const router = useRouter();
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };
    const user = await userSignUp(payload);
    console.log(Object.keys(user?.data?.data).length);
    if (Object.keys(user?.data?.data).length !== 0) {
      toast.success("You have been sign up successfully", { autoClose: 1000 });

      router.push("/");
    } else {
      toast.error(user?.data?.message);
    }
  };
  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <Grid
      container
      spacing={3}
      display={"flex"}
      justifyContent="space-between"
      alignItems="center"
    >
      <NoSsr>
        <Grid item xs={12} md={6} lg={6}>
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              variant="filled"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="filled"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="filled"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <Button variant="containedInherit" onClick={handleClear}>
                Cancel
              </Button>
              <Button type="submit" variant="containedInherit" color="primary">
                Signup
              </Button>
            </div>
          </form>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            alt="signup"
            src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_faqs.svg"
          />
        </Grid>
      </NoSsr>
    </Grid>
  );
};

export default Form;

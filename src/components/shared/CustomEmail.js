import React, { useState } from "react";
import { FilledInput, InputAdornment, Button, Box } from "@mui/material";
import { getUserCookie } from "../../utils/getCookies";
import { toast } from "react-toastify";
import { sendEmail } from "../../apis/users/CreateUser";
export default function CustomEmail() {
  const [email, setEmail] = useState("");
  const token = getUserCookie();

  const handleSubmit = async () => {
    if (token) {
      const result = emailValidation(email);
      if (result) {
        console.log(email);
        console.log(token);
        const data = await sendEmail(email, token);
        if (data) {
          setEmail("");
          toast.success("Email subscribed successfully", { autoClose: 1000 });
        }
      }
    } else {
      toast.error("Sign up first to connect with Hadaro");
    }
  };
  const emailValidation = (emailData) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailData || regex.test(emailData) === false) {
      toast.error("Email is not valid");
      return false;
    }
    return true;
  };
  return (
    <Box>
      <FilledInput
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <Button
              variant="containedInherit"
              size="large"
              sx={{ borderRadius: "0px 10px 10px 0px", px: 4, height: "40px" }}
              onClick={handleSubmit}
            >
              Email Me!
            </Button>
          </InputAdornment>
        }
        sx={{
          pr: 0,
          "& .MuiFilledInput-input": { py: "14px" },
          background: "black",
          borderRadius: 1.5,
          //minWidth: '400px',
          height: "40px",
          width: "100%",
        }}
      />
    </Box>
  );
}

import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { subscribe } from "../../responsible-for/managingSignups/signup";

export default function SignupBox({ isDark = false }) {
  const [email, setEmail] = useState < string > "";
  const [isValidEmail, setIsValidEmail] = useState < boolean > false;
  const [isSent, setIsSent] = useState < boolean > false;
  const [isError, setIsError] = useState < boolean > false;

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  }

  async function subscribeCustomer() {
    if (isValidEmail && email) {
      try {
        let newSubscriber = { id: email };
        await subscribe(newSubscriber);
        setIsSent(true);
      } catch (ex) {
        setIsError(true);
      }
    }
  }

  return (
    <div style={{ height: "70px" }}>
      <div style={{ display: !isSent && !isError ? "block" : "none" }}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            height: "54px",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "10px",
          }}
        >
          <TextField
            placeholder="Email Address"
            style={{ width: "270px" }}
            onChange={handleEmailChange}
          />
          <Button
            style={{ height: "52px", minWidth: "150px" }}
            onClick={subscribeCustomer}
            variant="contained"
          >
            Request Invite
          </Button>
        </div>
        <Typography
          sx={{
            display:
              isValidEmail || !email ? "none" : isValidEmail ? "none" : "block",
            color: props.isDark ? "#FFF" : "#000",
          }}
        >
          Nearly there! Just complete a valid email.
        </Typography>
      </div>
      <div style={{ display: isSent ? "block" : "none", width: "435px" }}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            height: "54px",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="h5"
            style={{ color: props.isDark ? "#FFF" : "#000" }}
          >
            That's a wrap! Thanks, we'll be in touch.
          </Typography>
        </div>
      </div>
      <div style={{ display: isError ? "block" : "none" }}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            height: "54px",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h6" style={{ color: "red" }}>
            Sorry, something went wrong :( Please try again later.
          </Typography>
        </div>
      </div>
    </div>
  );
}

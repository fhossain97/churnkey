import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { formatBillingDate } from "lib/helper";
import { useState } from "react";
import { subscription } from "testData/seedSubscriptionData";
import { Layout } from "~/components/Layout/Layout";
import DisplayInfo from "~/components/Settings/DisplayInfo";

export default function Settings() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <Box className="m-5 h-full items-center justify-center rounded-lg bg-red-500 p-6 shadow-md">
        <Box className="mb-6 flex items-center justify-center">
          <Avatar className="mr-4">
            {subscription.customer_information.firstname[0]}
          </Avatar>
          <Typography variant="h5" className="font-semibold">
            {subscription.customer_information.firstname}{" "}
            {subscription.customer_information.lastName}
          </Typography>
        </Box>
        <Box className="space-y-4">
          <Box className="rounded-lg bg-white p-4">
            <DisplayInfo
              infoName="Email"
              info={subscription.customer_information.email}
            />
            <DisplayInfo
              infoName="First Name"
              info={subscription.customer_information.firstname}
            />
            <DisplayInfo
              infoName="Last Name"
              info={subscription.customer_information.lastName}
            />
            <DisplayInfo
              infoName="  Service"
              info={subscription.subscription_service}
            />

            <DisplayInfo
              infoName="Username"
              info={subscription.customer_information.username}
            />

            <Box className="flex items-center justify-start">
              {" "}
              <Typography variant="h6" className="mr-2">
                Password:
              </Typography>
              <TextField
                type={showPassword ? "text" : "password"}
                value={subscription.customer_information.password}
                className="mt-2 w-[50%]"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <DisplayInfo
              infoName="Subscription Recurring"
              info={subscription.subscription_type}
            />

            <DisplayInfo
              infoName="Billing Period Start"
              info={formatBillingDate(subscription.billing_cycle_start)}
            />
            <DisplayInfo
              infoName="Billing Period End"
              info={formatBillingDate(subscription.billing_cycle_end)}
            />
          </Box>
        </Box>
        <Box className="m-5 flex items-center justify-center">
          <Button variant="contained">Cancel</Button>
        </Box>
      </Box>
    </Layout>
  );
}

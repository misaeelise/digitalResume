/*
 * Copyright (c) 2021-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

// import { useOktaAuth } from '@okta/okta-react';

import React from "react";
import headshot from "../../assets/headshot.png";
//styles
import { Grid, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
// import { Link } from 'react-router-dom';
// import { Container, Icon, Image, Menu } from 'semantic-ui-react';

const Navbar = () => {
  // const { authState, oktaAuth } = useOktaAuth();

  // const login = async () => oktaAuth.signInWithRedirect();
  // const logout = async () => oktaAuth.signOut();

  // if (!authState) {
  //   return null;
  // }

  return (
    <Grid container sx={{ width: "100vw", height: "20vh" }}>
      <Stack
        direction="row"
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        sx={{
          width: "100vw",
          height: "20vh",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            height: "20vh",
            alignItems: "center",
            paddingLeft: "3.5vw",
          }}
        >
          <Avatar alt="Misae Romer" src={headshot} />
          <Typography
            sx={{
              width: "10vw",
              fontSize: "1.25rem",
            }}
          >
            römer.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "flex-end",
            paddingRight: "5vw",
          }}
        >
          <Typography
            sx={{
              width: "10vw",
              alignContent: "center",
              textAlign: "center",
              height: "20vh",
              fontSize: "1.25rem",
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              width: "10vw",
              alignContent: "center",
              textAlign: "center",
              height: "20vh",
              fontSize: "1.25rem",
            }}
          >
            Works
          </Typography>
          <Typography
            sx={{
              width: "10vw",
              alignContent: "center",
              textAlign: "center",
              height: "20vh",
              fontSize: "1.25rem",
            }}
          >
            Contact
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};
export default Navbar;

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

import { useOktaAuth } from "@okta/okta-react";
import React, { useState, useEffect } from "react";
//styles
import { Grid } from "@mui/material";

const Home = () => {
  // const { authState, oktaAuth } = useOktaAuth();
  // const [userInfo, setUserInfo] = useState(null);

  return (
    <Grid container sx={{ background: "#ebf3fa", width: "100vw" }}>
      <div>hi</div>
    </Grid>
  );
};
export default Home;

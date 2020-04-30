import React, { useState, useEffect } from "react";
import * as Device from "expo-device";

const DeviceContext = React.createContext();
const { Provider } = DeviceContext;

const DeviceProvider = (props) => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    setDevice(`${Device.modelName} (${Device.osName} ${Device.osVersion})`);
  }, []);

  return <Provider value={{ device }}>{props.children}</Provider>;
};

export { DeviceProvider, DeviceContext };

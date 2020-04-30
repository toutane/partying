import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppProvider } from "./src/contexts/AppContext";
import { DeviceProvider } from "./src/contexts/DeviceContext";
import { PushNotificationsProvider } from "./src/contexts/PushNotificationsContext";
import { AuthProvider } from "./src/contexts/AuthContext";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import FirebaseInitialization from "./src/firebase/FirebaseInitialization";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  async function loadFonts() {
    await Font.loadAsync({
      "sf-text-regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
      "sf-text-medium": require("./assets/fonts/SF-Pro-Text-Medium.otf"),
      "sf-text-semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
      "sf-text-bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
      "sf-display-medium": require("./assets/fonts/SF-Pro-Text-Medium.otf"),
      "sf-display-semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
      "sf-display-bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
      feather1s: require("./node_modules/react-native-feather1s/Fonts/feather1s.ttf"),
    });
    setFontLoaded(true);
  }
  return (
    fontLoaded && (
      <AppProvider>
        <DeviceProvider>
          <PushNotificationsProvider>
            <AuthProvider>
              <ThemeProvider>
                <SafeAreaProvider>
                  <FirebaseInitialization />
                </SafeAreaProvider>
              </ThemeProvider>
            </AuthProvider>
          </PushNotificationsProvider>
        </DeviceProvider>
      </AppProvider>
    )
  );
}

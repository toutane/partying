import React, { useEffect } from "react";
import { View, Text, YellowBox } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { screenWidth } from "../../../../../utils/dimensions";
import { CurrentPositionBtn } from "./CurrentPositionBtn";

// const homePlace = {
//   description: "Home",
//   geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
// };
// const workPlace = {
//   description: "Work",
//   geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
// };

export const GoogleAutocomplete = (props) => {
  useEffect(() => {
    YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]); // TODO: Remove when fixed ]);
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
  }, []);
  return (
    <View stysle={{ flex: 1, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        text={props.location.description}
        location={props.location}
        isRowScrollable={false}
        listUnderlayColor={props.theme.gray5}
        placeholder={props.location.description}
        placeholderTextColor={
          props.theme.theme === "light" ? props.theme.gray2 : props.theme.gray3
        }
        getDefaultValue={() =>
          props.location.description !== "search location"
            ? props.location.description
            : ""
        }
        minLength={3}
        autoFocus={false}
        returnKeyType={"search"}
        keyboardAppearance={props.theme.theme}
        listViewDisplayed="auto"
        fetchDetails={true}
        renderRow={(row) => (
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: "sf-text-regular",
                fontSize: 16,
                color: props.theme.fontColor,
              }}
              numberOfLines={1}
            >
              {row.structured_formatting.main_text}
            </Text>
            <Text
              style={{
                fontFamily: "sf-text-regular",
                fontSize: 14,
                color: props.theme.gray2,
              }}
              numberOfLines={1}
            >
              {`${row.structured_formatting.secondary_text.substr(
                0,
                row.structured_formatting.secondary_text.indexOf(",")
              )}`}
            </Text>
          </View>
        )}
        onPress={(data, details = null) => {
          props._getCoordsAsync(data);
        }}
        query={{
          key: "AIzaSyC0sHR1_1gzomu8AmunFtdBFuygRxU8iAY",
          language: "en",
          type: "geocode",
        }}
        styles={{
          poweredContainer: { height: 0, opacity: 0 },
          textInputContainer: {
            marginBottom: 10,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            paddingHorizontal: 15,
            backgroundColor:
              props.theme.theme !== "light" ? props.theme.gray6 : "white",
          },
          textInput: {
            height: 35,
            backgroundColor: props.theme.gray5,
            borderRadius: 10,
            fontSize: 18,
            color: props.theme.fontColor,
            marginRight: 50,
          },
          row: {
            // backgroundColor: "red",
            padding: 0,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 30,
            width: screenWidth - 135,
            height: 35,
          },
          separator: {
            marginLeft: 25,
            marginRight: 25,
            backgroundColor: props.theme.gray5,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
        currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: "distance",
          type: "cafe",
        }}
        GooglePlacesDetailsQuery={{
          // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
          fields: "formatted_address",
        }}
        filterReverseGeocodingByTypes={[
          "locality",
          "administrative_area_level_3",
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        // predefinedPlaces={[homePlace, workPlace]}
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        // keyboardShouldPersistTaps={"always"}
        // renderLeftButton={() => (
        //   <Image source={require("path/custom/left-icon")} />
        // )}
        // renderRightButton={() => <Text>Custom text after the input</Text>}
      />
      <View
        style={{
          position: "absolute",
          left: screenWidth - 105,
          top: 7.5,
          height: 35,
          width: 35,
          borderRadius: 10,
          // backgroundColor: "red",
        }}
      >
        <CurrentPositionBtn {...props} />
      </View>
    </View>
  );
};

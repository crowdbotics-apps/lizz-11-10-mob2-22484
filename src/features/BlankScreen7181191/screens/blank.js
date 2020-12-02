import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_31}>
        <View style={styles.View_33}>
          <ImageBackground style={styles.ImageBackground_36}>
            <Text>Title</Text>
            <Text>Time</Text>
          </ImageBackground>
          <View style={styles.View_42}>
            <View style={styles.View_43}>
              <Icon name="star" />
              <Text style={styles.Text_66}>1</Text>
            </View>
            <View style={styles.View_44}>
              <Icon name="star" />
              <Text>2</Text>
            </View>
            <View style={styles.View_45}>
              <Icon name="star" />
              <Text>3</Text>
            </View>
          </View>
        </View>
        <Text>Sample text content</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: { backgroundColor: "#ff00ff" },
  View_31: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "blue"
  },
  View_33: { width: "100%", height: 250, backgroundColor: "#FFFFFe" },
  ImageBackground_36: { width: "100%", height: 200, backgroundSize: "contain" },
  Text_38: {},
  Text_40: {},
  View_42: { width: "100%", flexDirection: "row" },
  View_43: {
    width: "33.3%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Icon_50: {},
  Text_66: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0
  },
  View_44: { width: "33.3%", alignContent: "center" },
  Icon_55: {},
  Text_72: {},
  View_45: { width: "33.3%", alignContent: "center" },
  Icon_60: {},
  Text_80: {},
  Text_41: {}
})

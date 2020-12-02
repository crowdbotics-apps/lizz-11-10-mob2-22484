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
        </View>
        <View style={styles.View_42}>
          <View style={styles.View_43}>
            <Icon name="star" />
          </View>
          <View style={styles.View_44}>
            <Icon name="star" />
          </View>
          <View style={styles.View_45}>
            <Icon name="star" />
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
  View_43: { width: "33.3%" },
  Icon_50: {},
  View_44: { width: "33.3%" },
  Icon_55: {},
  View_45: { width: "33.3%" },
  Icon_60: {},
  Text_41: {}
})

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
      <View style={styles.View_5}>
        <View>
          <Icon name="star" />
        </View>
        <View>
          <Text>Sample text content</Text>
        </View>
      </View>
      <View style={styles.View_31}>
        <View style={styles.View_33}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/captain-john-smith-1180w-600h_I9YJU6O.jpg"
            }}
          />
          <Text>Sample text content</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: { backgroundColor: "#ff00ff" },
  View_5: { width: "100%", height: 20, flexDirection: "row" },
  View_6: {},
  Icon_9: {},
  View_7: {},
  Text_30: {},
  View_31: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "blue"
  },
  View_33: { width: "100%", height: 250 },
  Image_36: {},
  Text_38: {}
})

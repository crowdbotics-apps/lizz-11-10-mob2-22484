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
      <View style={styles.View_3}>
        <Icon name="times" style={styles.Icon_6} />
        <Image
          source={{
            uri:
              "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/captain-john-smith-1180w-600h.jpg"
          }}
          style={styles.Image_8}
        />
        <Text style={styles.Text_10}>John Smith</Text>
        <Text style={styles.Text_12}>john@email.com</Text>
      </View>
      <View style={styles.View_4}>
        <View style={styles.View_28}>
          <View>
            <Icon name="user" style={styles.Icon_62} />
          </View>
          <View>
            <Text style={styles.Text_63}>John Smith</Text>
          </View>
          <View style={styles.View_31}>
            <Text style={styles.Text_64}>john@email.com</Text>
          </View>
          <View>
            <Icon name="chevron-right" style={styles.Icon_88} />
          </View>
        </View>
        <View style={styles.View_89}>
          <View>
            <Icon name="user" style={styles.Icon_62} />
          </View>
          <View>
            <Text style={styles.Text_63}>John Smith</Text>
          </View>
          <View style={styles.View_31}>
            <Text style={styles.Text_64}>john@email.com</Text>
          </View>
          <View>
            <Icon name="chevron-right" style={styles.Icon_88} />
          </View>
        </View>
        <View style={styles.View_90}>
          <View>
            <Icon name="user" style={styles.Icon_62} />
          </View>
          <View>
            <Text style={styles.Text_63}>John Smith</Text>
          </View>
          <View style={styles.View_31}>
            <Text style={styles.Text_64}>john@email.com</Text>
          </View>
          <View>
            <Icon name="chevron-right" style={styles.Icon_88} />
          </View>
        </View>
        <View style={styles.View_91}>
          <View>
            <Icon name="user" style={styles.Icon_62} />
          </View>
          <View>
            <Text style={styles.Text_63}>John Smith</Text>
          </View>
          <View style={styles.View_31}>
            <Text style={styles.Text_64}>john@email.com</Text>
          </View>
          <View>
            <Icon name="chevron-right" style={styles.Icon_88} />
          </View>
        </View>
      </View>
      <View style={styles.View_13}>
        <Button
          title="Upgrade to Premium"
          color="#6ccaf9"
          style={styles.Button_15}
          onPress={() => alert("Pressed!")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: { backgroundColor: "#f5f5f5" },
  View_3: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    alignItems: "center"
  },
  Icon_6: { alignSelf: "flex-start", color: "#888888" },
  Image_8: { width: 70, height: 70, borderRadius: 70 },
  Text_10: {
    marginTop: 10,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: "bold"
  },
  Text_12: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 10,
    color: "#888888"
  },
  View_4: {
    width: "100%",
    height: 200,
    marginTop: 30,
    backgroundColor: "#FFFFFF"
  },
  View_28: {
    width: "100%",
    height: 20,
    paddingLeft: 20,
    flexDirection: "row",
    borderColor: "#f5f5f5",
    borderBottomWidth: 2
  },
  View_29: {},
  Icon_62: { marginTop: 0, marginBottom: 0, fontSize: 14, color: "#6ccaf9" },
  View_30: {},
  Text_63: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 7,
    paddingBottom: 0,
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  View_31: { justifyContent: "center", alignContent: "flex-start" },
  Text_64: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 7,
    paddingBottom: 0,
    fontSize: 10,
    color: "#888888"
  },
  View_32: {},
  Icon_88: { marginTop: 0, marginBottom: 0, fontSize: 14, color: "#cccccc" },
  View_89: {
    width: "100%",
    height: 20,
    paddingLeft: 20,
    flexDirection: "row",
    borderColor: "#f5f5f5",
    borderBottomWidth: 2
  },
  View_29: {},
  Icon_62: { marginTop: 0, marginBottom: 0, fontSize: 14, color: "#6ccaf9" },
  View_30: {},
  Text_63: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 7,
    paddingBottom: 0,
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  View_31: { justifyContent: "center", alignContent: "flex-start" },
  Text_64: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 7,
    paddingBottom: 0,
    fontSize: 10,
    color: "#888888"
  },
  View_32: {},
  Icon_88: { marginTop: 0, marginBottom: 0, fontSize: 14, color: "#cccccc" },
  View_90: {
    width: "100%",
    height: 20,
    paddingLeft: 20,
    flexDirection: "row",
    borderColor: "#f5f5f5",
    borderBottomWidth: 2
  },
  View_29: {},
  Icon_62: { marginTop: 0, marginBottom: 0, fontSize: 14, color: "#6ccaf9" },
  View_30: {},
  Text_63: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 7,
    paddingBottom: 0,
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  View_31: { justifyContent: "center", alignContent: "flex-start" },
  Text_64: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 7,
    paddingBottom: 0,
    fontSize: 10,
    color: "#888888"
  },
  View_32: {},
  Icon_88: { marginTop: 0, marginBottom: 0, fontSize: 14, color: "#cccccc" },
  View_91: {
    width: "100%",
    height: 20,
    paddingLeft: 20,
    flexDirection: "row",
    borderColor: "#f5f5f5",
    borderBottomWidth: 2
  },
  View_29: {},
  Icon_62: { marginTop: 0, marginBottom: 0, fontSize: 14, color: "#6ccaf9" },
  View_30: {},
  Text_63: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 7,
    paddingBottom: 0,
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  View_31: { justifyContent: "center", alignContent: "flex-start" },
  Text_64: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 7,
    paddingBottom: 0,
    fontSize: 10,
    color: "#888888"
  },
  View_32: {},
  Icon_88: { marginTop: 0, marginBottom: 0, fontSize: 14, color: "#cccccc" },
  View_13: {
    width: "100%",
    height: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: "#f5f5f5"
  },
  Button_15: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 10,
    color: "#ffffff",
    borderRadius: 8,
    textTransform: "uppercase"
  }
})

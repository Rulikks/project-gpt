import styles from "../screens/styles/Style";
import { View, Text, TouchableOpacity } from "react-native";
import DeleteSVG from "./Delete";

export default (props) => {
  return (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => props.onClick(props.item)}
    >
      <View>
        <Text style={styles.chatItemTitle}>{props.item.name}</Text>
        <Text style={styles.chatItemDate}>{props.item.date}</Text>
      </View>
      <TouchableOpacity
        style={{ zIndex: 1 }}
        onPress={() => props.onDelete(props.item.id)}
      >
        <Text>
          <DeleteSVG></DeleteSVG>
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

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
        <Text style={styles.chatItemTitle}>
          {props.item.title.length >= 25
            ? props.item.title.slice(0, 25) + "..."
            : props.item.title}
        </Text>
        <Text style={styles.chatItemDate}>{props.item.createdAt}</Text>
      </View>
      <TouchableOpacity
        style={{ zIndex: 1 }}
        onPress={() => props.onDelete(props.item._id)}
      >
        <Text>
          <DeleteSVG></DeleteSVG>
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

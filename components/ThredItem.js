import styles from "../Style";
import { View, Text, TouchableOpacity } from "react-native";
import DeleteSVG from "./Delete";

export default (props) => {
  return (
    <View style={styles.chatItem}>
      <View>
        <Text style={styles.chatItemTitle}>{props.item.name}</Text>
        <Text style={styles.chatItemDate}>{props.item.date}</Text>
      </View>
      <TouchableOpacity onPress={() => props.onDelete(props.item.id)}>
        <Text>
          <DeleteSVG></DeleteSVG>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

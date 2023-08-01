import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function DeleteSVG(props) {
  return (
    <View style={{ marginRight: 5, ...props.style }}>
      <Svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M15.9544 1.27452L13.5399 13.1549C13.3578 13.9934 12.8827 14.2021 12.2076 13.8071L8.52875 10.9786L6.75359 12.7599C6.55714 12.9648 6.39284 13.1363 6.01424 13.1363L6.27855 9.22707L13.097 2.79869C13.3935 2.52293 13.0327 2.37014 12.6363 2.6459L4.20693 8.18362L0.57804 6.99857C-0.211316 6.74143 -0.225603 6.17499 0.74234 5.77997L14.9365 0.0745542C15.5937 -0.182581 16.1687 0.227344 15.9544 1.27452Z"
          fill="black"
        />
      </Svg>
    </View>
  );
}

import { createElement, Component, render } from "rax";
import View from "rax-view";
import Text from "rax-text";
import TabHeader from "rax-tabheader";
import styles from "./Result.css";

class Result extends Component {
  state = {
    selectedTab:0,
  };
  
  renderItem = (item, index) => {
    return (
      <View style={styles.select_item_view}>
        <Text style={styles.select_item_text}>{item}</Text>
      </View>
    );
  };

  onSelect = index => {
    // do something
    this.setState({selectedTab: index})
  };
  itemWidth = (item, index) => {
    return 650/2
  };

  render() {
    return (
      <View style={styles.app}>
        <TabHeader
          style={styles.container}
          containerStyle={styles.container}
          dataSource={["照明", "空调"]}
          renderItem={this.renderItem}
          onSelect={this.onSelect}
          selected={this.state.selectedTab}
          itemWidth={this.itemWidth}
          itemStyle={styles.select_item}
          itemSelectedStyle={styles.select_item_selected}
        />
      </View>
    );
  }
}

export default Result;

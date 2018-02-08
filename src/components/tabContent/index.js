import { createElement, Component, render } from "rax";
import View from "rax-view";
import Text from "rax-text";
import TabHeader from "rax-tabheader";
import styles from "./index.css";

class TabContent extends Component {
  //   state = {
  //     selectedTab: 0
  //   };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.block]}>
          <View
            style={[styles.col, styles.item, styles.item_big, styles.item_left]}
          >
            <Text style={[styles.item_big_text, styles.item_big_text_top]}>
              剩余电量
            </Text>
            <Text style={[styles.item_big_text, styles.item_big_text_bottom]}>
              {this.props.degree.remain + '度'}
            </Text>
          </View>
          <View style={[styles.col, styles.item]}>
            <View style={[styles.row, styles.item, styles.item_small, styles.item_small_top]}>
              <Text style={[styles.item_small_text, styles.item_small_text_top]}>上月用电</Text>
              <Text style={[styles.item_small_text, styles.item_small_text_bottom]}>{this.props.degree.before + '度'}</Text>
            </View>
            <View style={[styles.row, styles.item, styles.item_small, styles.item_small_bottom]}>
              <Text style={[styles.item_small_text, styles.item_small_text_top]}>当月已用</Text>
              <Text style={[styles.item_small_text, styles.item_small_text_bottom]}>{this.props.degree.current + '度'}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.row, styles.block]}>
          <View
            style={[styles.col, styles.item, styles.item_big, styles.item_left]}
          >
            <Text style={[styles.item_big_text, styles.item_big_text_top]}>
              剩余金额
            </Text>
            <Text style={[styles.item_big_text, styles.item_big_text_bottom]}>
            {this.props.ele.remain + '度'}
            </Text>
          </View>
          <View style={[styles.col, styles.item]}>
            <View style={[styles.row, styles.item, styles.item_small, styles.item_small_top]}>
              <Text style={[styles.item_small_text, styles.item_small_text_top]}>上月金额</Text>
              <Text style={[styles.item_small_text, styles.item_small_text_bottom]}> {this.props.ele.before + '度'}</Text>
            </View>
            <View style={[styles.row, styles.item, styles.item_small, styles.item_small_bottom]}>
              <Text style={[styles.item_small_text, styles.item_small_text_top]}>当月金额</Text>
              <Text style={[styles.item_small_text, styles.item_small_text_bottom]}> {this.props.ele.current + '度'}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TabContent;

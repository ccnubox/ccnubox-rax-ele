import { createElement, Component } from "rax";
import View from "rax-view";
import Text from "rax-text";
import styles from "./App.css";
import Touchable from "rax-touchable";
import Button from "rax-button";
import BoxButton from "./common/button";
import BoxTextInput from "./common/text-input";
const test = require("@weex-module/test");
import Modal from 'rax-modal';
import ListView from 'rax-listview';

let listData = [
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
  {name1: 'tom'}, {name1: 'tom'}, {name1: 'tom'},
];

class App extends Component {
  showModal = () => {
    this.refs.modal.show();
  };

  hideModal = () => {
    this.refs.modal.hide();
  }

  listItem = (item, index) => {
    if (index % 2 == 0) {
      return (
        <View style={styles.item1}>
          <Text style={styles.text}>{item.name1}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.item2}>
          <Text style={styles.text}>{item.name1}</Text>
        </View>
      );
    }
  }

  handleLoadMore = () => {

  }

  render() {
    return (
      <View style={styles.app}>
        <Modal ref="modal">
        <ListView
        renderRow={this.listItem}
        dataSource={listData}
        onEndReached={this.handleLoadMore}
      />
          <Touchable onPress={this.hideModal}>
            <Text>Close</Text>
          </Touchable>
        </Modal>
        <BoxButton text="查询" onClickHandler={this.showModal} />
        <BoxTextInput value="查询" />
        <BoxButton text="查询" />
      </View>
    );
  }
}

export default App;

import { createElement, Component } from "rax";
import View from "rax-view";
import Text from "rax-text";
import styles from "./App.css";
import Touchable from "rax-touchable";
import Button from "rax-button";
import BoxButton from "./common/button";
import BoxTextInput from "./common/text-input";
// const test = require("@weex-module/test");
import Modal from "rax-modal";
import ListView from "rax-listview";
var stream = require("@weex-module/stream");
import Image from "rax-image";
import Link from 'rax-link';

let listData = [
  { name1: "tom" },
  { name1: "tom" },
  { name1: "tom" },
  { name1: "tom" },
  { name1: "tom" },
  { name1: "tom" },
  { name1: "tom" }
];

let gifImage = {
  uri:
    "http://storage.slide.news.sina.com.cn/slidenews/77_ori/2016_34/74766_703038_567223.gif"
};

class App extends Component {
  state = {
    selectedBuilding: -1,
    selectedRegion: -1
  };

  componentDidMount() {
    // fetch("http://httpbin.org/get", {
    //   dataType: "json",
    //   method: "GET"
    // })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     alert(data);
    //   })
    //   .catch(err => {
    //     // handle exception
    //   });
  }
  showModal = () => {
    this.refs.modal.show();
  };

  hideModal = () => {
    this.refs.modal.hide();
  };

  listItem = (item, index) => {
    if (index % 2 == 0) {
      return (
        <View style={styles.list_item}>
          <Text style={styles.text}>{item.name1}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.list_item}>
          <Text style={styles.text}>{item.name1}</Text>
        </View>
      );
    }
  };

  handleLoadMore = () => {};

  render() {
    return (
      <View style={styles.app}>
        <Image style={styles.image} source={gifImage} />
        <Modal ref="modal" contentStyle={styles.modal}>
          <View style={styles.modalTop}>
            <Touchable onPress={this.hideModal}>
              <Text style={[styles.modal_top_left, styles.text]}>关闭</Text>
            </Touchable>
            <Touchable onPress={this.hideModal}>
              <Text>标题</Text>
            </Touchable>
            <Touchable onPress={this.hideModal}>
              <Text style={[styles.modal_top_right, styles.text]}>确定</Text>
            </Touchable>
          </View>
          <View style={styles.listContainer}>
            <ListView
              renderRow={this.listItem}
              dataSource={listData}
              onEndReached={this.handleLoadMore}
            />
            <ListView
              renderRow={this.listItem}
              dataSource={listData}
              onEndReached={this.handleLoadMore}
            />
          </View>
        </Modal>
        <BoxButton text="查询" onClickHandler={this.showModal} />
        <BoxTextInput value="查询" />
        <BoxButton>
          <Link href="http://10.240.192.93:9999/js/second.bundle.js?_wx_tpl=http://10.240.192.93:9999/js/second.bundle.js">查询</Link>
        </BoxButton>
      </View>
    );
  }
}

export default App;

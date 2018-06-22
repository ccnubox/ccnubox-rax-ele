import { createElement, Component } from "rax";
import View from "rax-view";
import Text from "rax-text";
import styles from "./App.css";
import Touchable from "rax-touchable";
import Button from "rax-button";
import BoxButton from "./box-ui/common/button";
import BoxTextInput from "./box-ui/common/text-input";
// const test = require("@weex-module/test");
import Modal from "rax-modal";
import ListView from "rax-listview";
var stream = require("@weex-module/stream");
import Image from "rax-image";
import Link from "rax-link";

let regionList = ["东区", "西区", "元宝山", "南湖", "国交", "产区"];
let buildingList = [
  [
    "东01栋",
    "东02栋",
    "东03栋",
    "东04栋",
    "东05栋",
    "东06栋",
    "东07栋",
    "东08栋",
    "东09栋",
    "东10栋",
    "东11栋",
    "东12栋",
    "东13栋东",
    "东13栋西",
    "东14栋",
    "东15栋东",
    "东15栋西",
    "东16栋",
    "东附1栋"
  ],
  ["西1栋", "西2栋", "西3栋", "西4栋", "西5栋", "西6栋", "西7栋", "西8栋"],
  ["元宝山1栋", "元宝山2栋", "元宝山3栋", "元宝山4栋", "元宝山5栋"],
  [
    "南湖01栋",
    "南湖02栋",
    "南湖03栋",
    "南湖04栋",
    "南湖05栋",
    "南湖06栋",
    "南湖07栋",
    "南湖08栋",
    "南湖09栋",
    "南湖10栋",
    "南湖11栋",
    "南湖12栋",
    "南湖13栋"
  ],
  ["国3栋", "国4栋", "国5栋", "国6栋"],
  ["产8栋", "产9栋"]
];
let gifImage = {
  uri:
    "http://storage.slide.news.sina.com.cn/slidenews/77_ori/2016_34/74766_703038_567223.gif"
};

const textInputStyle = {
  fontSize: 32,
  textAlign: "left",
  paddingLeft: 40,
  paddingRight: 40
};

class App extends Component {
  state = {
    dorm: "",
    selectedBuilding: 0,
    selectedRegion: 0
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

  onDormChange = val => {
    this.setState({
      dorm: val
    });
  };

  renderListItem = (item, index) => {
    return (
      <Touchable
        onPress={() => {
          this.changeRegion(index);
        }}
      >
        <View
          style={[
            styles.list_item,
            index === this.state.selectedRegion ? styles.selected : {}
          ]}
        >
          <Text style={styles.text}>{item}</Text>
        </View>
      </Touchable>
    );
  };

  renderBuildinglistItem = (item, index) => {
    return (
      <Touchable
        onPress={() => {
          this.changeBuilding(index);
        }}
      >
        <View
          style={[
            styles.list_item,
            index === this.state.selectedBuilding ? styles.selected : {}
          ]}
        >
          <Text style={styles.text}>{item}</Text>
        </View>
      </Touchable>
    );
  };

  changeRegion = index => {
    this.setState({
      selectedRegion: index,
      selectedBuilding: 0,
    });
  };

  changeBuilding = index => {
    this.setState({
      selectedBuilding: index
    });
  };

  handleLoadMore = () => {};

  render() {
    return (
      <View style={styles.app}>
        <Modal ref="modal" contentStyle={styles.modal}>
          <View style={styles.modalTop}>
            <Touchable onPress={this.hideModal}>
              <Text style={[styles.modal_top_left, styles.text]}>关闭</Text>
            </Touchable>
            <Touchable onPress={this.hideModal}>
              <Text>选择宿舍楼</Text>
            </Touchable>
            <Touchable onPress={this.hideModal}>
              <Text style={[styles.modal_top_right, styles.text]}>确定</Text>
            </Touchable>
          </View>
          <View style={styles.listContainer}>
            <ListView
              renderRow={this.renderListItem}
              dataSource={regionList}
              onEndReached={this.handleLoadMore}
            />
            <ListView
              renderRow={this.renderBuildinglistItem}
              dataSource={buildingList[this.state.selectedRegion]}
              onEndReached={this.handleLoadMore}
            />
          </View>
        </Modal>
        <Button onPress={this.showModal} style={[styles.show_modal_btn]}>
          <Text style={styles.show_modal_btn_text}>{"点击选择宿舍楼"}</Text>
        </Button>
        <View style={[styles.query_input]}>
          <BoxTextInput
            width={550}
            onChange={this.onDormChange}
            value={this.state.dorm}
            extraStyle={textInputStyle}
            keyboardType="number-pad"
            placeholder="输入寝室号（如：216）"
          />
        </View>
        <View style={[styles.query_btn]}>
          <BoxButton width={550}>
            <Link
              style={styles.link}
              href="http://172.20.10.4:9999/js/second.bundle.js?_wx_tpl=http://172.20.10.4:9999/js/second.bundle.js"
            >
              查询
            </Link>
          </BoxButton>
        </View>
      </View>
    );
  }
}

export default App;

import { createElement, Component } from "rax";
import View from "rax-view";
import Text from "rax-text";
import styles from "./App.css";
import Touchable from "rax-touchable";
import Button from "rax-button";
import BoxButton from "./box-ui/common/button";
import BoxTextInput from "./box-ui/common/text-input";
const native = require("@weex-module/test");
import Modal from "rax-modal";
import ListView from "rax-listview";

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
    selectedRegion: 0,
    currentDorm: null
  };

  selectDorm = () => {
    this.hideModal();
    this.setState({
      currentDorm:
        buildingList[this.state.selectedRegion][this.state.selectedBuilding]
    });
  };

  onDormChange = e => {
    this.setState({
      dorm: e.nativeEvent.text
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
          <View style={styles.list_item_container}>
            <Text
              style={[
                styles.text,
                index === this.state.selectedRegion ? styles.selected_text : {}
              ]}
            >
              {item}
            </Text>
          </View>
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
          <View style={styles.list_item_container}>
            <Text
              style={[
                styles.text,
                index === this.state.selectedBuilding
                  ? styles.selected_text
                  : {}
              ]}
            >
              {item}
            </Text>
          </View>
        </View>
      </Touchable>
    );
  };

  changeRegion = index => {
    this.setState({
      selectedRegion: index,
      selectedBuilding: 0
    });
  };

  changeBuilding = index => {
    this.setState({
      selectedBuilding: index
    });
  };

  handleLoadMore = () => {};

  submit = () => {
    if (this.state.dorm === "") {
      alert("请输入寝室号");
      return;
    }

    native.push(
      `ccnubox://ele.result?building=${this.state.selectedBuilding}&region=${
        this.state.selectedRegion
      }&dorm=${this.state.dorm}`
    );
  };
  showModal = () => {
    this.refs.modal.show();
  };

  hideModal = () => {
    this.refs.modal.hide();
  };

  render() {
    return (
      <View style={styles.app}>
        <Modal ref="modal" contentStyle={styles.modal}>
          <View style={styles.modalTop}>
            <Touchable onPress={this.hideModal}>
              <Text style={[styles.modal_top_left, styles.text]}>关闭</Text>
            </Touchable>
            <Text>选择宿舍楼</Text>
            <Touchable onPress={this.selectDorm}>
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
          <Text style={styles.show_modal_btn_text}>
            {this.state.currentDorm ? this.state.currentDorm : "点击选择宿舍楼"}
          </Text>
        </Button>
        <View style={[styles.query_input]}>
          <BoxTextInput
            width={550}
            onChange={this.onDormChange}
            style={textInputStyle}
            keyboardType="number-pad"
            placeholder="输入寝室号（如：216）"
          />
        </View>
        <View style={[styles.query_btn]}>
          <BoxButton
            width={550}
            style={styles.submit}
            onPress={this.submit}
          >
            <Text style={styles.submit_text}>查询</Text>
          </BoxButton>
        </View>
      </View>
    );
  }
}

export default App;

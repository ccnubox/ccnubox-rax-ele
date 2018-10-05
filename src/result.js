import { createElement, Component, render } from "rax";
import View from "rax-view";
import Text from "rax-text";
import TabHeader from "rax-tabheader";
import styles from "./Result.css";
import Image from "rax-image";
import TabContent from "./components/tabContent";
import EleService from "./services/ele";
const native = require("@weex-module/test");
import { parseSearchString } from "./box-ui/util";
import { BUILDING_LIST, REGION_LIST } from "./common/consts";
import Notification from "./box-ui/common/notification";

let lightImage = {
  uri:
    "data:image/png;base64,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"
};

let airImage = {
  uri:
    "data:image/png;base64,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"
};

const notificationStyle = {
  position: "absolute",
  left: 0,
  width: 750,
  top: 0
};

class Result extends Component {
  state = {
    selectedTab: 0,
    air: {
      degree: {
        remain: 0,
        before: 0,
        current: 0
      },
      ele: {
        remain: 0,
        before: 0,
        current: 0
      }
    },
    light: {
      degree: {
        remain: 0,
        before: 0,
        current: 0
      },
      ele: {
        remain: 0,
        before: 0,
        current: 0
      }
    }
  };

  getRequestParams(building, region) {
    let buildingId;
    let buildingStr = BUILDING_LIST[region][building];
    const length = buildingStr.length;
    switch (region) {
      case 0:
        const lastChar = buildingStr.slice(length - 1, length);
        if (lastChar === "东" || lastChar === "西") {
          buildingId = "东" + lastChar + buildingStr.slice(1, 3);
        } else if (buildingStr.slice(1, 2) === "附") {
          buildingId = "东附" + buildingStr.slice(2, 3);
        } else {
          buildingId = "东" + buildingStr.slice(1, 3);
        }
        break;
      case 1:
        buildingId = "西" + buildingStr.slice(1, 2);
        break;
      case 2:
        buildingId = "元" + buildingStr.slice(3, 4);
        break;
      case 3:
        buildingId = "南" + buildingStr.slice(2, 4);
        break;
      case 4:
        buildingId = buildingStr.slice(0, 2);
        break;
      case 5:
        buildingId = buildingStr.slice(0, 2);
        break;
      default:
        alert("参数输入错误");
        break;
    }
    return buildingId;
  }

  componentWillMount() {
    let qd = {};
    // parse window.location.search get all the params
    if (window.location.search) {
      qd = parseSearchString(window.location.search);
    } else {
      alert("参数缺失错误");
    }
    const building = Number(qd.building[0]);
    const region = Number(qd.region[0]);
    const dorm = qd.dorm[0];

    const buildingId = this.getRequestParams(building, region);
    Promise.all([
      EleService.getAir({
        dor: `${buildingId}-${dorm}`
      }),
      EleService.getLight({
        dor: `${buildingId}-${dorm}`
      })
    ])
      .then(resArr => {
        native.reportInsightApiEvent("getEleInfo", "success", "null");
        // 保存成功则查询结果到 Native
        native.setDormInfo(qd.building[0], qd.region[0], qd.dorm[0]);
        this.setState({
          light: {
            degree: resArr[1].degree,
            ele: resArr[1].ele
          },
          air: {
            degree: resArr[0].degree,
            ele: resArr[0].ele
          }
        });
        native.changeLoadingStatus(true);
      })
      .catch(e => {
        native.changeLoadingStatus(true);
        if (e.status === 404) {
          native.reportInsightApiEvent(
            "getEleInfo",
            "error",
            JSON.stringify(e)
          );
          alert("寝室不存在，请重新查询");
          native.back();
        } else {
          native.reportInsightApiEvent(
            "getEleInfo",
            "error",
            JSON.stringify(e)
          );
          alert("服务端错误，请重试");
        }
      });
  }

  renderItem = (item, index) => {
    return (
      <View style={styles.select_item_view}>
        <Text
          style={[
            styles.select_item_text,
            index === this.state.selectedTab
              ? styles.select_item_selected_text
              : styles.select_item_normal_text
          ]}
        >
          {item}
        </Text>
      </View>
    );
  };

  onSelect = index => {
    this.setState({ selectedTab: index });
  };
  itemWidth = (item, index) => {
    return 650 / 2;
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
        <View>
          <Image
            style={styles.image}
            source={this.state.selectedTab === 0 ? lightImage : airImage}
          />
        </View>
        <TabContent
          degree={
            this.state.selectedTab === 0
              ? this.state.light.degree
              : this.state.air.degree
          }
          ele={
            this.state.selectedTab === 0
              ? this.state.light.ele
              : this.state.air.ele
          }
        />
        <Notification
          pageId="com.muxistudio.ele"
          style={notificationStyle}
        />
      </View>
    );
  }
}

export default Result;

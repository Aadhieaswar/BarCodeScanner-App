import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// import component
import InfoRow from '../Components/InfoRow';

let count = 1;

export default class ItemInfo extends Component {
  constructor(props) {
    super(props);
    count = 0;
  }

  getInfoOnCurrentItem = () => {
    const res = this.props.route.params.res;
    if (res.error_code) {
      return ['Sorry! ' + res.error_code];
    } else {
      let data = [];
      for (const key in res) {
        data.push(`${key}: ${res[key]}`);
      }
      return data;
    }
  }

  renderItem = (item) => {
    let keyValuePair = item['item'].replace(' ', '').replace('nf_', '').split(':');

    let idItem = keyValuePair[0].substr(keyValuePair[0].length - 3) === '_id';
    let nameItem = keyValuePair[0].substr(keyValuePair[0].length - 5) === '_name';

    if (keyValuePair[1] === 'null' || idItem || nameItem) return;

    return (<InfoRow style={[styles.content, styles.listInfo]} title={keyValuePair[0]} value={keyValuePair[1]} />);
  }

  render() {
    let content = this.getInfoOnCurrentItem();
    const title = this.props.route.params.itemName;
    console.log(title);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.route.params.itemName}</Text>
        <FlatList style={styles.list} data={content} keyExtractor={() => count++} renderItem={(item) => this.renderItem(item)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    color: 'black'
  },
  content: {
    fontSize: 20,
    textAlign: 'center'
  },
  listInfo: {
    color: '#428EFF',
  },
  list: {
    flex: 1,
    width: '100%',
    padding: 5
  }
})

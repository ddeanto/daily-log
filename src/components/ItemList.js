import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { itemsFetch, itemsConfigFetch } from '../actions';
import Item from './Item';
// import ListItem from './ListItem';

class ItemList extends Component {
  componentWillMount() {
    this.props.itemsFetch();
    this.props.itemsConfigFetch();
  }

  createDatasource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.items);
  }

  renderRow(item) {
    return <Item item={item} />;
  }

  render() {
    this.createDatasource();
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const items = _.map(state.items, (val, uid) => {
    return { ...val, uid };
  });

  return { items };
};

export default connect(mapStateToProps, { itemsFetch, itemsConfigFetch })(ItemList);

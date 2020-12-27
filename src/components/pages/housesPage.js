import React, { Component } from "react";
import ItemList from "../itemList";
import ItemDetails, { Field } from "../itemDetails";
import ErrorMessage from "../errorMessage";
import GotService from "../../services/gotServices";
import RowBlock from "../rowBlock/rowBlock";

export default class HousesPage extends Component {
  gotService = new GotService();
  state = {
    selectedHouse: null,
    error: false,
  };
  onItemSelected = (id) => {
    this.setState({
      selectedHouse: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({ name, region }) => `${name} (${region})`}
      />
    );
    const charDetails = (
      <ItemDetails
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouses}
      >
        <Field field="name" label="Name" />
        <Field field="region" label="Region" />
        <Field field="words" label="Words" />
      </ItemDetails>
    );
    return <RowBlock left={itemList} right={charDetails} />;
  }
}

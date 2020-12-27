import React, { Component } from "react";
import GotService from "../../services/gotServices";
import ItemDetails, {Field} from "../itemDetails";

export default class BooksItem extends Component {
    gotService = new GotService();

    render() {
        return (
            <ItemDetails
            itemId={this.props.bookId}
            getData={this.gotService.getBook}>
            <Field field="name" label="Name" />
            <Field field="numberOfPages" label="Number of Pages" />
            <Field field="country" label="Country" />
            <Field field="released" label="Released" />
          </ItemDetails>
        )
    }
}
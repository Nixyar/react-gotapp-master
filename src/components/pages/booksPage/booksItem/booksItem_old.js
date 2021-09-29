import React, {Component} from "react";
import ItemDetails, {Field} from "../../../../shared/itemDetails";
import {GotService} from "../../../../services/gotSerivce";

export default class BooksItem extends Component {
    gotService = new GotService();

    render() {
        return (
            <ItemDetails gotData={this.gotService.getBook(this.props.bookId)}>
                <Field field={'numberOfPages'} label={'NumberOfPages'}/>
                <Field field={'publisher'} label={'Publisher'}/>
                <Field field={'released'} label={'Released'}/>
            </ItemDetails>
        );
    }
}

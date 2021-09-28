import React, {Component} from "react";
import ItemList from "../../../shared/itemList";
import ErrorMessage from "../../../shared/errorMessage";
import {withRouter} from "react-router-dom"
import {GotService} from "../../../services/gotSerivce";

class BooksPage extends Component {
    gotService = new GotService();
    state = {
        isError: false
    }

    componentDidCatch() {
        this.setState({isError: true})
    }

    render() {
        if (this.state.isError) {
            return <ErrorMessage errorText={'Произошла ошибка при загрузке данных'}/>
        }

        return (
            <ItemList gotData={this.gotService.getAllBooks()}
                      onSelectItem={(itemId) => this.props.history.push(itemId)}
                      renderItem={(item) => item.name}/>
        );
    }
}

export default withRouter(BooksPage);

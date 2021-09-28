import React, {Component} from "react";
import ItemList from "../../../shared/itemList";
import ItemDetails, {Field} from "../../../shared/itemDetails";
import ErrorMessage from "../../../shared/errorMessage";
import InfoRowBlock from "../../../shared/infoRowBlock";

export default class BooksPage extends Component {
    state = {
        selectBookId: null,
        isError: false
    }

    componentDidCatch() {
        this.setState({isError: true})
    }

    onSelectItem = (id) => {
        this.setState({selectBookId: id});
    }

    render() {
        const {selectBookId} = this.state;
        const {gotData} = this.props;

        if (this.state.isError) {
            return <ErrorMessage errorText={'Произошла ошибка при загрузке данных'}/>
        }

        const itemList = (
            <ItemList gotData={gotData.getAllBooks()}
                      onSelectItem={this.onSelectItem}
                      renderItem={(item) => item.name}/>
        );

        const itemDetails = (
            <ItemDetails gotData={selectBookId ? gotData.getBook(selectBookId) : null}
                         itemId={selectBookId}>
                <Field field={'numberOfPages'} label={'NumberOfPages'}/>
                <Field field={'publisher'} label={'Publisher'}/>
                <Field field={'released'} label={'Released'}/>
            </ItemDetails>
        );

        return (
            <>
                <InfoRowBlock leftBlock={itemList} rightBlock={itemDetails}/>
            </>
        );
    }
}

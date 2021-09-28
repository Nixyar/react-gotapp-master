import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import ItemList from "../../../shared/itemList";
import ItemDetails, {Field} from "../../../shared/itemDetails";
import RandomChar from "../../randomChar";
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
        const {isLookBlockRandomCharacter, gotData} = this.props;
        const RandomCharBlock = isLookBlockRandomCharacter ? <RandomChar gotData={gotData}/> : null;

        if (this.state.isError) {
            return <ErrorMessage errorText={'Произошла ошибка при загрузке данных'}/>
        }

        const itemList = (
            <ItemList gotData={gotData.getAllBooks()}
                      onSelectItem={this.onSelectItem}
                      renderItem={(item) => item.name}/>
        );

        const itemDetails = (
            <ItemDetails gotData={this.state.selectBookId ? gotData.getBook(this.state.selectBookId) : null} itemId={this.state.selectBookId}>
                <Field field={'numberOfPages'} label={'NumberOfPages'}/>
                <Field field={'publisher'} label={'Publisher'}/>
                <Field field={'released'} label={'Released'}/>
            </ItemDetails>
        );

        return (
            <>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {RandomCharBlock}
                    </Col>
                </Row>
                <InfoRowBlock leftBlock={itemList} rightBlock={itemDetails}/>
            </>
        );
    }
}

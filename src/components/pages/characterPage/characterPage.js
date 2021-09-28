import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import ItemList from "../../../shared/itemList";
import ItemDetails, {Field} from "../../../shared/itemDetails";
import RandomChar from "../../randomChar";
import ErrorMessage from "../../../shared/errorMessage";
import InfoRowBlock from "../../../shared/infoRowBlock";

export default class CharacterPage extends Component {
    state = {
        selectCharId: null,
        isError: false
    }

    componentDidCatch() {
        this.setState({isError: true})
    }

    onSelectItem = (id) => {
        this.setState({selectCharId: id});
    }

    render() {
        const {isLookBlockRandomCharacter, gotData} = this.props;
        const RandomCharBlock = isLookBlockRandomCharacter ? <RandomChar gotData={gotData}/> : null;

        if (this.state.isError) {
            return <ErrorMessage errorText={'Произошла ошибка при загрузке данных'}/>
        }

        const itemList = (
            <ItemList gotData={gotData.getAllCharacters()}
                      onSelectItem={this.onSelectItem}
                      renderItem={(item) => `${item.name} (${item.gender})`}/>
        );

        const itemDetails = (
            <ItemDetails gotData={this.state.selectCharId ? gotData.getCharacter(this.state.selectCharId) : null}
                         itemId={this.state.selectCharId}>
                <Field field={'gender'} label={'Gender'}/>
                <Field field={'born'} label={'Born'}/>
                <Field field={'died'} label={'Died'}/>
                <Field field={'culture'} label={'Culture'}/>
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

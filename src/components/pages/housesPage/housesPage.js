import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import ItemList from "../../../shared/itemList";
import ItemDetails, {Field} from "../../../shared/itemDetails";
import RandomChar from "../../randomChar";
import ErrorMessage from "../../../shared/errorMessage";
import InfoRowBlock from "../../../shared/infoRowBlock";

export default class HousesPage extends Component {
    state = {
        selectHouseId: null,
        isError: false
    }

    componentDidCatch() {
        this.setState({isError: true})
    }

    onSelectItem = (id) => {
        this.setState({selectHouseId: id});
    }

    render() {
        const {isLookBlockRandomCharacter, gotData} = this.props;
        const RandomCharBlock = isLookBlockRandomCharacter ? <RandomChar gotData={gotData}/> : null;

        if (this.state.isError) {
            return <ErrorMessage errorText={'Произошла ошибка при загрузке данных'}/>
        }

        const itemList = (
            <ItemList gotData={gotData.getAllHouses()}
                      onSelectItem={this.onSelectItem}
                      renderItem={(item) => item.name}/>
        );

        const itemDetails = (
            <ItemDetails gotData={this.state.selectHouseId ? gotData.getHouse(this.state.selectHouseId) : null}
                         itemId={this.state.selectHouseId}>
                <Field field={'coatOfArms'} label={''}/>
                <Field field={'region'} label={'Region'}/>
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

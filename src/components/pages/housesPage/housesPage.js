import React, {Component} from "react";
import ItemList from "../../../shared/itemList";
import ItemDetails, {Field} from "../../../shared/itemDetails";
import ErrorMessage from "../../../shared/errorMessage";
import InfoRowBlock from "../../../shared/infoRowBlock";
import {GotService} from "../../../services/gotSerivce";

export default class HousesPage extends Component {
    gotService = new GotService();

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
        const {selectHouseId} = this.state;

        if (this.state.isError) {
            return <ErrorMessage errorText={'Произошла ошибка при загрузке данных'}/>
        }

        const itemList = (
            <ItemList gotData={this.gotService.getAllHouses()}
                      onSelectItem={this.onSelectItem}
                      renderItem={(item) => item.name}/>
        );

        const itemDetails = (
            <ItemDetails gotData={selectHouseId ? this.gotService.getHouse(selectHouseId) : null}
                         itemId={selectHouseId}>
                <Field field={'coatOfArms'} label={''}/>
                <Field field={'region'} label={'Region'}/>
            </ItemDetails>
        );

        return (
            <>
                <InfoRowBlock leftBlock={itemList} rightBlock={itemDetails}/>
            </>
        );
    }
}

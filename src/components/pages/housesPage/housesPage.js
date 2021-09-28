import React, {Component} from "react";
import ItemList from "../../../shared/itemList";
import ItemDetails, {Field} from "../../../shared/itemDetails";
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
        const {selectHouseId} = this.state;
        const {gotData} = this.props;

        if (this.state.isError) {
            return <ErrorMessage errorText={'Произошла ошибка при загрузке данных'}/>
        }

        const itemList = (
            <ItemList gotData={gotData.getAllHouses()}
                      onSelectItem={this.onSelectItem}
                      renderItem={(item) => item.name}/>
        );

        const itemDetails = (
            <ItemDetails gotData={selectHouseId ? gotData.getHouse(selectHouseId) : null}
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

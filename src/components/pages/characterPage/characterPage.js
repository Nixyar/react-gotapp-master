import React, {Component} from "react";
import ItemList from "../../../shared/itemList";
import ItemDetails, {Field} from "../../../shared/itemDetails";
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
        const {selectCharId, isError} = this.state;
        const {gotData} = this.props;

        if (isError) {
            return <ErrorMessage errorText={'Произошла ошибка при загрузке данных'}/>
        }

        const itemList = (
            <ItemList gotData={gotData.getAllCharacters()}
                      onSelectItem={this.onSelectItem}
                      renderItem={(item) => `${item.name} (${item.gender})`}/>
        );

        const itemDetails = (
            <ItemDetails gotData={selectCharId ? gotData.getCharacter(selectCharId) : null}
                         itemId={selectCharId}>
                <Field field={'gender'} label={'Gender'}/>
                <Field field={'born'} label={'Born'}/>
                <Field field={'died'} label={'Died'}/>
                <Field field={'culture'} label={'Culture'}/>
            </ItemDetails>
        );

        return (
            <>
                <InfoRowBlock leftBlock={itemList} rightBlock={itemDetails}/>
            </>
        );
    }
}

import React, {useState} from "react";
import ItemList from "../../../shared/itemList";
import ItemDetails, {Field} from "../../../shared/itemDetails";
import InfoRowBlock from "../../../shared/infoRowBlock";
import {GotService} from "../../../services/gotSerivce";

export default function CharacterPage() {
    const gotService = new GotService();

    const [selectCharId, setSelectCharId] = useState(null);

    const itemList = (
        <ItemList gotData={gotService.getAllCharacters()}
                  onSelectItem={setSelectCharId}
                  renderItem={(item) => `${item.name} (${item.gender})`}/>
    );

    const itemDetails = (
        <ItemDetails gotData={selectCharId ? gotService.getCharacter(selectCharId) : null}
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

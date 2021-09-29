import React, {useState} from "react";
import ItemList from "../../../shared/itemList";
import ItemDetails, {Field} from "../../../shared/itemDetails";
import InfoRowBlock from "../../../shared/infoRowBlock";
import {GotService} from "../../../services/gotSerivce";

export default function HousesPage() {
    const gotService = new GotService();

    const [selectHouseId, setSelectHouseId] = useState(null);

    const itemList = (
        <ItemList gotData={gotService.getAllHouses()}
                  onSelectItem={setSelectHouseId}
                  renderItem={(item) => item.name}/>
    );

    const itemDetails = (
        <ItemDetails gotData={selectHouseId ? gotService.getHouse(selectHouseId) : null}
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

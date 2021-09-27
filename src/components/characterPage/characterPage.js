import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import ItemList from "./itemList";
import CharDetails from "./charDetails";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";

export default class CharacterPage extends Component {
    state = {
        selectCharId: null,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    selectChar = (id) => {
        this.setState({selectCharId: id});
    }

    render() {
        const {isLookBlockRandomCharacter} = this.props;
        const RandomCharBlock = isLookBlockRandomCharacter ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {RandomCharBlock}
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onSelectCharacter={this.selectChar}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.selectCharId}/>
                    </Col>
                </Row>
            </>
        );
    }
}

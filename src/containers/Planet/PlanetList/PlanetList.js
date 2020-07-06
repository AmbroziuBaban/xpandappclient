import React, { Component } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary/Auxiliary'

import { connect } from 'react-redux'
import * as repositoryActions from "../../../store/actions/repositoryActions"

import Planet from '../../../components/PlanetComponents/Planet/Planet'

class PlanetList extends Component{
    componentDidMount = () => {
        let url = 'https://localhost:44393/api/planet';
        this.props.onGetData(url , {...this.props});
    }
    render(){
        let planets = [];
        if(this.props.data && this.props.data.length > 0){
            planets= this.props.data.map((planet) => {
                return (
                    <Planet key={planet.id} planet={planet} {...this.props} />
                )
            })
        }
        else{
            return(<div>No Data yet...</div>)
        }
        return(
            <Aux>
                <Row>
                    <Col  md={2}>
                        <Link to='/createPlanet' >Create Planet </Link>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <Table responsive striped>
                            {/* <thead>
                                <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                {planets}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        data:state.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onGetData: (url, props) => dispatch(repositoryActions.getData(url,props))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (PlanetList);
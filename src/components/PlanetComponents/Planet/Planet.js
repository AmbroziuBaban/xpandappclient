import React, { useState, useEffect } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { Button } from 'react-bootstrap';
import  '../Planet/Planet.css';

const redirectToOwnerDetails = (id, history) => {
    history.push('/planetDetails/' + id);
}

const redirectToUpdatePlanet = (id, history) => {
    history.push('/updatePlanet/' + id);
}

const redirectToDeleteOwner = (id, history) => {
    history.push('/deletePlanet/' + id);
}

const defaultImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4Ij48ZGVmcz48c3R5bGU+LmNscy0xIHsgZmlsbDogI2ZmN2Y0OTsgZmlsbC1ydWxlOiBldmVub2RkOyB9PC9zdHlsZT48L2RlZnM+PHBhdGggaWQ9IkFzdHJvbm9teV9BSkFYX2xvYWRlcnMiIGQ9Ik0xMTkuNiA4LjZjLTQuNC00LjUtMTIuMi0xLjItMTQuNyAwLTUuNSAyLTExLjcgNi0xOC44IDExYTQ5LjggNDkuOCAwIDAgMC01Ny42IDEwIDUyLjMgNTIuMyAwIDAgMC05LjcgNTljLTExLjMgMTYuNi0xNC41IDI3LTkuNiAzMmE4IDggMCAwIDAgNiAyLjIgMTkuMyAxOS4zIDAgMCAwIDYuMi0xLjJjNC0xLjUgOS4zLTQuMyAxNS40LTguM2wzLTJhNDkuOCA0OS44IDAgMCAwIDYwLTguOCA1Mi4zIDUyLjMgMCAwIDAgOS02MC44IDEyNi41IDEyNi41IDAgMCAwIDgtMTIuOGM1LjItMTAgNi0xNyAyLjUtMjAuN3pNMTUgMTE1LjJjLS40LTEuMy41LTcgOC41LTE5LjNhNTEuNSA1MS41IDAgMCAwIDEwIDEwLjRDMjAgMTE1LjQgMTUuNyAxMTUgMTUgMTE1em0yNS0xM2E0My44IDQzLjggMCAwIDEtNS44LTUgNDQuNSA0NC41IDAgMCAxIDAtNjJBNDIuNSA0Mi41IDAgMCAxIDk1IDM1YTQzLjggNDMuOCAwIDAgMSA1IDZjLTIgMy00LjUgNi4yLTcgOS40YTEzLjIgMTMuMiAwIDAgMC01LjctMS4zIDEzLjcgMTMuNyAwIDAgMC0xMy41IDE0IDE0IDE0IDAgMCAwIDIgN2wtMyAzQTI5NiAyOTYgMCAwIDEgNDAgMTAyem01My40LTM5YTYgNiAwIDEgMS02LTYuMyA2IDYgMCAwIDEgNiA2ek05NSA5N2E0Mi41IDQyLjUgMCAwIDEtNDggOSAzMTIgMzEyIDAgMCAwIDMxLTI4cTEuNi0xLjQgMy0zYTEzLjIgMTMuMiAwIDAgMCA2LjMgMS42QTEzLjcgMTMuNyAwIDAgMCAxMDAuOCA2M2ExNCAxNCAwIDAgMC0yLjItNy41cTMtMy41IDUuNS03QTQ0LjYgNDQuNiAwIDAgMSA5NSA5N3ptMTQuOC03MC43Yy0xLjQgMi42LTMgNS40LTUgOC4zYTUxLjQgNTEuNCAwIDAgMC0xMS4yLTExIDkxIDkxIDAgMCAxIDEzLjItNy44YzUtMi4zIDctMiA3LjUtMiAwIC42LjQgMy43LTQuNSAxMi41eiIgZGF0YS1uYW1lPSJBc3Ryb25vbXkgQUpBWCBsb2FkZXJzIiBjbGFzcz0iY2xzLTEiLz48L3N2Zz4='
const imageUrl = 'https://faviconer.net/img/categories-icons/planets-astronomy-animated-colored.svg'
const defaultDescription = "No description yet :/ "

const planet = (props) =>{

    return(
        <Aux>
            <tr className='planetItem' onClick={() => redirectToOwnerDetails(props.planet.id, props.history)}>
                <td><img className='planetImage'  src={props.planet.image? props.planet.image : defaultImage}></img>
                    <p>{props.planet.name}</p></td>
                
                <td>{props.planet.descriptionId? props.planet.descriptionId : defaultDescription}</td>
                <td>{props.planet.description}</td>
                <td>{props.planet.status}</td>
                <td>
                    <Button onClick={() => redirectToOwnerDetails(props.planet.id, props.history)}>Details</Button>  
                    <Button bssStyle="succes" onClick={() => redirectToUpdatePlanet(props.planet.id, props.history)}>Update</Button>
                </td>
            </tr>
        </Aux>
    )
}


export default planet;
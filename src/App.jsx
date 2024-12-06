import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css'
import Card from './components/Card'
import ListGroup from './components/ListGroup'
import ReactPropTypes from 'react'

function App() {


  return (
    <>
      <ListGroup />
      <h1 className="h1"> La Tunisie est fiere de ses champions</h1><br />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Card
          nom="Ons jabeur"
          qualif="Joueuse de tennis"
          imageSrc="./public/OJ.png"
          age={30}
          isActif={true}
        />
        <Card
          nom="Ali Maaloul"
          qualif="Footballeur"
          imageSrc="./public/AM.png"
          age={35}
          isActif={true}
        />
        <Card
          nom="Haykel Meganem"
          qualif="Handballeur"
          imageSrc="./public/HM.png"
          age={45}
          isActif={true}
        />
        <Card
          nom="Raoua Tlili"
          qualif="Athléte handisport"
          imageSrc="./public/RT.png"
          age={34}
          isActif={true}
        />
        <Card
          nom="Ahmed Ayoub Hafnaoui"
          qualif="Mageur"
          imageSrc="./public/AAY.png"
          age={21}
          isActif={true}
        />
        <Card
          nom="Habibe Ghribi"
          qualif="Athléte"
          imageSrc="./public/HG.png"
          age={39}
          isActif={true}
        />
      </div>



    </>
  )
}

export default App;

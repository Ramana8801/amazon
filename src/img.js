import react from "react";
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";
function Img(){
    return(
        
            
        <CardGroup className="row">
            
  <Card  >
    <Card.Img  src="http://media1.santabanta.com/full1/Cricket/Mahendra%20Singh%20Dhoni/mahendra-singh-dhoni-29v.jpg "/>
    
    <Card.Body className="imgComponents">
      <Card.Title >MS Dhoni</Card.Title>
      <Card.Text >
        cool captain
      </Card.Text>
    </Card.Body>
    
    </Card>
    

  <Card className="column">
    <Card.Img  src="https://www.tollywood.net/wp-content/uploads/2020/06/Balakrishna-says-It%E2%80%99s-wrong-to-use-position-as-a-star-to-endorse-brands.jpg" />
    <Card.Body className="imgComponents">
      <Card.Title >Balakrishna</Card.Title>
      <Card.Text>
        Top hero
      </Card.Text>
    </Card.Body>
    </Card>

  <Card className="columns">
    <Card.Img   src="http://1.bp.blogspot.com/-XfsG8-Lw3OU/TZIPrI3JXQI/AAAAAAAABu4/GPoWgH6hhKE/s1600/Mahesh+Babu+6.jpg" />
    <Card.Body className="imgComponents">
      <Card.Title>Mahesh babu</Card.Title>
      <Card.Text>
        Superstar
      </Card.Text>
    </Card.Body>
    </Card>
  

  <Card >
    <Card.Img   src="https://tse3.mm.bing.net/th?id=OIP.aso1oekKoLQ8OjtNx7zCWQHaFj&pid=Api&P=0&w=209&h=157" />
    <Card.Body className="imgComponents">
      <Card.Title>Aravid swamy</Card.Title>
      <Card.Text>
       Top  villain 
      </Card.Text>
    </Card.Body>
    </Card>
   
 
</CardGroup>



    )
}
export default Img;
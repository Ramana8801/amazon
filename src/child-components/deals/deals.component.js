import React from "react";


import {Row,Container,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            categories:[
                {
                
                    image:<img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg" width="100" height="100" />

                },
                {
                   
                    image:<img src="https://tse4.mm.bing.net/th?id=OIP.blkdM36ANf-3mqZRrcHH0gHaFj&pid=Api&P=0&w=227&h=171" width="100" height="100"/>,


                },
                {
                   
                    image:<img src="https://www.marguery-villas-resort.com/wp-content/uploads/2018/12/fruits-tropicals-marguery-exclusive-villas.jpg" width="100" height="100"/>


                },
                {
                    
                    image:<img src="https://www.sonomamag.com/biteclub/wp-content/uploads/2018/05/HUCHOCOLATEFB.jpg" width="100" height="100"/>

                },
                {
                    image:<img src="http://3.bp.blogspot.com/-PTMcU3iDimQ/UFAkJx8jQOI/AAAAAAAADEk/67ZUjOWUIrU/s1600/rose+sybmolism.jpg" width="100" height="100"/>

                },
                {
                    
                    image:<img src="https://www.goodfreephotos.com/albums/other-landscapes/lake-landscape-under-purple-dusk.jpg" width="100" height="100"/>
                }
            ]
        }
    }
    render(){
        return(
            <div className="wrapper">
               <h1 align="center" >Deals</h1>
                {
                    
                    <Container className="cols">
                    <Row className="col">
                      <Col id="one">{this.state.categories[0].image} <p>upto 50% off on dairy</p></Col>
                      <Col id="two ">{this.state.categories[1].image}upto 25% off on veggies</Col>
                      <Col id="three">{this.state.categories[2].image}upto 50% off on fruits</Col>
                       <Col id="four">{this.state.categories[3].image} upto 50% off on chocolate</Col>
                      <Col id="five ">{this.state.categories[4].image} upto 50% off on flower</Col>
                      <Col id="six">{this.state.categories[5].image} upto 35% off on photos </Col>
                      </Row>
                   
                    
                  </Container>
                }
            </div>
        )
    }
}
export default Directory;
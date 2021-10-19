import React from "react";


import {Row,Container,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            categories:[
                {
                    name:"dairy",
                    id:1,
                    linkUrl:"/dairy",
                    image:<img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg" width="300" height="300"/>

                },
                {
                    name:"veggies",
                    id:2,
                    linkUrl:"/veggies",
                    image:<img src="https://tse4.mm.bing.net/th?id=OIP.blkdM36ANf-3mqZRrcHH0gHaFj&pid=Api&P=0&w=227&h=171" width="300" height="300"/>,


                },
                {
                    name:"fruits",
                    id:3,
                    linkUrl:"/fruits",
                    image:<img src="https://www.marguery-villas-resort.com/wp-content/uploads/2018/12/fruits-tropicals-marguery-exclusive-villas.jpg" width="300" height="300"/>


                },
                {
                    name:"chocolate",
                    id:4,
                    linkUrl:"/chocolate",
                    image:<img src="https://www.sonomamag.com/biteclub/wp-content/uploads/2018/05/HUCHOCOLATEFB.jpg" width="300" height="300"/>

                },
                {
                    name:"electronics",
                    id:5,
                    linkUrl:"/electronics",image:<img src="https://tse1.mm.bing.net/th?id=OIP.N070umBH7sv2ovULu9DajQHaFN&pid=Api&P=0&w=262&h=185" width="300" height="300"/>

                },
                {
                    name:"garments",
                    id:6,
                    linkUrl:"/garments",
                    image:<img src="http://iyermart.in/images/knittedgarment.png" width="300" height="300"/>
                }
            ]
        }
    }
    render(){
        return(
            <div className="directory-component">
               
                {
                    <Container className="cols">
                    <Row className="col">
                      <Col>{this.state.categories[0].image} dairy</Col>
                      <Col>{this.state.categories[1].image} veggies</Col>
                      <Col>{this.state.categories[2].image} fruits</Col>
                      <br></br>
                   <Row>
                      <Col>{this.state.categories[3].image}chocolate</Col>
                      <Col>{this.state.categories[4].image}flowers</Col>
                      <Col>{this.state.categories[5].image}photo</Col>
                      </Row>
                    </Row>
                    
                  </Container>
                }
            </div>
        )
    }
}
export default Directory;
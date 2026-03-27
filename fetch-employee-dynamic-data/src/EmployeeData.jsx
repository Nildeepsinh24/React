import React from "react";
import { Container,Row,Button} from 'react-bootstrap';
import data from './Data';
function EmployeeData()
{
    return (
        <>
        <Container className="mt-5 p-5 mx-auto">
            <h1>Get All Employee Data <Button className="btn btn-md btn-danger text-white float-end">Export in Excel</Button></h1>
            <hr />
            <Row>
                {data && data.map((item,index) => (
                    <div className="col-md-3 gap-5 m-2 mt-5" key={item.id ?? index}>
                        <img src={item.photo} alt={item.name} className="img-fluid rounded-circle" />
                        <h3>{item.name}</h3>
                        <p>{item.email}</p>
                        <p>Age: {item.age}</p>
                    </div>
                ))}
            </Row>
        </Container>
        </>
    )
}
export default EmployeeData;
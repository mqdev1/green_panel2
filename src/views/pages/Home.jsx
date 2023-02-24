import { Button, ButtonGroup, Card, Col, Container, Row, Table } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <h1 className="fs-6">الرئيسية</h1>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Card>
                            <Card.Header>جزء اول</Card.Header>
                            <Card.Body >
                                <img src="https://media.istockphoto.com/id/1325763688/photo/web-design-development-design-studio-creative-process-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=y-KRAivlW6VMvZzzMqt9ngerUIIEu4gP8HLMONKNO4A=" className="img-fluid" alt="aa" width={'100%'} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>جزء ثاني</Card.Header>
                            <Card.Body>
                                <Table bordered hover size='sm'>
                                    <thead>
                                        <tr>
                                            <th>اسم المستخدم</th>
                                            <th>اميل المستخدم</th>
                                            <th>خيارات</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                محمود قاسم
                                            </td>
                                            <td>
                                                email1@gmail.com
                                            </td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="danger" size="sm">حذف</Button>
                                                    <Button variant="warning" size="sm">صلاحيات</Button>
                                                    <Button variant="primary" size="sm">تعديل</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                محمود قاسم
                                            </td>
                                            <td>
                                                email1@gmail.com
                                            </td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="danger" size="sm">حذف</Button>
                                                    <Button variant="warning" size="sm">صلاحيات</Button>
                                                    <Button variant="primary" size="sm">تعديل</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                محمود قاسم
                                            </td>
                                            <td>
                                                email1@gmail.com
                                            </td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="danger" size="sm">حذف</Button>
                                                    <Button variant="warning" size="sm">صلاحيات</Button>
                                                    <Button variant="primary" size="sm">تعديل</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                محمود قاسم
                                            </td>
                                            <td>
                                                email1@gmail.com
                                            </td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="danger" size="sm">حذف</Button>
                                                    <Button variant="warning" size="sm">صلاحيات</Button>
                                                    <Button variant="primary" size="sm">تعديل</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                محمود قاسم
                                            </td>
                                            <td>
                                                email1@gmail.com
                                            </td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="danger" size="sm">حذف</Button>
                                                    <Button variant="warning" size="sm">صلاحيات</Button>
                                                    <Button variant="primary" size="sm">تعديل</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                محمود قاسم
                                            </td>
                                            <td>
                                                email1@gmail.com
                                            </td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="danger" size="sm">حذف</Button>
                                                    <Button variant="warning" size="sm">صلاحيات</Button>
                                                    <Button variant="primary" size="sm">تعديل</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                محمود قاسم
                                            </td>
                                            <td>
                                                email1@gmail.com
                                            </td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="danger" size="sm">حذف</Button>
                                                    <Button variant="warning" size="sm">صلاحيات</Button>
                                                    <Button variant="primary" size="sm">تعديل</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                محمود قاسم
                                            </td>
                                            <td>
                                                email1@gmail.com
                                            </td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="danger" size="sm">حذف</Button>
                                                    <Button variant="warning" size="sm">صلاحيات</Button>
                                                    <Button variant="primary" size="sm">تعديل</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                محمود قاسم
                                            </td>
                                            <td>
                                                email1@gmail.com
                                            </td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="danger" size="sm">حذف</Button>
                                                    <Button variant="warning" size="sm">صلاحيات</Button>
                                                    <Button variant="primary" size="sm">تعديل</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card className="mb-1">
                            <Card.Header>جزء ثالث</Card.Header>
                            <Card.Body className="p-0">
                                <img src="https://via.placeholder.com/1200" className="img-fluid" alt="aa" width={'100%'} />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>جزء ثالث</Card.Header>
                            <Card.Body className="p-0">
                                <img src="https://via.placeholder.com/1200" className="img-fluid" alt="aa" width={'100%'} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
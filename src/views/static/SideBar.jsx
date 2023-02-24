
import { CloseOutlined, MessageOutlined, NotificationsOutlined, PaymentOutlined, Person2Outlined, SearchOutlined } from '@mui/icons-material';
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const SideBar = (props) => {
    return (
        <>
            <Navbar bg="dark">
                <Nav className="me-auto">
                    <Nav className="d-flex justify-center align-items-center position-relative">
                        <Form.Control placeholder="بحث ..." className="ps-5 me-4" />
                        <SearchOutlined className=" position-absolute start-0 ms-3 text-muted" />
                    </Nav>
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            className='custom-mobile-dropdown'
                            title={<NotificationsOutlined className="me-2 mt-1" />}
                            menuVariant="dark"
                        >
                            <NavDropdown.ItemText
                                className="p-0 m-0"
                                style={{
                                    height: " 367px",
                                    overflow: "hidden",
                                }}
                            >
                                <label className="pe-3 ps-3">الاشعارات</label>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "350px",
                                        height: "300px",
                                        overflow: "hidden",
                                        overflowY: "auto",
                                        zIndex: 3000
                                    }}
                                    className="p-2 ps-3 pe-3"
                                >
                                    <div>
                                        <h6 className="fs-6">عنصر اول</h6>
                                        <p className="fs-6">
                                            <small>
                                                الفقرات هي اللبنات الأساسية للأوراق. يعرّف العديد من
                                                الطلاب الفقرات من حيث الطول: الفقرة عبارة عن مجموعة
                                                من خمس جمل على الأقل ، والفقرة بطول نصف صفحة ، إلخ.
                                            </small>
                                        </p>
                                    </div>
                                    <hr />
                                    <div>
                                        <h6 className="fs-6">عنصر اول</h6>
                                        <p className="fs-6">
                                            <small>
                                                الفقرات هي اللبنات الأساسية للأوراق. يعرّف العديد من
                                                الطلاب الفقرات من حيث الطول: الفقرة عبارة عن مجموعة
                                                من خمس جمل على الأقل ، والفقرة بطول نصف صفحة ، إلخ.
                                            </small>
                                        </p>
                                    </div>

                                    <hr />
                                    <div>
                                        <h6 className="fs-6">عنصر اول</h6>
                                        <p className="fs-6">
                                            <small>
                                                الفقرات هي اللبنات الأساسية للأوراق. يعرّف العديد من
                                                الطلاب الفقرات من حيث الطول: الفقرة عبارة عن مجموعة
                                                من خمس جمل على الأقل ، والفقرة بطول نصف صفحة ، إلخ.
                                            </small>
                                        </p>
                                    </div>
                                </div>
                                <label className="pe-2 ps-2 m-0 mt-1">
                                    <Nav.Link href="#">عرض الاشعارات</Nav.Link>
                                </label>
                            </NavDropdown.ItemText>
                        </NavDropdown>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={
                                <img
                                    src="https://via.placeholder.com/32"
                                    className="m-0 ms-2 rounded-circle"
                                    alt=""
                                />
                            }
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                <Person2Outlined style={{ paddingInlineEnd: 4 }} />
                                ملفي الشخصي
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <PaymentOutlined style={{ paddingInlineEnd: 4 }} />
                                اعدادات الدفع
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                <NotificationsOutlined style={{ paddingInlineEnd: 4 }} />
                                تنبيهات النظام
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                <MessageOutlined style={{ paddingInlineEnd: 4 }} />
                                الرسائل
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                <CloseOutlined style={{ paddingInlineEnd: 4 }} />
                                خروج
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Nav>
            </Navbar>
        </>
    )
}

export default SideBar;

import { HomeOutlined, PageviewOutlined, PeopleAltOutlined } from '@mui/icons-material';
import { React } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StaticNavBar = (props) => {
    return (
        <>
            <div className="sidebar sidebar-mobile">
                <Navbar className="flex-column" fixed={true}>
                    <Nav.Link className="d-flex mb-3">
                        <img
                            src={
                                "https://img.icons8.com/external-others-rabbit-jes/512/external-green-indoor-plant-flat-others-rabbit-jes.png"
                            }
                            alt=""
                            width="80"
                            className="img-fluid mx-auto"
                        />
                    </Nav.Link>
                    <label className="w-100 text-muted pe-3">لوحة القيادة</label>
                    <Link className="text-right link-green-hover nav-link" to='/'>
                        <HomeOutlined className="ms-1" />
                        الرئيسية
                    </Link>
                    <Link className="text-right link-green-hover nav-link" to='/page1'>
                        <PeopleAltOutlined className="ms-1" />
                        المستخدمين
                    </Link>
                    <Link className="text-right link-green-hover nav-link" to='/page2'>
                        <PeopleAltOutlined className="ms-1" />
                        الموظفين
                    </Link>
                    <label className="w-100 text-muted pe-3 mt-2">الادوات</label>
                    <Link className="text-right link-green-hover nav-link" to='/blank'>
                        <PageviewOutlined className="ms-1" />
                        صفحة فارغة
                    </Link>
                </Navbar>
            </div>
        </>
    )
}

export default StaticNavBar;
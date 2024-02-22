'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIcon } from "widgets";

// import required data files
import CctvStats from "data/dashboard/CctvStatsData";
import CctvDetails from "sub-components/dashboard/ActiveProjects";

const Home = () => {
    return (
        <Fragment>
            <div className="bg-primary pt-10 pb-21"></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0  text-white">CCTV Dashboard</h3>
                                </div>
                                <div>
                                    <Link href="#" className="btn btn-white">Add New CCTV</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {CctvStats.map((item, index) => {
                        return (
                            <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>
                                <StatRightTopIcon info={item} />
                            </Col>
                        )
                    })}
                </Row>

                {/* Active Projects  */}
                <CctvDetails />

            </Container>
        </Fragment>
    )
}
export default Home;

import React from 'react';
import { Col, Container, NavLink, Row } from "reactstrap";
import PageTitle from "./PageTitle";
import { Link } from "react-router";

export default (props) => {
  return (
    <Container className="content">
      <PageTitle title="Components list" className={"h1"}/>
      <Row>
        <Col md={4}>
          <ul>
            <li>
              <NavLink tag={Link} to="components/alerts/">Alerts <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/buttons/">Buttons <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/button-dropdown/">Button dropdown <i
                className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/button-group/">Button group <i
                className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/badge/">Badge <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/breadcrumbs/">Breadcrumbs <i
                className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/card/">Card
                <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/carousel/">Carousel</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/collapse/">Collapse</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/dropdowns/">Dropdowns <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/empty-states/">Empty states</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/links-external/">Error messages</NavLink>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <ul>

            <li>
              <NavLink tag={Link} to="components/fade/">Fade</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/form/">Form</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/input-group/">Input group</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/jumbotron/">Jumbotron <i
                className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/layout/">Layout</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/list-group/">List group <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/links-external/">Links(external) <i
                className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/media/">Media</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/modals/">Modals <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/navbar/">Navbar <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/navs/">Navs <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/pagination/">Pagination <i className="far fa-check-circle"/></NavLink>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <ul>
            <li>
              <NavLink tag={Link} to="components/progress/">Progress</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/popovers/">Popovers <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/spinners/">Spinners</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/side-panels/">Side panels</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/tables/">Tables</NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/tabs/">Tabs <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/tables/">Toasts
                <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/tooltips/">Tooltips <i className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="utilities/typography/">Typography <i
                className="far fa-check-circle"/></NavLink>
            </li>
            <li>
              <NavLink tag={Link} to="components/query-experience/">Query experience</NavLink>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

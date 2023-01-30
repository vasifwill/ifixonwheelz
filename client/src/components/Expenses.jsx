import React from 'react';
import { browserHistory } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Navbar, Row, Col } from 'react-bootstrap';
import { withBasename } from "../utils/params";

export default class Expenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: [{ Toms: 23423, jack: 423423 }],
            startprice: '',
            endprice: '',
            startdate: '',
            enddate: '',
        }
    }


    componentWillMount() {

        const currentUser = this.props.user;
        const loginWithBasename = withBasename('/login');

        try {
            if (currentUser.status === 200) {
                const user = currentUser.user;
                this.setState({ username: user.username });
                localStorage.setItem('user', JSON.stringify(user));
            }

            if (localStorage.getItem('user')) {
                this.setState({ username: JSON.parse(localStorage.getItem('user')).username });
                this.props.mappedexpenseGetList();
            } else {
                browserHistory.push(loginWithBasename);
            }
        } catch (err) {
            browserHistory.push(loginWithBasename);
        }
    }

    filteronChange = (e) => {
    	this.state[e.target.name] = e.target value
    }

    filteronSubmit (e) {
        const { startprice, endprice, startdate, enddate } = this.state;
        const data = new FormData();
        data.append('flag', e.target.name);
        data.append('startprice', startprice);
        data.append('endprice', endprice);
        data.append('startdate', startdate);
        data.append('enddate', enddate);
        this.props.mappedexpenseFilterResult(data);
    }

    render() {

        const options = {
            page: 3,
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }],
            sizePerPage: 10,
            pageStartIndex: 1,
            paginationSize: 3,
            prePage: 'Prev',
            nextPage: 'Next',
            firstPage: 'First',
            lastPage: 'Last',
            paginationShowsTotal: this.renderShowsTotal,
        };

        function indexN(cell, row, enumObject, index) {
            return (<div>{index + 1}</div>)
        }

        function priceFormatter(cell, row) {
            return `<i class='glyphicon glyphicon-usd'></i> ${cell}`;
        }

        function deleteFormatter(cell, row) {
            return "<a><i  name='delete' class='fa fa-trash'></i></a>";
        }

        const IO_state = {
            0: 'In',
            1: 'Out'
        };

        function enumFormatter(cell, row, enumObject) {
            return enumObject[cell];
        }

        function dateFormatter(cell, row) {
            const date = new Date(cell);
            return `${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + (date.getDate())).slice(-2)}/${date.getFullYear()}`;
        }

        function columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
            return 'column' + rowIdx;
        }

        let style = {
            backgroundColor: "#2b2b2be6"
        }


        return (
            <div className="expenseList">

                <Navbar style={style}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href={ withBasename('/') }>Home</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>

                <div className="Home">
                    <p>&nbsp;</p><br />
                    <h1>Expense List</h1>
                    <div className="table-content">
                        <h3 id="main">User : {this.state.username}</h3>
                        <div className="filter">
                            <h4>Filter Content</h4>
                            <Row className="clearfix">
                                <Col xs={5} >
                                    <lable> Price : </lable>
                                    <input type="number" onChange={this.filteronChange} name="startprice" className="start-price" placeholder="start price" />
                                    <span>&nbsp;to&nbsp;</span>
                                    <input type="number" onChange={this.filteronChange} name="endprice" className="end-price" placeholder="end price" />
                                    <span>&nbsp;&nbsp;</span>
                                    <button className="price-filter" name="price" onClick={this.filteronSubmit}>apply</button>
                                </Col>
                                <Col xs={5} >
                                    <lable> Date : </lable>
                                    <input type="date" onChange={this.filteronChange} name="startdate" className="start-date" />
                                    <span>&nbsp;to&nbsp;</span>
                                    <input type="date" onChange={this.filteronChange} name="enddate" className="end-date" />
                                    <span>&nbsp;&nbsp;</span>
                                    <button className="date-filter" name="date" onClick={this.filteronSubmit} >apply</button>
                                </Col>
                            </Row>
                        </div>
                        <h4>Expense List</h4>
                        <BootstrapTable data={this.props.expenseArray.expenses}
                            options={options}
                            pagination
                        >
                            <TableHeaderColumn dataField="any" dataFormat={indexN} dataAlign='center' width='5%'>No</TableHeaderColumn>
                            <TableHeaderColumn dataField='title' isKey={true} headerAlign='center' columnClassName={columnClassNameFormat}>Title</TableHeaderColumn>
                            <TableHeaderColumn dataField='amount' dataFormat={priceFormatter} dataSort={ true } dataSort={ true } headerAlign='center' dataAlign='center'>Amount</TableHeaderColumn>
                            <TableHeaderColumn dataField='status' dataFormat={enumFormatter} dataSort={ true } dataSort={ true } formatExtraData={IO_state} headerAlign='center' dataAlign='center'>In/Out</TableHeaderColumn>
                            <TableHeaderColumn dataField='description' headerAlign='center'>Description</TableHeaderColumn>
                            <TableHeaderColumn dataField='createdAt' dataFormat={dateFormatter}  dataSort={ true }headerAlign='center' dataAlign='center'>Date</TableHeaderColumn>
                            <TableHeaderColumn dataField='active' dataFormat={deleteFormatter} headerAlign='center' dataAlign='center' width='7%'>Delete</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div>

            </div>
        );
    }
}

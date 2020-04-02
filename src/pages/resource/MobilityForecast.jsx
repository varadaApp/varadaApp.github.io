import React from 'react';
import {
  Card,
  Typography,
  Alert,
  Icon,
  Table,
  Button,
  Select,
  Checkbox,
  DatePicker,
  Col,
  Row,
  Divider,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Reporting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runReport: '',
      selectedDateRange: '',
      dataSource: [
        {
          key: '0',
          month: 'February',
          employee: 'Enoch Hector',
          positionTitle: '27',
          currentStatus: '3',
          currentCareerTrack: '0',
        },
        {
          key: '1',
          month: 'February',
          employee: 'February',
          positionTitle: '27',
          currentStatus: '3',
          currentCareerTrack: '0',
        },
      ],
    };
    this.columns = [
      {
        title: 'Month',
        dataIndex: 'month',
      },
      {
        title: 'Employee',
        dataIndex: 'employee',
      },
      {
        title: 'Position Title',
        dataIndex: 'positionTitle',
      },
      {
        title: 'Current Status',
        dataIndex: 'currentStatus',
      },
      {
        title: 'Current Career Track',
        dataIndex: 'currentCareerTrack',
      },
    ];
    this.handleDateRangeSelect = this.handleDateRangeSelect.bind(this);
    this.handleRunReport = this.handleRunReport.bind(this);
  }

  handleDateRangeSelect(value) {
    this.setState({ selectedDateRange: value });
  }

  handleRunReport() {
    this.setState({ runReport: 'run' });
  }

  render() {
    const { dataSource } = this.state;
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Mobility Forecast</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <div className="attrition-header-filter-container">
            <h2 style={{ fontSize: '22px', color: 'black' }}>
              What would you like this report to contain?
            </h2>
            <div style={{ display: 'flex' }}>
              <Checkbox defaultChecked={true}>Employee</Checkbox>
              <Checkbox defaultChecked={true}>Position Title</Checkbox>
              <Checkbox defaultChecked={true}>Current Status</Checkbox>
              <Checkbox defaultChecked={true}>Current Career Track</Checkbox>
            </div>
          <h2 style={{ fontSize: '22px', color: 'black' }}>When and what should be included?</h2>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a Date Range"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onSelect={this.handleDateRangeSelect}
          >
            <Option value="0">&nbsp;</Option>
            <Option value="1">Annually</Option>
            <Option value="2">Monthly</Option>
            <Option value="3">Quarter</Option>
            <Option value="4">Custom Date Range</Option>
          </Select>
          <div style={this.state.selectedDateRange === '1' ? {} : { display: 'none' }}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a Year"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onSelect={this.handleDateRangeSelect}
            >
              <Option value="0">&nbsp;</Option>
              <Option value="1">2020</Option>
              <Option value="2">2019</Option>
              <Option value="3">2018</Option>
              <Option value="4">2017</Option>
            </Select>
          </div>
          <div style={this.state.selectedDateRange === '2' ? {} : { display: 'none' }}>
            <MonthPicker placeholder="Select month" format={'MM/YYYY'} />
          </div>
          <div style={this.state.selectedDateRange === '3' ? {} : { display: 'none' }}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a Quarter"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onSelect={this.handleDateRangeSelect}
            >
              <Option value="0">&nbsp;</Option>
              <Option value="1">1st Quarter</Option>
              <Option value="2">2nd Quarter</Option>
              <Option value="3">3rd Quarter</Option>
              <Option value="4">4th Quarter</Option>
            </Select>
          </div>
          <div style={this.state.selectedDateRange === '4' ? {} : { display: 'none' }}>
            <RangePicker format={'MM/DD/YYYY'} />
          </div>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a Program"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="0">&nbsp;</Option>
            <Option value="1">AWS Technical Support Program</Option>
            <Option value="2">DoD Space Program</Option>
            <Option value="3">DHS Satellite Network</Option>
            <Option value="4">DoJ Networks</Option>
            <Option value="5">DoS Nuclear Defense System</Option>
            <Option value="6">FBI Case Management System</Option>
          </Select>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a Employee"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="0">&nbsp;</Option>
            <Option value="1">Dorris Vaught</Option>
            <Option value="2">Kris Shotwell</Option>
            <Option value="3">Long Hudspeth</Option>
            <Option value="4">Vincenzo Whiteley</Option>
            <Option value="5">Reyes Holmes</Option>
            <Option value="6">Deedra Bosch</Option>
            <Option value="7">Sharyn Ballard</Option>
            <Option value="8">Romeo Thompson</Option>
            <Option value="9">Chere Nance</Option>
            <Option value="10">Darryl Merryman</Option>
          </Select>
          <Select
            showSearch
            placeholder="Select a Group"
            style={{ width: 200 }}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="0">&nbsp;</Option>
            <Option value="1">Employee</Option>
            <Option value="2">Applied to Other JRs</Option>
            <Option value="3">Certification Attainment</Option>
            <Option value="4">Completion of Different Career Track</Option>
            <Option value="5">Losing Coverage</Option>
          </Select>
          <div style={{display: 'flex'}}>
            <Checkbox>Interested in Growth</Checkbox>
            <Checkbox>Losing Coverage</Checkbox>
            <Checkbox>Location Change</Checkbox>
          </div>
          <br />
          <Button type="primary" onClick={this.handleRunReport}>
            Run Report
          </Button>
          </div>
          <br />
          <div style={this.state.runReport === 'run' ? {} : { display: 'none' }}>
            <h1>Department of Defense Space Program Mobility Report</h1>
            <Button type="primary" size="small">
              Export to CSV
            </Button>
            <Button type="primary" size="small">
              Export to PDF
            </Button>
            <Table
              style={{ width: 800 }}
              bordered
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </div>
          <p
            style={{
              textAlign: 'center',
              marginTop: 24,
            }}
          >
            We <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" spin /> Sidney
          </p>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default Reporting;

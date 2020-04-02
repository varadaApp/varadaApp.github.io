import React from 'react';
import { Card, Icon, Modal, Steps, Divider, Button, Row, Col, Descriptions } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ReactTable from 'react-table';
import { employeesWithSelectedCareerTrackData } from '../Utils';

// Import React Table
import 'react-table/react-table.css';

class EmployeesCareerTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: employeesWithSelectedCareerTrackData(),
      selectedCareerTrackVisible: false,
      selectedCareerTrackLoading: false,
      recommendedCareerTrackVisible: false,
      recommendedCareerTrackLoading: false,
    };
    this.showRow = this.showRow.bind(this);
  }

  handleOriginal(value) {
    console.log('handleOriginal', value);
  }

  showSelectedCareerTrackModal = () => {
    this.setState({
      selectedCareerTrackVisible: true,
    });
  };

  handleSelectedCareerTrackOk = () => {
    this.setState({ selectedCareerTrackLoading: true });
    setTimeout(() => {
      this.setState({ selectedCareerTrackLoading: false, selectedCareerTrackVisible: false });
    }, 500);
  };

  handleSelectedCareerTrackCancel = () => {
    this.setState({ selectedCareerTrackVisible: false });
  };

  showRecommendedCareerTrackModal = () => {
    this.setState({
      recommendedCareerTrackVisible: true,
    });
  };

  handleRecommendedCareerTrackOk = () => {
    this.setState({ recommendedCareerTrackLoading: true });
    setTimeout(() => {
      this.setState({ recommendedCareerTrackLoading: false, recommendedCareerTrackVisible: false });
    }, 500);
  };

  handleRecommendedCareerTrackCancel = () => {
    this.setState({ recommendedCareerTrackVisible: false });
  };

  // eslint-disable-next-line class-methods-use-this
  showRow(row) {
    const { info } = Modal;
    console.log('modalrow', row);
    info({
      style: { top: 20 },
      width: 1200,
      title: row.employeeName,
      content: (
        <div>
          <p>Location: Washington, DC</p>
          <p>Position Title: {row.position}</p>
          <p>Career Track: {row.careerTrackName}</p>
          <p>Career Track Tier: {row.careerTrackTier}</p>
          <div style={row.employeeName === 'Sharyn Ballard' ? {} : { display: 'none' }}>
            <Divider orientation="left">
              <strong>
                Primary Selected Career Track: System Engineer Tier 2 (Program: Department of
                Homeland Security Network)
              </strong>
            </Divider>
            Open Positions Applied To:
            <br />
            Splunk System Engineer
            <br />
            Job Requisition #14567
            <br />
            PM:Clarence Hodson
            <br />
            <br />
            <a onClick={this.showSelectedCareerTrackModal}>Current Percentage Complete: 25%</a>
            <Descriptions
              layout="vertical"
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              size="small"
            >
              <Descriptions.Item label="Trainings">
                System Admin Level 3 Training -{' '}
                <span class="in-progress">
                  Training Scheduled
                  <Icon type="calendar" theme="outlined" />
                </span>
                <br />
                Windows Server Admin Level 3 Training -{' '}
                <span class="in-progress">
                  Training in Progress
                  <Icon type="sync" spin />
                </span>
                <br />
                {/* Advanced Agile Training-{' '}
                <span class="completed">
                  Training Complete
                  <Icon type="check-circle" theme="outlined" />
                </span> */}
              </Descriptions.Item>
              <Descriptions.Item label="Certifications">
                VMWare -{' '}
                <span class="attention">
                  Certification Recently Shown Interest, Needs Action
                  <Icon type="warning" theme="filled" />
                </span>
                <br />
                Cloudera CDH4 Admin - Certification Process Not Started
              </Descriptions.Item>
            </Descriptions>
            <Divider orientation="left">
              <strong>
                Recommended Career Track: System Admin Tier 3 (Program: Department of
                Defense Space Program)
              </strong>
            </Divider>
            <a onClick={this.showRecommendedCareerTrackModal}>Current Percentage Complete: 35%</a>
            <Descriptions
              layout="vertical"
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              size="small"
            >
              <Descriptions.Item label="Trainings">
                System Admin Level 3 Training -{' '}
                <span class="in-progress">
                  Training Scheduled
                  <Icon type="calendar" theme="outlined" />
                </span>
                <br />
                Windows Server Admin Level 3 Training -{' '}
                <span class="in-progress">
                  Training in Progress
                  <Icon type="sync" spin />
                </span>
                <br />
                {/* Advanced Agile Training-{' '}
                <span class="completed">
                  Training Complete
                  <Icon type="check-circle" theme="outlined" />
                </span> */}
              </Descriptions.Item>
              <Descriptions.Item label="Certifications">
                VMWare -{' '}
                <span class="attention">
                  Certification Recently Shown Interest, Needs Action
                  <Icon type="warning" theme="filled" />
                </span>
                <br />
                AWS Admin -{' '}
                <span class="completed">
                  Certification Complete
                  <Icon type="check-circle" theme="outlined" />
                </span>
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      ),
      onOk() {},
    });
  }

  render() {
    const {
      data,
      selectedCareerTrackVisible,
      selectedCareerTrackLoading,
      recommendedCareerTrackVisible,
      recommendedCareerTrackLoading,
    } = this.state;
    const { Step } = Steps;
    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Employee Career Track</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <ReactTable
            data={data}
            style={{marginRight: 20}}
            resolveData={data => data.map(row => row)}
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, handleOriginal) => {
                  console.log('A Td Element was clicked!');
                  console.log('it produced this event:', e);
                  console.log('It was in this column:', column);
                  console.log('It was in this row:', rowInfo);
                  console.log('It was in this table instance:', instance);
                  console.log('handleOriginal', handleOriginal);
                  // IMPORTANT! React-Table uses onClick internally to trigger
                  // events like expanding SubComponents and pivots.
                  // By default a custom 'onClick' handler will override this functionality.
                  // If you want to fire the original onClick handler, call the
                  // 'handleOriginal' function.
                  if (handleOriginal) {
                    handleOriginal();
                  }
                },
              };
            }}
            getTrProps={(state, rowInfo, column) => {
              return {
                onClick: (e, handleOriginal) => {
                  console.log('A TR Element was clicked!');
                  console.log('it produced this event:', e);
                  console.log('It was in this column:', column);
                  console.log('It was in this row:', rowInfo);
                  //console.log('It was in this table instance:', instance);
                  console.log('handleOriginal', handleOriginal);
                  // IMPORTANT! React-Table uses onClick internally to trigger
                  // events like expanding SubComponents and pivots.
                  // By default a custom 'onClick' handler will override this functionality.
                  // If you want to fire the original onClick handler, call the
                  // 'handleOriginal' function.
                  this.showRow(rowInfo.original);
                  if (handleOriginal) {
                    handleOriginal();
                  }
                },
              };
            }}
            columns={[
              {
                Header: 'Employee',
                accessor: 'employeeName',
              },
              {
                Header: 'Position Title',
                accessor: 'position',
              },
              {
                id: 'currentCareerTrack',
                Header: 'Current Career Track',
                accessor: d => `${d.careerTrackName}` + ' Tier ' + `${d.careerTrackTier}`,
              },
              {
                Header: 'Desired Career Track',
                accessor: 'desiredCareerTrack',
              },
              {
                Header: 'Current Goal',
                accessor: 'currentGoal',
                minWidth: 130,
              },
              {
                Header: 'Estimated Goal Completion Date',
                accessor: 'desiredCareerTrackCompletionDate',
              },
              // {
              //   Header: 'Employees Current Career Track Timelines',
              //   columns: [
              //     {
              //       Header: 'Employee',
              //       accessor: 'employeeName',
              //     },
              //     {
              //       Header: 'Position Title',
              //       accessor: 'position',
              //     },
              //     {
              //       id: 'currentCareerTrack',
              //       Header: 'Current Career Track',
              //       accessor: d => `${d.careerTrackName}` + ' Tier ' + `${d.careerTrackTier}`,
              //     },
              //     {
              //       Header: 'Desired Career Track',
              //       accessor: 'desiredCareerTrack',
              //     },
              //     {
              //       Header: 'Current Goal',
              //       accessor: 'currentGoal',
              //       minWidth: 130,
              //     },
              //     {
              //       Header: 'Estimated Goal Completion Date',
              //       accessor: 'desiredCareerTrackCompletionDate',
              //     },
              //     // {
              //     //   Header: 'Certifications Progress',
              //     //   accessor: 'inProgressCertifications',
              //     //   Cell: props => (
              //     //     <span>
              //     //       {props.original.inProgressCertifications.name + ' '}
              //     //       {props.original.inProgressCertifications.progress === 'Yellow' && (
              //     //         <span class="in-progress">
              //     //           In Progress
              //     //           <Icon type="sync" spin />
              //     //         </span>
              //     //       )}
              //     //       {props.original.inProgressCertifications.progress === 'Green' && (
              //     //         <span class="completed">
              //     //           Complete
              //     //           <Icon type="check-circle" theme="outlined" />
              //     //         </span>
              //     //       )}
              //     //       {props.original.inProgressCertifications.progress === 'Red' && (
              //     //         <span class="attention">
              //     //           Needs Attention
              //     //           <Icon type="warning" theme="filled" />
              //     //         </span>
              //     //       )}
              //     //     </span>
              //     //   ),
              //     // },
              //     // {
              //     //   Header: 'Trainings Progress',
              //     //   accessor: 'inProgressTrainings',
              //     //   Cell: props => (
              //     //     <span>
              //     //       {props.original.inProgressTrainings.name + ' '}
              //     //       {props.original.inProgressTrainings.progress === 'Yellow' && (
              //     //         <span class="in-progress">
              //     //           In Progress
              //     //           <Icon type="sync" spin />
              //     //         </span>
              //     //       )}
              //     //       {props.original.inProgressTrainings.progress === 'Green' && (
              //     //         <span class="completed">
              //     //           Complete
              //     //           <Icon type="check-circle" theme="outlined" />
              //     //         </span>
              //     //       )}
              //     //       {props.original.inProgressTrainings.progress === 'Red' && (
              //     //         <span class="attention">
              //     //           Needs Attention
              //     //           <Icon type="warning" theme="filled" />
              //     //         </span>
              //     //       )}
              //     //     </span>
              //     //   ),
              //     // },
              //   ],
              // },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
          <p
            style={{
              textAlign: 'center',
              marginTop: 24,
            }}
          >
            We <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" spin /> Sidney
          </p>
        </Card>
        <Modal
          visible={selectedCareerTrackVisible}
          title="System Engineer Tier 2 Progress"
          onOk={this.handleSelectedCareerTrackOk}
          onCancel={this.handleSelectedCareerTrackCancel}
          width={700}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={selectedCareerTrackLoading}
              onClick={this.handleSelectedCareerTrackOk}
            >
              Close
            </Button>,
          ]}
        >
          <Row gutter={[8, 8]}>
            <Col span={24}>
              Overall Expected Completion Date: 5/1/2020
              <br />
              Program: Department of Homeland Security Network
              <br />
              Program Location: Washington, D.C.
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <h3>Systems Engineer Training Level 2</h3>
              <Steps progressDot current={0} direction="vertical" size="small">
                <Step
                  title="Interest Showed"
                  description="2/1/2020: PM contacted. Please schedule your training"
                />
                <Step title="Scheduled" description="Expected completion date: 3/15/2020" />
                <Step title="In Progress" description="Expected completion date: 4/15/2020" />
                <Step title="Completed" description="100%" />
              </Steps>
            </Col>
            <Col span={12}>
              <h3>VMWare Certification</h3>
              <Steps progressDot current={0} direction="vertical">
                <Step title="Interest Showed" description="2/15/2020" />
                <Step title="In Progress" description="Expected completion date: 3/15/2020" />
                <Step title="Schedule Exam" description="Expected completion date: 4/15/2020" />
                <Step title="Exam Passed" description="100%" />
              </Steps>
            </Col>
          </Row>
        </Modal>
        <Modal
          visible={recommendedCareerTrackVisible}
          title="System Admin Tier 3 Progress"
          onOk={this.handleRecommendedCareerTrackOk}
          onCancel={this.handleRecommendedCareerTrackCancel}
          width={600}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={recommendedCareerTrackLoading}
              onClick={this.handleRecommendedCareerTrackOk}
            >
              Close
            </Button>,
          ]}
        >
          <Row gutter={[8, 8]}>
            <Col span={24}>
              Overall Expected Completion Date: 5/1/2020
              <br />
              Program: Department of Defense Space Program
              <br />
              Program Location: Washington, D.C.
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <h3>System Admin Level 3 Training</h3>
              <Steps progressDot current={1} direction="vertical" size="small">
                <Step
                  title="Interest Showed"
                  description="2/1/2020: PM contacted. Please schedule your training"
                />
                <Step title="Scheduled" description="Training scheduled to start on 3/15/2020" />
                <Step title="In Progress" description="Expected completion date: 4/15/2020" />
                <Step title="Completed" description="100%" />
              </Steps>
              <h3>Windows Server Admin Level 3 Training</h3>
              <Steps progressDot current={2} direction="vertical" size="small">
                <Step
                  title="Interest Showed"
                  description="2/1/2020: PM contacted. Please schedule your training"
                />
                <Step title="Scheduled" description="Training scheduled to start on 2/15/2020" />
                <Step title="In Progress" description="Expected completion date: 4/15/2020" />
                <Step title="Completed" description="100%" />
              </Steps>
            </Col>
            <Col span={12}>
              <h3>VMWare Certification</h3>
              <Steps progressDot current={0} direction="vertical">
                <Step title="Interest Showed" description="2/15/2020" />
                <Step title="In Progress" description="Expected completion date: 3/15/2020" />
                <Step title="Schedule Exam" description="Expected completion date: 4/15/2020" />
                <Step title="Exam Passed" description="100%" />
              </Steps>
            </Col>
          </Row>
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default EmployeesCareerTrack;

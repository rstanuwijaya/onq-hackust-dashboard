import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js"

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import boxShadow from "assets/jss/material-dashboard-react.js"

const useStyles = makeStyles(styles);

function QueueCard(props) {
  const classes = useStyles();
  return(
    <div>
      <Card>
        <CardHeader color={props.color} stats icon>
          <CardIcon color={props.color}>
            <div style={{padding:"20px 20px ", textAlign:"center", fontSize:"20px"}}>{props.label}</div>
          </CardIcon>
          <p className={classes.cardCategory}>{props.name}</p>
          <h3 className={classes.cardTitle}>
            1 <small>/100</small>
          </h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
              <Update />
              Estimated time:
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

function AddPop() {
  const classes = useStyles();
  return(
    <GridContainer>
      <GridItem xs={12} sm={6} md={6}>
        <div style={{textAlign:"-webkit-center"}}>
          <Button style={{width:"100%", padding:"30px 30px ", textAlign:"center", fontSize:"20px"}}>Add</Button>
        </div>
      </GridItem>
      <GridItem xs={12} sm={6} md={6}>
        <div style={{textAlign:"-webkit-center"}}>
          <Button style={{width:"100%", padding:"30px 30px ", textAlign:"center", fontSize:"20px"}}>Pop</Button>
        </div>
      </GridItem>
    </GridContainer>
  );
}

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="gray" style={{background:"#e24b4b", padding:"140px"}}>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Current Queue</h4>
              <p className={classes.cardCategory}>Your restaurant is at peak hour!</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> First position has been waiting for 31 minutes
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card chart>
            <CardHeader color="gray" style={{padding:"140px"}}>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>QR Code</h4>
              <p className={classes.cardCategory}>Lastest QR Code</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Enqueued from QR!
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <QueueCard name="Queue A (1-2)" label="A" color="primary" ></QueueCard>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <QueueCard name="Queue B (2-4)" label="B" color="success"></QueueCard>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <QueueCard name="Queue C (5-8)" label="C" color="info"></QueueCard>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <QueueCard name="Queue D (8+)" label="D" color="danger"></QueueCard>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <AddPop />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <AddPop />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <AddPop />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <AddPop />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card chart>
            <CardHeader color="gray" style={{background:"#e24b4b"}}>
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Line"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>
                Customers Chart
              </h4>
              <p className={classes.cardCategory}>Number of customers per hour</p>
            </CardBody>
            {/* <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md>
        </GridItem>
      </GridContainer>
    </div>
  );
}

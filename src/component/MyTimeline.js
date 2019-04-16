import React from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import { IoMdCube } from 'react-icons/io';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { Spinner } from 'reactstrap';

const BlockIcon = () => (
    <IoMdCube style={{width: 24 + 'px', height: 24 + 'px', color: "#000"}}/>
)

const ShowDetail = () => (
    <Button outline size="sm" color="warning">Show Details</Button>
)

class MyTable extends React.Component {
    render(){
        if (this.props.contents.blockNumber){
            return (
                <Table bordered>
                <tbody>
                    <tr>
                        <th scope="row" style={{width: 10 + '%'}}>BlockNumber</th>
                        <td>{this.props.contents.blockNumber}</td>
                    </tr>
                    <tr>
                        <th scope="row">Record Time</th>
                        <td>{this.props.contents.time}</td>
                    </tr>
                    <tr>
                        <th scope="row">Details</th>
                        <td>{this.props.contents.body}</td>
                    </tr>
                </tbody>
                </Table>
            );
        }
        else {
            return (
                <div style={{textAlign: 'center'}}>
                    <Spinner style={{width: '2rem', height: '2rem' }} />
                </div>
            );
        }
    }
}

class MyTimelineEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: {
                blockNumber: null,
                time: null,
                body: null
            }
        };
    }

    render(){
        return (
            <div>
            <TimelineEvent
                title={this.props.title}
                createdAt={this.props.BlockNumber}
                bubbleStyle={{borderColor: "#000"}}
                icon={<BlockIcon/>}
                titleStyle={{ fontSize: 1.2 + 'em'}}
                buttons={<ShowDetail/>}
                collapsible={true}
                showContent={false}
            >
            <MyTable contents={this.state.contents} />
            </TimelineEvent>
            </div>
        );
    }
}

const MyTimeline = () => (
    <div>
        <Timeline>
            <MyTimelineEvent 
            title="양악 수술받음" 
            BlockNumber="Block Number: 123" 
            body="그렇다."/>
        </Timeline>
        <Timeline>
            <MyTimelineEvent 
            title="치질임을 진단받음" 
            BlockNumber="Block Number: 456" 
            body="슬프다."/>
        </Timeline>
        <Timeline>
            <MyTimelineEvent 
            title="양악 수술받음" 
            BlockNumber="Block Number: 123" 
            body="그렇다."/>
        </Timeline>
        <Timeline>
            <MyTimelineEvent 
            title="치질임을 진단받음" 
            BlockNumber="Block Number: 456" 
            body="슬프다."/>
        </Timeline>
        <Timeline>
            <MyTimelineEvent 
            title="양악 수술받음" 
            BlockNumber="Block Number: 123" 
            body="그렇다."/>
        </Timeline>
        <Timeline>
            <MyTimelineEvent 
            title="치질임을 진단받음" 
            BlockNumber="Block Number: 456" 
            body="슬프다."/>
        </Timeline>
        <Timeline>
            <MyTimelineEvent 
            title="양악 수술받음" 
            BlockNumber="Block Number: 123" 
            body="그렇다."/>
        </Timeline>
        <Timeline>
            <MyTimelineEvent 
            title="치질임을 진단받음" 
            BlockNumber="Block Number: 456" 
            body="슬프다."/>
        </Timeline>
        <Timeline>
            <MyTimelineEvent 
            title="치질임을 진단받음" 
            BlockNumber="Block Number: 456" 
            body="슬프다."/>
        </Timeline>
        <Timeline>
            <MyTimelineEvent 
            title="치질임을 진단받음" 
            BlockNumber="Block Number: 456" 
            body="슬프다."/>
        </Timeline>
        <Timeline>
            <MyTimelineEvent 
            title="치질임을 진단받음" 
            BlockNumber="Block Number: 456" 
            body="슬프다."/>
        </Timeline>
        <Timeline>
            <MyTimelineEvent 
            title="치질임을 진단받음" 
            BlockNumber="Block Number: 456" 
            body="슬프다."/>
        </Timeline>
    </div>
)

export default MyTimeline;
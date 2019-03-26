import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    time="11:00 AM"
                    content="comment coadadntent"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex"
                    time="21:00 AM"
                    content="comment conasdadtent"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam2"
                    time="11:00 PM"
                    content="comment contadasdent"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>


        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
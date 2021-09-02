import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// import MenuItem from './MenuItem';
// // 引入新的Menu
// import Menu from './Menu';
// import InputForm from './InputForm';

// const menuItemWording = [
//   'Like的發問',
//   'Like的回答',
//   'Like的文章',
//   'Like的留言'
// ];

// let menuItemArr = menuItemWording.map((wording) => <MenuItem text={wording}/>);
// let mapTest = menuItemWording.map(
//         (element, index, array) => {
//             console.log("Element =" + element);
//             console.log("Index =" + index);
//             console.log("Array =" + array);
//         }
//     );

const AppFunction = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        Are you sure you want to do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Andy" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Leon" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jacky" avatar={faker.image.avatar()}/>
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(
  <AppFunction/>
  // <>
  //     <Menu title={"Andy Chang的Like"}>{menuItemArr}</Menu>
  //     <InputForm></InputForm>
  // </>
  ,
  document.getElementById('root')
);

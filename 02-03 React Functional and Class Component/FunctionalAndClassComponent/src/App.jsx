import React from 'react';
// import TR from './components/TableRow';
import TableClass from './components/TableClass';
import ClassParent from './components/ClassParent';
function Header()
{
  return <h1>This is the heading of our component</h1>
}

function App(props)
{
  // const h1 = React.createElement('h1', { style: { color: "red" } }, "Hello Class");
  // const p = React.createElement('p', { style: { color: "yellow" } }, "Paragraph");
  // const div = React.createElement('div', null, h1, p);
  // return div;
  // const style = { color: "red" };
  // const name = "Shewag"
  // return (
  //   <div>
  //     <Header />
  //     <h3 style={{ color: "red" }}>Hello! {props.name ? props.name : "Default"}</h3>
  //     <p>This is paragraph {props.age}</p>
  //   </div >
  // )

  const users = [
    { name: "John Doe", age: 25, email: "john.doe@example.com", contact: "123-456-7890" },
    { name: "Jane Smith", age: 30, email: "jane.smith@example.com", contact: "234-567-8901" },
    { name: "Alice Johnson", age: 28, email: "alice.johnson@example.com", contact: "345-678-9012" },
    { name: "Bob Brown", age: 35, email: "bob.brown@example.com", contact: "456-789-0123" },
    { name: "Charlie Davis", age: 22, email: "charlie.davis@example.com", contact: "567-890-1234" }
  ];

  return (
    <>
      {/* <table>
        <tbody>
          {
            users.map(user =>
            {
              return (
                <TableClass user={user} />
              )
            })
          }
        </tbody>
      </table> */}


      <ClassParent />
    </>
  )


}

export { App, Header };



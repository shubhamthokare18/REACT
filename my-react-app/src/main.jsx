// import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('root')).render(
//   <p>Welcome!</p>
// ) 



// import { createRoot } from 'react-dom/client'

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// createRoot(document.getElementById('root')).render(
//   myelement
// )



// import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('sandy')).render(
//   <p>Welcome!</p>
// ) 



// import{createRoot} from 'react-dom/client'
// const fruitlist=['apple','banana','cherry'];
// function MyList(){
//   return(
//   <ul>
//     {fruitlist.map(fruit=>
//       <li key={fruit}>{fruit}</li>
//     )}
//   </ul>
//   );
// }
// createRoot(document.getElementById('root')).render(
//   <MyList/>
// )



// import{createRoot} from 'react-dom/client'
// const users=[
//   {id:1,name:'John',age:30},
//   {id:2,name:'Jane',age:25}
// ];
// function UserList(){
//   return(
//     <ul>
//       {users.map(user=>
//         <li key={user.id}>
//           {user.name} is {user.age} years old
//         </li>
//       )}
//     </ul>
//   );
// }
// createRoot(document.getElementById('root')).render(
//   <UserList/>
// )



import{createRoot} from 'react-dom/client'
const fruitlist=['apple','banana','cherry'];
function App(){
  return(
    <ul>
      {fruitlist.map((fruit,index,array)=>{
        return(
          <li key={fruit}>
            Number: {fruit},Index: {index},Array: {array}
          </li>
        );
      })}
    </ul>
  );
}
createRoot(document.getElementById('root')).render(
  <App/>
)
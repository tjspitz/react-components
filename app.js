// MAKE A HAPPY LITTLE GROCERY LIST

const {useState} = React;

const GroceryList = () => {
  const groceryItems = ['Bananas', 'Apples', 'Oranges'];

  return (
    <div>
      <h1>Grocery List</h1>
        <ul>
          {groceryItems.map(item => {
            return (
              <GroceryListItem item={item} />
            )
          })}
        </ul>
    </div>
  );
};

const GroceryListItem = ({item}) => {
  const [isDone, setIsDone] = useState(false);
  const [onHover, setOnHover] = useState(false);

  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    fontWeight: onHover ? 'bold' : 'normal'
  };

  return (
    <li style={style}
        onClick={() => setIsDone(!isDone)}
        onMouseEnter={() => setOnHover(!onHover)}
        onMouseLeave={() => setOnHover(!onHover)}
    >
      {item}
    </li>
  );
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));

// ==============================================================
// const GroceryList = () => {
//   const groceryItems = ['Bananas', 'Apples', 'Oranges'];

//   const [isDone, setIsDone] = useState(false);

//   const style = {
//     textDecoration: isDone ? 'line-through' : 'none'
//   };

//   const onLiClick = () => setIsDone(!isDone);

//   return (
//     <div>
//       <h1>Grocery List</h1>
//         <ul>
//           <GroceryListItem items={groceryItems}/>
//         </ul>
//     </div>
//   );
// };

// const GroceryListItem = ({items}) => {
//   // const [isDone, setIsDone] = useState(false);

//   // const style = {
//   //   textDecoration: isDone ? 'line-through' : 'none'
//   // };

//   // const onLiClick = () => setIsDone(!isDone);

//     return (
//       items.map(item => (<li>{item}</li>))
//     );
// }
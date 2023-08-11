// import {useEffect, useState} from "react";
// import {Users} from "./components/Users/Users";
//
//
// const App = () => {
//
//     const [users, setUsers] = useState([]);
//
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json())
//             .then(value => setUsers(value))
//     },[]);
//     return(
//         <div>
//             {users.map(user=> <Users key={user.id} user={user}/>)}
//         </div>
//     )
//
// };
//
// export {App};
// property drill
//
// Структура:
//     Головна компонента App. App робить запит на https://jsonplaceholder.typicode.com/users
//     В середині Апп лежить компонента Users яка відображає всіх отриманих в апп юзерів з плейсхолдеру
// Кожен юзер - це компонента User, в якій є інші комоненти, а саме
// UserDetails - яка відображає інформацію id,name,username,email,phone,website,
// UserAddress - яка відображає інформацію street suite city,
// Company - яка відображає name,catchPhrase,bs




// import {UsersContainer} from "./components/UsersContainer/UsersContainer";
// import {useState} from "react";
// import {Posts} from "./components/UsersContainer/Posts/Posts";
//
// const App = () => {
//     const [userId, setUserId] = useState(null);
//     const [users, setUsers] = useState([]);
//     const [userName, setUserName] = useState(null);
//
//     return (
//         <div>
//             <UsersContainer setUserId={setUserId} users={users} setUsers={setUsers} setUserName={setUserName}/>
//             <hr/>
//             {userId && <Posts userId={userId} userName={userName}/>}
//         </div>
//     );
// };
//
// export {App};
// state lifting
// Є компонента Арр. В середині неї є UsersContainer, який отримує наданні з https://jsonplaceholder.typicode.com/users
//     Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.


const App = () => {
    return (
        <div>

        </div>
    );
};

export {App};
//     context
// Зробити структуру компонентів -
// App
// Child1                              Child2
// SubChild1_1    SubChild1_2          SubChild2_1    SubChild2_2
//
// Тепер завдання:
//     З SubChild2_2 передати данні (будь-які) в SubChild1_1
//
//
//
// ***
// Я б для себе рекомендував зробити наступну штуку з завданням з subchild:
//     Зробити його спочатку без використання контексту, а потім переробити з ним. Так краще дійде суть
import createStore from 'redux-zero';
export const users=[
    {
        firstName: "Evelyn",
        lastName: "Guevara",
        email: "carina120794@gmail.com", 
        password: "123456",
        boards: [
            {
                id: 0,
                title: "Redux"
            }
        ]
    }
];
const initialState = {
    users:users
}
const store = createStore(initialState);
export default store;
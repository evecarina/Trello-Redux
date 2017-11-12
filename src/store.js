import createStore from "redux-zero";

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

let boards = [
    {
        name: "Portafolio",
        lists: [
             {        
            name:"Estilos",
            cards:["Maquetacion","identacion","Gh-pages"],
            add:false
             },
             { 
             name:"Estilos",
             cards:["Maquetacion","identacion","Gh-pages"],
             add:false
             }
        ],
        add:false
    },
    
    {
        name: "Proyecto Suchi",
        lists: [
            {
                name:"Estilos",
                cards:["Maquetacion","identacion","Gh-pages"],
                add:false
            },
            {
                name:"Estilos",
                cards:["Maquetacion","identacion","Gh-pages"],
                add:false
            }
        ],
        add:false
    }
    
];
const initialState = {
    users:users,
    boards: boards,
    selectedBoard: 0,
    addBoard:false
};

const store = createStore(initialState);
export default store;

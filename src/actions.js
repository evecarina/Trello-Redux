import store from './store';

export const setView = ( index )=>{
    store.setState({
        selectedBoard:index
    })
}
export const setTrueAddCard = (selected,index) =>{
    let newBoards = [...store.getState().boards];
    newBoards[selected].lists[index].add=true;
    store.setState({
        boards:newBoards
    })
}
export const addCardList = (selected,index,newCard) =>{
    let newBoards = [...store.getState().boards];
    newBoards[selected].lists[index].add=false;
    newBoards[selected].lists[index].cards.push(newCard);
    store.setState({
        boards:newBoards
    })
}
export const setAddCardFalse = (selected,index) =>{
    let newBoards = [...store.getState().boards];
    newBoards[selected].lists[index].add=false;
    store.setState({
        boards:newBoards
    })
}

export const setTrueAddList = (selected) =>{
    let newBoards = [...store.getState().boards];
    newBoards[selected].add=true;
    store.setState({
        boards:newBoards
    })
}
export const addList = (selected,newList) =>{
    let newBoards = [...store.getState().boards];
    newBoards[selected].add=false;
    newBoards[selected].lists.push({
        name:newList,
        cards:[],
        add:false
    });
    store.setState({
        boards:newBoards
    })
}
export const setAddListFalse = (selected) =>{
    let newBoards = [...store.getState().boards];
    newBoards[selected].add=false;
    store.setState({
        boards:newBoards
    })
}


export const setAddBoardTrue = () =>{
    store.setState({
        addBoard:true
    })
}
export const addNewBoard = (newBoard) =>{
    let newBoards = [...store.getState().boards];
    newBoards.push({
        name:newBoard,
        lists:[],
    });
    store.setState({
        boards:newBoards,
        addBoard:false
    })
}
export const setAddBoardFalse = () =>{
    store.setState({
        addBoard:false
    })
}
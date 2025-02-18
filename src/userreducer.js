

const Userlist = (state=[], action) => {
    let data = Object.assign([], state);

    if(action.type==='saveuser') {
        data.push(action.fullname)
    }


    return data;
}

export default Userlist;
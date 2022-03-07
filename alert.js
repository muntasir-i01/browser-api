console.log('jerry is here');

// alert('tom is coming')

const tomComing = () => {
    alert('There are tom, hide  hide !!!')
}

const askPicnic = () => {
    const response = confirm('Are you sure you want to go to picninc?')
    console.log(response);

    if (response === true) {
        alert('Pay you fee through bKash');
    } else {
        console.log('Not Going');
    }
}

const askName = () => {
    const name =  prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}
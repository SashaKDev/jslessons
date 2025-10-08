class Ghost{
    constructor(){
        const colors = ['yellow', 'purple', 'white', 'red'];
        const index = Math.floor(Math.random() * colors.length);
        this.color = colors[index];
    }
}

const ghost = new Ghost();

console.log(ghost);
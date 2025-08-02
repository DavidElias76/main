// create the project idea
const projectIdea = {
    PENDING: {
        descritpion: "Execution Pending"
    },
    SUCCESS: {
        descritpion: "Executed Successfully"
    },
    FAILURE:  {
        descritpion: "Execuction Failed"
    }

}

// project idea class
class ProjectIdea {
    constructor(title, descritpion) {
        this.title = title;
        this.descritpion = descritpion;
        this.status = ProjectIdea.PENDING;
    }
    // method to update project status
    updatePorjectStatus(newStatus){
        this.status =  newStatus;
    }
}

// class of project idea borad
class ProjectIdeaBoard {
    constructor(title) {
        this.title = title;
        this.ideas = []; // empty array of objects
    }
    // add project to the ideas array
    pin(project){
        this.ideas.push(project);
    }
    // remove the project from the ideas array
    unpin(project){
        this.ideas.pop(project)
    }
    // return the length of the idead  array
    count(){
        return this.ideas.length;
    }
    formatString(){
        let output = `${this.title} has ${this.ideas.length} idea(s)\n`
        for (const idea of this.ideas) {
            output += `${idea.title} (${idea.status.description}) - ${idea.description}\n`; 
        }
    }
}

// create an instance
const project = new ProjectIdea();
const board = new ProjectIdeaBoard("My Coding Projects");
console.log(board.title); // Output: My Coding Projects
console.log(board.ideas); // Output: []

console.log(projectStatus.PENDING.description); // Output: Pending Execution
console.log(projectStatus.SUCCESS.description); // Output: Executed Successfully
console.log(projectStatus.FAILURE.description); // Output: Execution Failed

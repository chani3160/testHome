//answer 1
//a
async function getNumberFromServer() {
    //some api call to return a number from a remote server
    return 3;
}

async function myFunc() {
    let x1, x2
    x1 = x2 = await getNumberFromServer();
    return x1 + x2;
}
 console.log(myFunc());
//answer 2

interface INode {
    name: string;
    children: INode[];
}

const Inode: INode = {
    name: 'a',
    children: [
        {
            name: 'b',
            children: []
        },
        {
            name: 'c',
            children: [{
                name: 'd',
                children: []
            },]
        },
        {
            name: 'e',
            children: []
        },
    ]
}

const getAllNamesByRecursion = (Inode: INode) => {
    console.log(Inode.name)
    Inode.children.forEach((child) => {
        if (Inode.children) {
            return getAllNamesByRecursion(child);
        }
    })

}
//b
function collectWithRecursion(fn, node) {
    return [
      fn(node),
      ...(node.children ?? []).flatMap(node => collectWithRecursion(fn, node)),
    ];
  }
function collectWithoutRecursion(fn, node) {
    // start with the top node in the stack
    const stack = [node];
    const result = [];
    // repeat until the whole stack is processed
    while (stack.length) {
      // get the next node from the stack and process it
      const node = stack.pop();
      result.push(fn(node));
      // if the node has children, add them to the stack
      if (node.children) {
        stack.push(...node.children.reverse());
      }
    }
    return result;
  }
   
  console.log("without recursion:", collectWithoutRecursion((node => node.name), Inode));

//answer 3
const regex = ()=>{
    const test : string | any = '<div class="my-class" id="my-id">';
    const rExp : RegExp = /<([^> ]+)([^>]*)>/;
  console.log(test.match(rExp));
    const result = test.match(rExp)
    console.log(result[2]);
}

regex();

//answer 4

async function run1000(): Promise<void> {
const promises: Promise<number>[] = [];
  for(let i=0; i< 1000;i++) {
      await  promises.push(getNumberFromServer());
  }

for(const p of promises){
    p
}
}

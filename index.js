//navigate the node tree using node relationships.
let p = document.getElementById("main");
console.log(p.childNodes); //by using childnode we can get the length of the parent child
console.log(p.childElementCount)//it represents the no of child in that parent tag
console.log(p.firstElement) //it will show the 1st element of the child node
console.log(p.lastElementchild)// it will shows the last element of the child node
console.log(p.firstchild)//the element will takes empty text as 1st child
console.log(p.lastchild)//the element will takes empty text as last child
console.log(p.children[4])//we can access the child node by using array index
console.log(p.nextsibling)//in js link we written the difer so that js never end
console.log(p.previoussibling)
let midele = document.getElementById("subclass3")
console.log(midele.nextElementSibling)//it will display next element
console.log(midele.textContent)//it display the content in the tag
//in dom we can change the css also
midele.style.backgroundcolor='blue'
midele.style.color='white'
midele.style.textAlign='center'
midele.style.fontFamily='cursive'
midele.style.fontWeight='bolder'
midele.style.textShadow='5px'
let sub=document.getElementsByClassName(".subclass5")
console.log(sub.textContent)
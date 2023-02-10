const n = ["adhya","pranit","bhavya","govardhan","vaishnavi","rohan","abhay"]
document.getElementById("method").innerHTML = n.toString()
document.getElementById("join").innerHTML = n.join("**")
document.getElementById("pop").innerHTML = n.pop()
document.getElementById("push").innerHTML = n.push("smitha")
document.getElementById("shift").innerHTML = n.shift()
document.getElementById("unshift").innerHTML = n.unshift("smitha")
n[4]="aishu"
document.getElementById("change").innerHTML = n
delete n[3]
document.getElementById("delete").innerHTML = n
const m = [1,2,3,4,5,6,7]
const o = m.concat(m)
document.getElementById("merge").innerHTML = o
const spl = m.slice(3)
document.getElementById("slice").innerHTML = spl
const sli = m.splice(2,3)
document.getElementById("splice").innerHTML = sli
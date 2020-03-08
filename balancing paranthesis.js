let a="(((3+1))+ (3+3))";
ismatch=false;
class stackclass
{
    
    constructor(maxsize)
    {
       this.maxsize=maxsize;
       this.arr=[];
       
    }
top()
{
    return this.arr[this.arr.length-1];
}

isempty()
{
    if (this.arr.length==0)
    {
return 0;
    }
    else{
        return -1;
    }
}
    //last in first out
    push(val)
    {
    if (this.arr.length<this.maxsize)
    {
   this.arr.push(val);
   return 0;
    }
    else{
        return -1;
    }
    }

    pop()
    {
        if (this.arr.length==0)
        {
            //console.log("no element present in stack for deletion!")
            return -1;
        }
        else{
           // console.log("element popped successfully");
            return this.arr.pop();
        }

    }

    peek()
    {
        console.log(this.arr);
    }
}



let stk=new stackclass(20);
for (let i=0;i<a.length;i++)
{
   
        console.log("the word value is ", a[i]);
        let c=stk.top();
        console.log("the top value is ", c);
      
        if ((a[i]=="(" || a[i]==")") && (c==a[i]))
        {
            stk.push(a[i]);
            stk.peek();

        }
        else if ((a[i]=="(" || a[i]==")") && (c!=a[i] && c !=undefined))
        {
            console.log("one set matched");
        stk.pop();
        stk.peek();
        }
        else if ((a[i]=="(" || a[i]==")") && (typeof(c)=="undefined"))
        {
            console.log("the stack is empty,so adding to it ")
            stk.push(a[i]);
            stk.peek();
        }
    
}

let d=stk.isempty();
if (d==0)
{
    console.log("parenthesis match");
}
else{
    console.log("parenthesis do not match");
}


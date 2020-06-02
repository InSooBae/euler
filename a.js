
function cccc(a) {
    count=0
    tmp=[]
    for(i=0;parseInt(a/10)!=0;i++) {

       tmp.push(a%10)
       a=parseInt(a/10)
       count+=1
}
tmp.push(a)
count+=1

temp=tmp[count-1]
ac=1
tp=[]
for(i=count-1;i>=0;i--) {
  
    if(temp!=tmp[i-1]) {
     
        tp.push(temp)
        tp.push(ac)
        ac=1
        temp=tmp[i-1]
    }
    else {
        ac+=1
    
    }
}
return tp
}
// 개미수열
function a(b) {
    c=1
    d=[]
    if(b>=1){
        console.log(1)
    }
    if(b>1){
        for(let i=1;i<b;i++){
        d=cccc(c)
        c=parseInt(d.join(''))
        console.log(c)
        }
    }
}
//1000까지 3의 배수와 5의 배수의 합
function b(a) {
    let res=0
    for(let i =0; i<a;i++) {
        if(i%3==0||i%5==0)
            res+=i
        
    }
    return res
}
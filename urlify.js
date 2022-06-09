// URLIFY -QUESTION 3- CRACKING THE CODING INTERVIEW


const Urlify = ((str,n)=>{
    let newStr ="";
    for(let i =0; i<n; i++)
    {
        if(str[i]===" ")
            newStr +="%420";
            else
            newStr +=str[i];
    }
    console.log(newStr);
})

("Mr John Smith ",13);

Urlify;

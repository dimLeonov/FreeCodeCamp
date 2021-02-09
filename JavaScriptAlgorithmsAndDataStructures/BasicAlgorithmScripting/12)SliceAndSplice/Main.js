    const frankenSplice=(arr1, arr2, n) =>{
        let result=[];
        for(let i=0;i< arr2.length;i++){
            if(i===n){
                let j=0;
                while(j < arr1.length){
                    result.push(arr1[j]);
                    j++;
                }
            }
            result.push(arr2[i]);
        }
        return result;
    }
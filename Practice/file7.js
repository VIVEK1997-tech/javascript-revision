//reduce methods


const numbers=[1,2,3,4,5,6,7];

    const getsum=(accumulator,currentvalue)=>{
        return accumulator+currentvalue;
    };

    const sum=numbers.reduce(getsum,100 );
    console.log(sum);
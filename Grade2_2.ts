let score: number =25;
console.log("score: ",score);
if (score >=80 ){
    console.log(`score: ${score} ได้เกรด A`);
}else if(score >=70 && score <80){
    console.log(`score: ${score} ได้เกรด B`);
}else if(score >=60 && score <70){
    console.log(`score: ${score} ได้เกรด C`);
}else if(score >=50 && score <60){
    console.log(`score: ${score} ได้เกรด D`);
}else{
    console.log(`score: ${score} ได้เกรด F`);
}
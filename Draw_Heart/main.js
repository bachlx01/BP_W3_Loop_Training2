// let height = +prompt('Enter the height of heart: ');
let width = +prompt('Enter the width of heart: ');
for (i=0;i<=width/4;i++){
    for (r_nbsp1 = width/4-i;r_nbsp1>0;r_nbsp1--){
        document.write('&nbsp&nbsp&nbsp&nbsp');
    }
    for (r_star1=1;r_star1<=i*2;r_star1++){
        document.write('**');
    }
    for (r_nbsp2 = width/2-i*2;r_nbsp2>0;r_nbsp2--){
        document.write('&nbsp&nbsp&nbsp&nbsp');
    }
    for (r_star2=1;r_star2<=i*2;r_star2++){
        document.write('**');
    }
    document.write('<br>')
}
for (j=0;j<=width/2;j++){
    for (r_nbsp3=0;r_nbsp3<=j;r_nbsp3++){
        document.write('&nbsp&nbsp&nbsp&nbsp');
    }
    for (r_star3=(width-j-r_nbsp3);r_star3>0;r_star3--){
        document.write('**');
    }
    document.write('<br>')
}


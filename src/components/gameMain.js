import { Fragment } from "react";
import data from "../data.json";
import data1 from "../data1.json";

import styles from "./gameMain.module.css";
//import ButtonTR from "./buttonTR";
//var n=0;
// console.log(data[0].cross);
const cross= data[0].cross;
const oval= data[0].oval;
export default function GameMain(){
    var n=-1;
    
    var id1=0;
    var id2=0;
    var id3=0;
    var id4=0;
    var id5=0;
    var id6=0;
    var id7=0;
    var id8=0;
    var id9=0;
    const tr1 = ()=>{
        if (id1===1){
            return
        }
        id1=1;
        n++;
        
        if (n%2===0){
            document.getElementById("but1").style.backgroundImage="url("+cross
        +")";
        data1[n].butt="cross 1";
        console.log(n);
            
        }
        else{
            document.getElementById("but1").style.backgroundImage="url("+oval
        +")";
        data1[n].butt="oval 1";
        console.log(n);
        }
        pp();
    }
    const tr2 = ()=>{
        
        if (id2===1){
            return
        }
        id2=1;
        n++;
        if (n%2===0){
            document.getElementById("but2").style.backgroundImage="url("+cross
        +")";
        data1[n].butt="cross 2";
        console.log(n);
        }
        else{
            document.getElementById("but2").style.backgroundImage="url("+oval
        +")";
        data1[n].butt="oval 2";
        console.log(n);
        }
        pp();
    }
    const tr3 = ()=>{
        if (id3===1){
            return
        }
        id3=1;
        
        n++;
        if (n%2===0){
            document.getElementById("but3").style.backgroundImage="url("+cross
        +")";
        data1[n].butt="cross 3";
        console.log(n);
        }
        else{
            document.getElementById("but3").style.backgroundImage="url("+oval
        +")";
        data1[n].butt="oval 3";
        console.log(n);
        }
        pp();
    }
    const tr4 = ()=>{
        if (id4===1){
            return
        }
        id4=1;
        n++;
        if (n%2===0){
            document.getElementById("but4").style.backgroundImage="url("+cross
        +")";
        data1[n].butt="cross 4";
        console.log(n);
        }
        else{
            document.getElementById("but4").style.backgroundImage="url("+oval
        +")";
        data1[n].butt="oval 4";
        console.log(n);
        }
        pp();
    }
    const tr5 = ()=>{
        if (id5===1){
            return
        }
        id5=1;
        n++;
        if (n%2===0){
            document.getElementById("but5").style.backgroundImage="url("+cross
        +")";
        data1[n].butt="cross 5";
        console.log(n);
        }
        else{
            document.getElementById("but5").style.backgroundImage="url("+oval
        +")";
        data1[n].butt="oval 5";
        console.log(n);
        }
        pp();
    }
    const tr6 = ()=>{
        if (id6===1){
            return
        }
        id6=1;
        n++;
        if (n%2===0){
            document.getElementById("but6").style.backgroundImage="url("+cross
        +")";
        data1[n].butt="cross 6";
        console.log(n);
        }
        else{
            document.getElementById("but6").style.backgroundImage="url("+oval
        +")";
        data1[n].butt="oval 6";
        console.log(n);
        }
        pp();
    }
    const tr7 = ()=>{
        if (id7===1){
            return
        }
        id7=1;
        n++;
        if (n%2===0){
            document.getElementById("but7").style.backgroundImage="url("+cross
        +")";
        data1[n].butt="cross 7";
        console.log(n);
        }
        else{
            document.getElementById("but7").style.backgroundImage="url("+oval
        +")";
        data1[n].butt="oval 7";
        console.log(n);
        }
        pp();
    }
    const tr8 = ()=>{
        if (id8===1){
            return
        }
        id8=1;
        n++;
        if (n%2===0){
            document.getElementById("but8").style.backgroundImage="url("+cross
        +")";
        data1[n].butt="cross 8";
        console.log(n)
        ;
        }
        else{
            document.getElementById("but8").style.backgroundImage="url("+oval
        +")";
        data1[n].butt="oval 8";
        console.log(n);
        }
        pp();
        
    }
    const tr9 = ()=>{
        if (id9===1){
            return
        }
        id9=1;
        n++;
        if (n%2===0){
            document.getElementById("but9").style.backgroundImage="url("+cross
        +")";
        data1[n].butt="cross 9";
        console.log(n);
        }
        else{
            document.getElementById("but9").style.backgroundImage="url("+oval
        +")";
        data1[n].butt="oval 9";
        console.log(n);
        }
        ffff();
        pp();
        
    }
    const startO=()=>{
        const list1= document.getElementById("hisView");
       if(list1.hasChildNodes()){
        while (list1.children[0]){
        list1.removeChild(list1.children[0]);}
       }
       const list2=document.getElementById("mainGame");
       if(list2.hasChildNodes()){
        list2.removeChild(list2.children[0]);
       }
        id1=0;
        id2=0;
        id3=0;
        id4=0;
        id5=0;
        id6=0;
        id7=0;
        id8=0;
        id9=0;
        document.getElementById("but9").style.backgroundImage="";
        document.getElementById("but1").style.backgroundImage="";
        document.getElementById("but2").style.backgroundImage="";
        document.getElementById("but3").style.backgroundImage="";
        document.getElementById("but4").style.backgroundImage="";
        document.getElementById("but5").style.backgroundImage="";
        document.getElementById("but6").style.backgroundImage="";
        document.getElementById("but7").style.backgroundImage="";
        document.getElementById("but8").style.backgroundImage="";
        for (let i=0;i<9;i++){
            data1[i].butt="";
        
        }
        n=-1;
        data[1].crossL=[];
        data[1].ovalL=[];
    }

    const ffff=()=>{
        console.log("yup")
        
    }
    const pp = () => {
    //     var crossL = data[1].crossL;
    // var ovalL = data[1].ovalL;
    var crossL=[];
    var ovalL=[];
    var crossW=0;
    var ovalW=0;
    var drawW=0;
    var ccWin;
    //console.log(crossL);
    console.log(ovalL,crossL)
        for (let i = 0; i <= 9; i++) {
            if (data1[i].butt === "") {
                continue;
            }
            const cc = data1[i].butt.split(" ")

            if (cc[0] === "cross") {
                crossL.push(cc[1]);
            }
            else if (cc[0] === "oval") {
                ovalL.push(cc[1])
            }
        }
        crossL.sort();
        ovalL.sort();
        console.log(ovalL,crossL)
        const checkArr = [["1", "5", "9"], ["1", "2", "3"], ["1", "4", "7"], ["3", "5", "7"], ["3", "6", "9"], ["7", "8", "9"],["2","5","8"]];
        //console.log(crossL)
        let r = 0;
        let q = 0;
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 3; j++) {
                // console.log(checkArr[i][j])
                if (crossL.indexOf(checkArr[i][j]) >= 0) {
                    
                    r++;
                    //console.log(r,checkArr[i][j])
                }if (ovalL.indexOf(checkArr[i][j])>=0){
                    q++;
                    console.log(q,checkArr[i][j],checkArr[i])
                }
                
            }
            if (r === 3) {
                console.log("cross win");
                ccWin="Cross Wins"
                crossW=1;
                id1=1;
        id2=1;
        id3=1;
        id4=1;
        id5=1;
        id6=1;
        id7=1;
        id8=1;
        id9=1;
                break;
            }if (q===3){
                console.log("oval win");
                ccWin="Oval Wins"
                ovalW=1;
                id1=1;
        id2=1;
        id3=1;
        id4=1;
        id5=1;
        id6=1;
        id7=1;
        id8=1;
        id9=1;
                break;
            }
            r = 0;
            q =0;
        }
        console.log(r,q);
        //console.log(document.getElementById("but9").style.backgroundImage);
        let t=0;
        for (let r=1;r<=9;r++){
            let va=document.getElementById("but"+r).style.backgroundImage;
            if (va!==""){
                t++;
                //console.log(t,"t")
            }
        }
        if(r===0 && q===0 && t===9 && ovalW===0 && crossW===0){
            console.log("draw");
            ccWin="Draw";
            drawW=1;

        }
        r=0;
        q=0;
        if(drawW===1 || crossW===1||ovalW===1){
        const win=document.createElement("div");
        win.className=styles.winName;
        win.innerHTML=ccWin;
        document.getElementById("mainGame").appendChild(win);}
    }

   
    return(
        <Fragment>
        <div className={styles.box1}>
             
            <button className={styles.button1 + " "+ styles.mainLayout } onClick={tr1}  type="button" id="but1"></button>
            
            <button className={styles.button2 + " "+ styles.mainLayout}  onClick={tr2} id="but2"></button>
            <button className={styles.button3 + " "+ styles.mainLayout}  onClick={tr3} id="but3"></button>
            <button className={styles.button4 + " "+ styles.mainLayout}  onClick={tr4} id="but4"></button>
            <button className={styles.button5 + " "+ styles.mainLayout}  onClick={tr5} id="but5"></button>
            <button className={styles.button6 + " "+ styles.mainLayout}  onClick={tr6} id="but6"></button>
            <button className={styles.button7 + " "+ styles.mainLayout}  onClick={tr7} id="but7"></button>
            <button className={styles.button8 + " "+ styles.mainLayout}  onClick={tr8} id="but8"></button>
            <button className={styles.button9 + " "+ styles.mainLayout}  onClick={tr9} id="but9"></button>
            
    
        </div>
        <button className={styles.startButton} onClick={startO}>Restart</button>
        <div id="mainGame"></div>
        </Fragment>

        
    )
}
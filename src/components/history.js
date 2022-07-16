import data1 from "../data1.json";
import styles from "./history.module.css"
import data from "../data.json";
import { Fragment } from "react";
export default function History(){
    const cross= data[0].cross;
    const oval= data[0].oval;
    const tre=(g)=>{
        var uu2;
        for (let j=0;j<=g;j++){
             const uu1=data1[j].butt.split(" ")
            if (j%2===0){
                 uu2=cross;
            }else{
                 uu2=oval;
            }
           document.getElementById("but"+uu1[1]).style.backgroundImage="url("+uu2+")";
           console.log("but"+uu1[1]);
           console.log("url("+uu1[0]+")")
        }
        for (let j=g+1;j<9;j++){
            
            const uu=data1[j].butt.split(" ")
            document.getElementById("but"+uu[1]).style.backgroundImage=""
            console.log("but"+uu[1])
        }
    }
    const ap=()=>{
       const list= document.getElementById("hisView");
       if(list.hasChildNodes()){
        while (list.children[0]){
        list.removeChild(list.children[0]);}
       }
        for (let i=0;i<9;i++){
        if(data1[i].butt) {
        const tre1=()=>{tre(i)};
        //console.log(data[i].butt+1)
        const butHis=document.createElement("button");
        butHis.className=styles.hisViewBut
        butHis.onclick=tre1
        butHis.innerHTML=data1[i].butt;
        document.getElementById("hisView").appendChild(butHis);}}
    }
    return(<Fragment><button onClick={ap} className={styles.hisButton}>History</button>
    <div className={styles.historyView} id="hisView"></div>

    </Fragment>)
}
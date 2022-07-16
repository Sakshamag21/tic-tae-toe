import "./gameMain.js";
import data1 from "../data1.json";
import data from "../data.json";
export default function ButtonTR() {
    
    const pp = () => {
        var crossL = data[1].crossL;
    var ovalL = data[1].ovalL;
    //console.log(crossL);
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
        console.log(ovalL)
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
                break;
            }if (q===3){
                console.log("oval win");
                break;
            }
            r = 0;
            q =0;
        }
        console.log(r,q);
        if(r===0 && q===0){
            console.log("draw")
        }
        r=0;
        q=0
    }
//     return (
//         <button onClick={pp}>yesykfffffffffffffffffffffffffffffffffff</button>
//     )
// }
}
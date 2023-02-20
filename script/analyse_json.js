

let url = "./json/chaos_citadel_script.json";
let response = await fetch(url);
let list_etape = await response.json(); // lire le corps de réponse et analyser en JSON


let step_current = list_etape[1]

for (let step in step_current) {

    console.log(analyse_element(step))
    console.log(analyse_element(step_current[step]))
}
   
function analyse_element(obj) {

    if (typeof obj === 'string') {
        return obj;
    }

    if (typeof obj === 'object') {
        
        let content = ""
        let key = ""
        for (let e in obj) {
            // content += e
            key += JSON.stringify(obj[e])
            // key += obj[e]
        }

        return key
    }



}
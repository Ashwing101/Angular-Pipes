import { Pipe, PipeTransform } from "@angular/core";
import { retry } from "rxjs";

@Pipe({
    name:'temp',
    standalone:true
})

//Pipe method to convert Celcius faharanhite
export class TemperatuePipe implements PipeTransform{
transform(value:string|number|null, 
    inputType: 'cel' |'fah' ,
    outputType?:'cel' | 'fah'){
    if(!value){
        return value;
    }
    
    let val: number;
    if(typeof value === 'string'){
        val = parseFloat(value);
    }else{
        val = value;
    }

    let outputTemp: number;
    if(inputType === 'cel' && outputType === 'fah'){
      outputTemp = val * (9/5) + 32; //cal to fah
    }else if(inputType === 'fah' && outputType === 'cel'){
    outputTemp = (val - 32) * (5/9); //fah to cel
    }else{
        outputTemp = val;
    }
    let symbol : '°C' | '°F';

    if(!outputType){
        symbol = inputType === 'cel' ? '°C' : '°F';
    }else{
        symbol = outputType === 'cel' ? '°C' : '°F';
    }
 
    return `${outputTemp.toFixed(2)} ${symbol}`;
}


}
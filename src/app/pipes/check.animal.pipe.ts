import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "checkAnimal"
})

export class CheckAnimalPipe implements PipeTransform{
    
    transform(value: any, character: string) {
       
        if(character.length > 1) {
            return "Unknow";
        }
        
        switch(character.toUpperCase()) {
            case "C" :
                return "Cat";
            case "D":
                return "Dog";
            case "T":
                return "Tiget";
            default:
                return "Unknow";    
        }
    }
}
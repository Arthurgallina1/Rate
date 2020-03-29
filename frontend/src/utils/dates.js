import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns'

export default function timeleft_formatted(duration){

    const minLeft = differenceInMinutes(new Date(duration), new Date());
    let hourLeft = differenceInHours(new Date(duration), new Date());
    let dayLeft = differenceInDays(new Date(duration), new Date());

    const minLeftFormatted = minLeft % 60;
    if(dayLeft > 1){
        hourLeft = hourLeft % 24;
        dayLeft = dayLeft + 'd'
    } else {
        dayLeft = null;
    }
    
    return `${dayLeft}${hourLeft}h${minLeftFormatted}m left`

}
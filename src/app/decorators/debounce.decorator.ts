export default function debounce(wait:number, immediate?:boolean){
    let timeout, result;
    return function(target: object, key: string, value: any) {
        return {
            value: function (...args: any[]) {
                let context = this;
                let later = function() {
                  timeout = null;
                  if (!immediate) result = value.value.apply(context, args);
                };
                let callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) result = value.value.apply(context, args);
                return result;
            }
        };
    }
}
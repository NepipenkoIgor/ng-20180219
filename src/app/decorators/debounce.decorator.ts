let timeout = null;
export default function debounce(wait:number, immediate?:boolean){
    var timeout, result;
    return function(target: object, key: string, value: any) {
        return {
            value: function (...args: any[]) {
                var context = this;
                var later = function() {
                  timeout = null;
                  if (!immediate) result = value.value.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) result = value.value.apply(context, args);
                return result;
            }
        };
    }
}
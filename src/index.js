module.exports = function toReadable (number) {
    
    function toUnits(x) {
        +x;
        switch (x) {
          case 0: return ``;
          case 1: return `one`;
          case 2: return `two`;
          case 3: return `tree`;
          case 4: return `four`;
          case 5: return `five`;
          case 6: return `six`;
          case 7: return `seven`;
          case 8: return `eight`;
          case 9: return `nine`;
          case 10: return `ten`;
          case 11: return `eleven`;
          case 12: return `twelve`;
          case 13: return `thirteen`;
          case 14: return `fourteen`;
          case 15: return `fifteen`;
          case 16: return `sixteen`;
          case 17: return `seventeen`;
          case 18: return `eighteen`;
          case 19: return `nineteen`;
        }
      }
      
      function toDozens(x) {
        +x;
        switch (x) {
          case 2: return `twenty`;
          case 3: return `thirty`;
          case 4: return `forty`;
          case 5: return `fifty`;
          case 6: return `sixty`;
          case 7: return `seventy`;
          case 8: return `eighty`;
          case 9: return `ninety`;
        }
      }
        let str = num.toString();
        
        if (num === 0) return `zero`;
        if (num <= 19) return toUnits(num);
        if (num <= 99) return `${toDozens(+str[0])} ${toUnits(+str[1])}`.trim();
        
        if (num <= 999) {
          if (+str[1] === 0) return `${toUnits(+str[0])} hundred ${toUnits(+str[2])}`.trim();
          if (+str[1] === 1) return `${toUnits(+str[0])} hundred ${toUnits(+str.slice(1))}`.trim();
          if (+str[1] !== 0 && +str[1] !== 1) return `${toUnits(+str[0])} hundred ${toDozens(+str[1])} ${toUnits(+str[2])}`.trim();
        }
}

;(function(){
    function Z(){
        var args = [].slice.call(arguments),i;
        if(args.length && args.length === 1){
            if(typeof args[0] === 'number' || typeof args[0] === 'string'){
                if(new Date(args[0]) + '' === 'Invalid Date'){
                    throw new Error('the first parameter is a invalid date');
                }else{

                }
                i = new Date(args[0]).getDay();
            }else{
                throw new Error('Please input correct parameters.');
            }
        }else{
            i = new Date().getDay();
        }
        return ['周日','周一','周二','周三','周四','周五','周六'][i];
    }

    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = Z;
        }
        exports.Z = Z;
    } else {
        window.Z = Z;
    }
})();
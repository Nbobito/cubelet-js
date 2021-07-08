class Group{

    constructor(vals, sym){ // vals in an array of group element values, sym is the group action needed to make symmetry
        this.vals = vals;
        this.sym = sym;
    }

    execute(count){

        let vals = this.vals;
        let sym = this.sym;

        if(count > 0){
            for(let i = 0; i<count*sym; i++){
                vals.unshift(vals.pop());
            }
        } 
        
        else if(count < 0){
            for(let i = 0; i<Math.abs(count*sym); i++){
                vals.push(vals.shift());
            }
        }

        else{
            return this.vals;
        }

        return this.vals;
    }
}

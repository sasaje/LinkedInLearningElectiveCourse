function fibonacci(N){
    //base case
    if(N==0 || N == 1){
        return N;
    }
    return fibonacci(N-1) + fibonacci(N-2)
}
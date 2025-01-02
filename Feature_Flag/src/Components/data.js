const ApiResponse = {
    QR: true,
    Tabs: true,
    Theme: true
};


function FeatureFlagServiceCall(){

    return new Promise((resolve,reject) => {
        if(ApiResponse) setTimeout(resolve(ApiResponse),500);
        else reject('Api Response not Present!')
    }) 
}

export default FeatureFlagServiceCall;
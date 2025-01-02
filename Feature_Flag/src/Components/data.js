
const ApiResponse = {
    QR: true,
    Tabs: false,
    Theme: true
};


function FeatureFlagServiceCall(){

    return Promise((resolve,reject) => {
        if(ApiResponse) setTimeout(resolve(ApiResponse),500);
        else reject('Api Response not Present!')
    }) 
}

export default FeatureFlagServiceCall;
const dummyAPIResponse = {
    showLightAndMode: false,
    showTicTacToe: false,
    showRandomColorGenerator: true,
    ShowAccordian: false,
    showTreeView: false
}

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 500);
        else reject('Some Error occurred please try again')
    })
}

export default featureFlagsDataServiceCall;